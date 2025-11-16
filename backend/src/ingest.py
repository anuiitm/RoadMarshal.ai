import os
import json
import pandas as pd
from tqdm import tqdm
import numpy as np
import faiss
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer

load_dotenv()

embedder = SentenceTransformer("all-MiniLM-L6-v2")

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
BACKEND_DIR = os.path.dirname(BASE_DIR)
EMB_DIR = os.path.join(BACKEND_DIR, "embeddings_store")
os.makedirs(EMB_DIR, exist_ok=True)
DATA_PATH = os.path.join(BACKEND_DIR, "data/interventions.csv")
META_OUT = os.path.join(EMB_DIR, "metadata.json")
INDEX_OUT = os.path.join(EMB_DIR, "faiss.index")



def make_chunk(row):
    return (
        f"Issue: {row['issue_type']}\n"
        f"Category: {row['category']}\n"
        f"Sign: {row['sign_name']}\n"
        f"Description: {row['description']}\n"
        f"Standard: {row['standard']}, Clause: {row['clause']}"
    )


def embed_batch(texts):
    return embedder.encode(texts, normalize_embeddings=True)


def main():
    os.makedirs(os.path.join(BASE_DIR, "../embeddings_store"), exist_ok=True)
    df = pd.read_csv(DATA_PATH, encoding="ISO-8859-1")
    df = df.rename(columns={
        "id": "id",
        "problem": "issue_type",
        "category": "category",
        "type": "sign_name",
        "data": "description",
        "code": "standard",
        "clause": "clause"
    })

    df.fillna("", inplace=True)
    chunks = [make_chunk(r) for _, r in df.iterrows()]
    all_embeddings = []
    BATCH = 10

    for i in tqdm(range(0, len(chunks), BATCH)):
        batch = chunks[i:i+BATCH]
        embs = embed_batch(batch)  
        all_embeddings.extend(embs)

    embeddings = np.vstack(all_embeddings)
    faiss.normalize_L2(embeddings)

    dim = embeddings.shape[1]
    index = faiss.IndexFlatIP(dim)
    index.add(embeddings)
    faiss.write_index(index, INDEX_OUT)

    metadata = []
    for i, (_, row) in enumerate(df.iterrows()):
        metadata.append({
            "id": int(row["id"]),
            "issue_type": row["issue_type"],
            "category": row["category"],
            "sign_name": row["sign_name"],
            "description": row["description"],
            "standard": row["standard"],
            "clause": row["clause"],
            "chunk": chunks[i]
        })

    with open(META_OUT, "w", encoding="utf-8") as f:
        json.dump(metadata, f, indent=2, ensure_ascii=False)

    print("Embedding completed. Index and metadata saved.")


if __name__ == "__main__":
    main()

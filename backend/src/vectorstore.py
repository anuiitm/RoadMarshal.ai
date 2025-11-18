import os
import json
import numpy as np
import faiss
from sentence_transformers import SentenceTransformer


BASE_DIR = os.path.dirname(os.path.abspath(__file__))        
BACKEND_DIR = os.path.dirname(BASE_DIR)                      

META_OUT = os.path.join(BACKEND_DIR, "embeddings_store/metadata.json")
INDEX_OUT = os.path.join(BACKEND_DIR, "embeddings_store/faiss.index")


embedder = SentenceTransformer("all-MiniLM-L6-v2")   


def embed_query(text: str):
    """Embed a single user query using MiniLM model."""
    emb = embedder.encode([text], normalize_embeddings=True)
    return emb.astype("float32")


class VectorStore:
    def __init__(self):
        if not os.path.exists(INDEX_OUT):
            raise FileNotFoundError(f"FAISS index not found at: {INDEX_OUT}")

        self.index = faiss.read_index(INDEX_OUT)

        if not os.path.exists(META_OUT):
            raise FileNotFoundError(f"Metadata not found at: {META_OUT}")

        with open(META_OUT, "r", encoding="utf-8") as f:
            self.meta = json.load(f)

    def query(self, text: str, top_k: int = 5):
        """Retrieve top-k relevant chunks from FAISS."""
        q_emb = embed_query(text)
        distances, indices = self.index.search(q_emb, top_k)

        results = []
        for score, idx in zip(distances[0], indices[0]):
            row = self.meta[idx].copy()
            row["score"] = float(score)
            results.append(row)

        return results

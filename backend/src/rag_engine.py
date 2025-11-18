import functools
from .vectorstore import VectorStore
from .prompts import build_prompt
from .ai_client import call_gemini

@functools.lru_cache(maxsize=1)
def get_vectorstore():
    return VectorStore()

def rag_answer(query: str, top_k: int = 25):
    if not query or not query.strip():
        return {"error": "Empty query"}

    vs = get_vectorstore()

    retrieved = vs.query(query, top_k=top_k)



    if len(retrieved) == 0:
        return {
            "answer": "No relevant road safety information was found for the given query.",
            "retrieved": []
        }

    prompt = build_prompt(query, retrieved)

    try:
        answer = call_gemini(prompt)
    except Exception as e:
        answer = f"AI model failed: {str(e)}"

    return {
        "query": query,
        "answer": answer,
        "retrieved": retrieved
    }

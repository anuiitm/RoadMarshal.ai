
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json

from .rag_engine import rag_answer

app = FastAPI(title="Road Safety Intervention GPT Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Query(BaseModel):
    text: str
    top_k: int = 4

@app.get("/health")
def health():
    return {"status": "ok", "message": "Backend running successfully."}

@app.post("/process")
def process_query(payload: Query):
    try:
        response = rag_answer(payload.text, payload.top_k)
        return {"success": True, "data": response}
    except Exception as e:
        return {"success": False, "error": str(e)}

@app.get("/catalog")
def get_catalog():
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    BACKEND_DIR = os.path.dirname(BASE_DIR)
    catalog_path = os.path.join(BACKEND_DIR, "embeddings_store", "catalog.json")
    if not os.path.exists(catalog_path):
        raise HTTPException(status_code=404, detail="Catalog not found. Run generate_catalog.py")
    with open(catalog_path, "r", encoding="utf-8") as f:
        catalog = f.read()
    return {"success": True, "catalog": catalog}
class ParseReq(BaseModel):
    text: str

@app.post("/parse")
def parse_query(payload: ParseReq):
    from .ai_client import call_gemini
    parse_prompt = f"""Parse the following user query into JSON with fields:
{{"categories":[{{"category": "...", "type": "...", "problems": [...], "speed":"", "notes": ""}}], "prompt": "<a cleaned English prompt>"}}
User Query: {payload.text}
Output only valid JSON.
"""
    resp = call_gemini(parse_prompt)
    try:
        parsed = json.loads(resp)
        return {"success": True, "parsed": parsed}
    except Exception as e:
        return {"success": False, "error": "Parsing failed", "raw": resp}
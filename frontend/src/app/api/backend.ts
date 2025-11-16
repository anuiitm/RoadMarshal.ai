// frontend/src/app/api/backend.ts
import axios from "axios";

const API_BASE = "http://localhost:8000";

export interface CatalogResponse {
  success: boolean;
  catalog: any;
}

export interface ProcessResponse {
  success: boolean;
  data?: { answer: string; retrieved: any[] };
  error?: string;
}

export interface ParseResponse {
  success: boolean;
  parsed?: any;
  raw?: string;
  error?: string;
}

export async function fetchCatalog(): Promise<any | null> {
  const res = await axios.get<CatalogResponse>(`${API_BASE}/catalog`);
  if (res.data?.success && res.data.catalog) {
    if (typeof res.data.catalog === 'string') {
      return JSON.parse(res.data.catalog);
    } else {
      return res.data.catalog;
    }
  }
  return null;
}

export async function sendQuery(text: string, top_k = 4): Promise<ProcessResponse> {
  const res = await axios.post<ProcessResponse>(`${API_BASE}/process`, { text, top_k });
  return res.data;
}

export async function parseQuery(text: string): Promise<ParseResponse> {
  const res = await axios.post<ParseResponse>(`${API_BASE}/parse`, { text });
  return res.data;
}
export async function processQuery(finalPrompt: string) {
  const res = await fetch("http://127.0.0.1:8000/process", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: finalPrompt })
  });
  return res.json();
}


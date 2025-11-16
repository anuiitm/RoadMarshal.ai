import os
import json

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
BACKEND_DIR = os.path.dirname(BASE_DIR)
META_PATH = os.path.join(BACKEND_DIR, "embeddings_store", "metadata.json")
CATALOG_OUT = os.path.join(BACKEND_DIR, "embeddings_store", "catalog.json")

def build_catalog():
    with open(META_PATH, "r", encoding="utf-8") as f:
        meta = json.load(f)

    catalog = {}
    for item in meta:
        cat = item.get("category", "Unknown")
        t = item.get("sign_name") or item.get("type") or "Unknown Type"
        problem = item.get("issue_type") or "Unknown Issue"
        if cat not in catalog:
            catalog[cat] = {}
        if t not in catalog[cat]:
            catalog[cat][t] = {
                "problems": set(),
                "examples": [],
                "standards": set()
            }
        catalog[cat][t]["problems"].add(problem)
        catalog[cat][t]["standards"].add(f"{item.get('standard','')}, Clause: {item.get('clause','')}")
        catalog[cat][t]["examples"].append({
            "id": item.get("id"),
            "problem": problem,
            "description": item.get("description") or item.get("data","")
        })

    for cat in catalog:
        for t in catalog[cat]:
            catalog[cat][t]["problems"] = sorted(list(catalog[cat][t]["problems"]))
            catalog[cat][t]["standards"] = sorted(list(catalog[cat][t]["standards"]))
            catalog[cat][t]["examples"] = catalog[cat][t]["examples"][:3]

    with open(CATALOG_OUT, "w", encoding="utf-8") as f:
        json.dump(catalog, f, indent=2, ensure_ascii=False)

    print(f"Catalog written to {CATALOG_OUT}")

if __name__ == "__main__":
    build_catalog()

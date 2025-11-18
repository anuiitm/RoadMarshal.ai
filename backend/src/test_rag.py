from src.rag_engine import rag_answer

query = """
A word message "DISABLED" marking is non-standard.
A straight arrow marking is non-standard.
A continuous center line marking has the wrong color.
A ladder hatching marking has the wrong color.
A single chevron (normal) sign is faded.
A hospital sign is faded.
A compulsory turn left sign is wrongly placed.
Pedestrian crossing informatory signs are wrongly placed.
A speed hump has a placement issue.
A speed bump is non-standard.
A speed hump is non-standard.
"""
resp = rag_answer(query, top_k=50)  # increased to retrieve many chunks

print("\n=== FINAL ANSWER ===\n")
print(resp["answer"])

print("\n=== RETRIEVED CHUNKS ===\n")
for r in resp["retrieved"]:
    print(f"- ID: {r['id']}  | Score: {r['score']:.3f} | Issue: {r['issue_type']}")
    print(f"  Clause: {r['standard']} - {r['clause']}\n")

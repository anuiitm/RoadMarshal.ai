from src.rag_engine import rag_answer

query = "STOP sign faded on 60 kmph road"
resp = rag_answer(query)

print("\n=== FINAL ANSWER ===\n")
print(resp["answer"])

print("\n=== RETRIEVED CHUNKS ===\n")
for r in resp["retrieved"]:
    print(f"- ID: {r['id']}  | Score: {r['score']:.3f} | Issue: {r['issue_type']}")
    print(f"  Clause: {r['standard']} - {r['clause']}\n")

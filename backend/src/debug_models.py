import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")
BASE_URL = "https://generativelanguage.googleapis.com/v1beta/openai/"

print(f"DEBUG: API Key present: {bool(API_KEY)}")
print(f"DEBUG: Base URL: {BASE_URL}")

client = OpenAI(
    api_key=API_KEY,
    base_url=BASE_URL
)

try:
    models = client.models.list()
    print("\nAvailable Models:")
    for model in models.data:
        print(f"- {model.id}")
except Exception as e:
    print(f"\nError listing models: {e}")

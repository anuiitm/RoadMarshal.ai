import os
import time
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")
MODEL = os.getenv("GEMINI_MODEL", os.getenv("CHAT_MODEL", "gemini-2.0-flash"))

print(f"DEBUG: Using model: {MODEL}")

client = OpenAI(
    api_key=API_KEY,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

def call_gemini(prompt, retries=3):
    
    for attempt in range(retries):
        try:
            response = client.chat.completions.create(
                model=MODEL,
                messages=[
                    {"role": "system", "content": "You are a precise and reliable AI."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.0,
                max_tokens=2000
            )

            output = response.choices[0].message.content.strip()
            return output

        except Exception as e:
            if attempt == retries - 1:
                return f"Error: gemini API failed after {retries} attempts. Details: {str(e)}"
            
            time.sleep(1.2)  


    return "Unexpected error occurred while calling gemini."

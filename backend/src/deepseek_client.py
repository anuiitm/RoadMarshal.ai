import os
import time
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("DEEPSEEK_API_KEY")
MODEL = os.getenv("CHAT_MODEL", "deepseek-chat")

client = OpenAI(
    api_key=API_KEY,
    base_url="https://api.deepseek.com/v1"
)

def call_deepseek(prompt, retries=3):
    
    for attempt in range(retries):
        try:
            response = client.chat.completions.create(
                model=MODEL,
                messages=[
                    {"role": "system", "content": "You are a precise and reliable AI."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.0,
                max_tokens=700
            )

            output = response.choices[0].message.content.strip()
            return output

        except Exception as e:
            if attempt == retries - 1:
                return f"Error: DeepSeek API failed after {retries} attempts. Details: {str(e)}"
            
            time.sleep(1.2)  


    return "Unexpected error occurred while calling DeepSeek."

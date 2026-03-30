from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017/mowd")
client = AsyncIOMotorClient(MONGO_URL)
db = client.get_database()
waitlist_collection = db.get_collection("waitlist")

class WaitlistRequest(BaseModel):
    email: str

@app.get("/api/health")
def health_check():
    return {"status": "healthy"}

@app.post("/api/waitlist")
async def join_waitlist(request: WaitlistRequest):
    # Check if email already exists
    existing = await waitlist_collection.find_one({"email": request.email})
    if existing:
        return {"status": "success", "message": "Already on the waitlist"}
        
    # Save to MongoDB
    await waitlist_collection.insert_one({"email": request.email})
    print(f"New waitlist signup saved: {request.email}")
    return {"status": "success", "message": "Successfully joined waitlist"}

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class WaitlistRequest(BaseModel):
    email: str

@app.get("/api/health")
def health_check():
    return {"status": "healthy"}

@app.post("/api/waitlist")
def join_waitlist(request: WaitlistRequest):
    # Here you would typically save it to MongoDB
    print(f"New waitlist signup: {request.email}")
    return {"status": "success", "message": "Successfully joined waitlist"}


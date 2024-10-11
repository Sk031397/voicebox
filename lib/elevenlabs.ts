import { ElevenLabsClient } from "elevenlabs"; 
export const elevenlabs = new ElevenLabsClient({ apiKey: process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY, });
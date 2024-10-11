'use client';
import { useAICharacter } from "@/hooks/useAICharacter";
import { useState } from "react";
import { VoiceList } from "./VoiceList";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Voice } from "elevenlabs/api";
import { useTTSStore } from "@/hooks/useTTS";
import { DownloadIcon, Loader2Icon, SparklesIcon } from "lucide-react";
import axios from "axios";
export const TypingBox = ({ voices }: { voices: Voice[] }) => {
  const loading = useAICharacter((state) => state.loading);
  const setIsLoading = useAICharacter((state) => state.setIsLoading);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const { text, voice, setText } = useTTSStore();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(
        "/api/generate",
        {
          text,
          voice,
        },
        {
          responseType: "blob",
        }
      );

      const audioBlob = res.data;
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  const handleDownload = () => {
    if (audioUrl) {
      const a = document.createElement("a");
      a.href = audioUrl;
      a.download = "tts_audio.mp3";
      a.click();
    }
  };

  return (
    <div className="z-10 max-w-[600px] flex space-y-6 flex-col bg-gradient-to-tr  from-slate-300/30 via-gray-400/30 to-slate-600-400/30 p-4  backdrop-blur-md rounded-xl border-slate-100/30 border">

      {loading ? (
        <div className="flex justify-center items-center">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
        </div>
      ) : (
        <div className="gap-3 flex">
          <form className="flex flex-row gap-3" onSubmit={handleSubmit}>
          <Input
            className="focus:outline focus:outline-white/80 flex-grow bg-slate-800/60 p-2 px-4 rounded-full text-white placeholder:text-white/50 shadow-inner shadow-slate-900/60"
            placeholder="What insights do you have?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <VoiceList voices={voices} />
          <Button
            className="bg-slate-100/20 p-2 px-6 rounded-full text-white"
            type="submit"
            disabled={loading || !text || !voice}
            onClick={() => handleDownload}
          >
            {loading ? (
            <div className="flex items-center space-x-3">
              <span>Generating</span>
              <Loader2Icon className="animate-spin size-5" />
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <span>Generate</span>
              <SparklesIcon className="size-5" />
            </div>
          )}
          </Button>
          </form>
          {audioUrl && (
        <div className="flex items-center space-x-3 mt-8">
          <audio controls className="w-full">
            <source src={audioUrl} type="audio/mpeg" />
          </audio>

          <Button
            onClick={handleDownload}
            size="icon"
            className="bg-indigo-500 hover:bg-indigo-500/90"
          >
            <DownloadIcon className="size-5" />
          </Button>
        </div>
      )}
        </div>
      )}
    </div>
  );
};
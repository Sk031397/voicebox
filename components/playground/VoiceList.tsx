
import { PauseIcon, PlayIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Voice } from "elevenlabs/api"
import { useRef, useState } from "react";
import { useTTSStore } from "@/hooks/useTTS";

export const VoiceList = ({ voices }: { voices: Voice[] }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { setVoice, voice } = useTTSStore();
  const [isPlaying,setIsPlaying] = useState<boolean>(false);
  const [selectedVoice,setSelectedVoice] = useState<Voice>();
  const handleVoiceSelect = (voiceId:string) => {
    const voice = voices.find((v) => v.voice_id === voiceId);
    setVoice(voice?.name as string);
    setSelectedVoice(voice);
    setIsPlaying(false);
    if(audioRef.current){
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }
  }
  const handlePlayPause = () => {
    if(!audioRef.current) return;
    if(isPlaying){
        audioRef.current.pause();
    }else{
        audioRef.current.play();
    }
  }
  return (
    <div className="flex items-center gap-4">
      <Select
      onValueChange={handleVoiceSelect}>
        <SelectTrigger>
            <SelectValue placeholder="Search Voice"/>
        </SelectTrigger>
        <SelectContent>
        {voices.map((voice) => (
            <SelectItem key={voice.voice_id} value={voice.voice_id}>{voice.name}</SelectItem>
        ))}
        </SelectContent>
      </Select>
      {selectedVoice && (
        <div>
            <Button type="button" onClick={handlePlayPause} className="bg-slate-100/20 p-2 px-6 rounded-full text-white">
                {isPlaying ? (
                    <PauseIcon className="size-5"/>
                ): (
                    <PlayIcon className="size-5"/>
                )}
            </Button>
            <audio
            ref={audioRef}
            src={selectedVoice.preview_url}
            onEnded={() => setIsPlaying(false)}
            />
        </div>
      )}
    </div>
  )
}



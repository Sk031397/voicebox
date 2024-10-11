import { create } from "zustand";

export const characters = ["Nanami", "Naoki"] as const;
type Character = typeof characters[number];

interface Message {
  id: number;
  question: string;
  answer?: { japanese: { word: string }[] };
  audioPlayer?: HTMLAudioElement | null;
  visemes?: any; 
  speech?: string;
}

interface AICharacterStore {
  messages: Message[];
  currentMessage: Message | null;
  character: Character;
  setCharacter: (character: Character) => void;
  classroom: string;
  setClassroom: (classroom: string) => void;
  loading: boolean;
  setIsLoading: (isLoading: boolean) => void; 
}

export const useAICharacter = create<AICharacterStore>((set, get) => ({
  messages: [],
  currentMessage: null,
  character: characters[0],
  setCharacter: (character) => {
    set(() => ({
      character,
      messages: get().messages.map((message) => {
        message.audioPlayer = null;
        return message;
      }),
    }));
  },
  classroom: "default",
  setClassroom: (classroom) => {
    set(() => ({ classroom }));
  },
  loading: false,
  setIsLoading:(isLoading) => {
    set(() => ({ loading: isLoading }))
  }
}));

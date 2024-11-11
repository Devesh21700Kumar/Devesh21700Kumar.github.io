import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Sparkles, Brain, Code, BookOpen, Eye } from "lucide-react";
import { Post } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Mood =
  | "excited"
  | "confused"
  | "accomplished"
  | "struggling"
  | "contemplative"
  | "happy"
  | "sad";

export function getMoodIcon(mood: Mood) {
  switch (mood) {
    case "excited":
      return <Sparkles className="text-yellow-400" />;
    case "confused":
      return <Brain className="text-red-400" />;
    case "accomplished":
      return <Code className="text-green-400" />;
    case "struggling":
      return <BookOpen className="text-blue-400" />;
    case "contemplative":
      return <Eye className="text-purple-400" />;
    case "happy":
      return <Sparkles className="text-pink-400" />;
    case "sad":
      return <Brain className="text-gray-400" />;
    default:
      return null;
  }
}

export function getMoodText(mood: Post["mood"]) {
  switch (mood) {
    case "excited":
      return "Feeling excited about this discovery!";
    case "confused":
      return "Still wrapping my head around this...";
    case "accomplished":
      return "Successfully implemented this concept!";
    case "struggling":
      return "Working through the challenges...";
    case "contemplative":
      return "Gave it a thought";
    case "happy":
      return "gg";
    case "sad":
      return "Talha Anjum time";
    default:
      return null;
  }
}

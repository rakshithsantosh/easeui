"use client";

import {
  PaperclipIcon as PaperPlaneRight,
  MicIcon as Microphone,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export function AIInputVariation3() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 200,
  });
  const [inputValue, setInputValue] = useState("");

  const handleReset = () => {
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-xl w-full mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-xl -z-10" />
        <Textarea
          placeholder="What can I help you with?"
          className={cn(
            "max-w-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl pl-4 pr-14",
            "placeholder:text-gray-400 dark:placeholder:text-gray-500",
            "border-none",
            "text-black dark:text-white text-wrap",
            "overflow-y-auto resize-none",
            "focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:ring-offset-0",
            "transition-all duration-200 ease-out",
            "leading-[1.2] py-[14px]",
            "min-h-[52px]",
            "max-h-[200px]"
          )}
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            adjustHeight();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleReset();
            }
          }}
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex">
          <button
            onClick={handleReset}
            type="button"
            className={cn(
              "p-2 rounded-lg transition-all duration-300",
              inputValue
                ? "bg-green-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500"
            )}
          >
            {inputValue ? (
              <PaperPlaneRight className="w-4 h-4" />
            ) : (
              <Microphone className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

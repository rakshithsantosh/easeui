"use client";

import { ArrowRight, Mic, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export function AIInputVariation8() {
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
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 p-0.5">
          <div className="absolute inset-0 rounded-[14px] bg-white dark:bg-gray-950" />
        </div>
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500 dark:text-purple-400 z-10">
          <Sparkles className="w-4 h-4" />
        </div>
        <Textarea
          placeholder="Ask me anything..."
          className={cn(
            "max-w-xl bg-transparent rounded-2xl pl-12 pr-14",
            "placeholder:text-gray-400 dark:placeholder:text-gray-500",
            "border-none",
            "text-black dark:text-white text-wrap",
            "overflow-y-auto resize-none",
            "focus-visible:ring-0 focus-visible:ring-offset-0",
            "transition-all duration-200 ease-out",
            "leading-[1.2] py-[14px]",
            "min-h-[52px]",
            "max-h-[200px]",
            "relative z-10"
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

        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2 z-10">
          {!inputValue && (
            <button className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
              <Mic className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleReset}
            type="button"
            className={cn(
              "p-1.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white transition-all",
              inputValue ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

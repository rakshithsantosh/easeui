"use client";

import { ArrowUpCircle, Mic, Bot } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export function AIInputVariation5() {
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
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Bot className="w-5 h-5 text-gray-400 dark:text-gray-500" />
        </div>
        <Textarea
          placeholder="Ask the AI..."
          className={cn(
            "max-w-xl bg-gray-50 dark:bg-gray-900 rounded-xl pl-12 pr-12",
            "placeholder:text-gray-400 dark:placeholder:text-gray-500",
            "border border-gray-200 dark:border-gray-800",
            "text-black dark:text-white text-wrap",
            "overflow-y-auto resize-none",
            "focus-visible:ring-1 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-700 focus-visible:ring-offset-0",
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

        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {inputValue ? (
            <button
              onClick={handleReset}
              type="button"
              className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
            >
              <ArrowUpCircle className="w-6 h-6" />
            </button>
          ) : (
            <button className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
              <Mic className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

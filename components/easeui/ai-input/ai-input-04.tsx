"use client";

import { SendHorizontal, Mic, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export function AIInputVariation4() {
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
      <div className="relative max-w-xl w-full mx-auto border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="flex items-center px-4 py-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <Sparkles className="w-4 h-4 text-amber-500 mr-2" />
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            AI Assistant
          </span>
        </div>
        <Textarea
          placeholder="Type your message..."
          className={cn(
            "max-w-xl bg-white dark:bg-gray-950 rounded-none pl-4 pr-14",
            "placeholder:text-gray-400 dark:placeholder:text-gray-500",
            "border-none",
            "text-black dark:text-white text-wrap",
            "overflow-y-auto resize-none",
            "focus-visible:ring-0 focus-visible:ring-offset-0",
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

        <div className="absolute right-3 bottom-3 flex gap-2">
          {!inputValue && (
            <button className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
              <Mic className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleReset}
            type="button"
            className={cn(
              "p-1.5 rounded-md transition-all",
              inputValue
                ? "bg-amber-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500"
            )}
          >
            <SendHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

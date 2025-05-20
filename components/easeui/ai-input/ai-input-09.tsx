"use client";

import { Send, Mic, Command } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export function AIInputVariation9() {
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
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
          <Command className="w-4 h-4" />
        </div>
        <Textarea
          placeholder="Type / to use commands..."
          className={cn(
            "max-w-xl bg-white dark:bg-gray-950 rounded-md pl-12 pr-14",
            "placeholder:text-gray-400 dark:placeholder:text-gray-500",
            "border border-gray-200 dark:border-gray-800",
            "text-black dark:text-white text-wrap",
            "overflow-y-auto resize-none",
            "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-300 dark:focus-visible:border-gray-700",
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

        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {!inputValue && (
            <div className="flex items-center gap-1 px-1.5 py-1 rounded border border-gray-200 dark:border-gray-800 text-xs text-gray-400 dark:text-gray-500">
              <span>⌘</span>
              <span>↵</span>
            </div>
          )}
          <button
            onClick={handleReset}
            type="button"
            className={cn(
              "p-1.5 rounded-md transition-all",
              inputValue
                ? "bg-black dark:bg-white text-white dark:text-black"
                : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500"
            )}
          >
            {inputValue ? (
              <Send className="w-3.5 h-3.5" />
            ) : (
              <Mic className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

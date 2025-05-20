"use client";

import { SendHorizonal, Mic, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export function AIInputVariation7() {
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
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <button className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
        <Textarea
          placeholder="Message..."
          className={cn(
            "max-w-xl bg-white dark:bg-gray-950 rounded-lg pl-12 pr-14",
            "placeholder:text-gray-400 dark:placeholder:text-gray-500",
            "border border-gray-200 dark:border-gray-800",
            "text-black dark:text-white text-wrap",
            "overflow-y-auto resize-none",
            "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-300 dark:focus-visible:border-gray-700",
            "transition-all duration-200 ease-out",
            "leading-[1.2] py-[14px]",
            "min-h-[52px]",
            "max-h-[200px]",
            "shadow-sm"
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

        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
          {!inputValue && (
            <button className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Mic className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            onClick={handleReset}
            type="button"
            className={cn(
              "p-1.5 rounded-full transition-all",
              inputValue
                ? "bg-blue-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 opacity-0"
            )}
          >
            <SendHorizonal className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { ArrowUp, Mic, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export function AIInputVariation10() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 200,
  });
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleReset = () => {
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-xl w-full mx-auto">
        <div
          className={cn(
            "absolute inset-0 rounded-2xl transition-colors duration-300",
            isTyping
              ? "bg-black/5 dark:bg-white/10"
              : "bg-black/[0.03] dark:bg-white/[0.06]"
          )}
        />

        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black/50 dark:text-white/50">
          <Sparkles className="w-4 h-4" />
        </div>

        <Textarea
          placeholder="Message AI..."
          className={cn(
            "max-w-xl bg-transparent rounded-2xl pl-12 pr-14",
            "placeholder:text-black/40 dark:placeholder:text-white/40",
            "border-none",
            "text-black dark:text-white text-wrap",
            "overflow-y-auto resize-none",
            "focus-visible:ring-0 focus-visible:ring-offset-0",
            "transition-all duration-200 ease-out",
            "leading-[1.2] py-[16px]",
            "min-h-[52px]",
            "max-h-[200px]"
          )}
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            adjustHeight();
          }}
          onFocus={() => setIsTyping(true)}
          onBlur={() => setIsTyping(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleReset();
            }
          }}
        />

        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {inputValue ? (
            <>
              <button
                onClick={() => {
                  setInputValue("");
                  adjustHeight(true);
                }}
                type="button"
                className="p-1 rounded-full bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleReset}
                type="button"
                className="p-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </>
          ) : (
            <button className="p-1.5 rounded-full bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50 hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
              <Mic className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import TailwindCSS from "../icons/tailwind";
import { BrowseComponentsButton } from "../ui/browser-buttons";
import { BrowseBlocksButton } from "../ui/browse-blocks";
import Features from "./Features";

export function HeroSection() {
  return (
    <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:py-16 lg:py-20">
      <div className="w-full lg:w=[455] flex-col items-start text-left space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-light leading-[1.1] text-zinc-900 dark:text-zinc-100">
            Craft with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
              Precision
            </span>
            <br />
            build with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
              ease
            </span>
          </h1>
          <p className="mt-6 text-base md:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg">
            A curated collection of{" "}
            <span className="font-semibold">100+ premium UI components</span>{" "}
            carfted with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
              Tailwind Css
            </span>{" "}
            and{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
              shadcn/ui
            </span>{" "}
            for modern React and Next.js applications
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-start w-full "
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-300 pb-3 text-start flex items-center gap-2">
            <TailwindCSS className="w-4 b-4" />
            <span className="flex items-center gap-1.5">
              Now updated for TAILWIND CSS 4.0!{" "}
              <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:purple-300">
                <Sparkles className="h-3 w-4 mr-1" />
                New
              </span>
            </span>
          </span>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3">
            <BrowseComponentsButton />
            <BrowseBlocksButton />
          </div>
        </motion.div>
        <Features />
      </div>
    </div>
  );
}

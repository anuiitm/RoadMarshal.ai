"use client";
import clsx from "clsx";

export default function Chip({
  label,
  selected = false,
  onClick,
  className = ""
}: {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-5 py-3 text-base font-semibold rounded-xl border transition-all",
        selected
          ? "bg-emerald-600 text-white border-emerald-700 shadow"
          : "bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-300 dark:hover:bg-zinc-600"
      )}
    >
      {label}
    </button>
  );
}

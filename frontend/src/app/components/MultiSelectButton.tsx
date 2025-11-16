"use client";
import clsx from "clsx";

export default function MultiSelectButton({
  label,
  icon: Icon,
  selected,
  onToggle,
}: {
  label: string;
  icon?: any;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={clsx(
        "flex-1 md:flex-initial min-w-[160px] px-5 py-4 rounded-lg text-center flex flex-col items-center gap-2 border",
        selected ? "bg-blue-600 text-white border-blue-600 shadow-lg" : "bg-white dark:bg-zinc-900 border-zinc-200"
      )}
    >
      {Icon && <Icon className="w-6 h-6" />}
      <div className="font-medium">{label}</div>
    </button>
  );
}

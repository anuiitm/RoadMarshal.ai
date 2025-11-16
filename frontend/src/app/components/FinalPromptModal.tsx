// frontend/src/app/components/FinalPromptModal.tsx
"use client";
import React, { useState } from "react";

export default function FinalPromptModal({
  initial,
  onConfirm,
  onClose,
}: {
  initial: string;
  onConfirm: (prompt: string) => void;
  onClose: () => void;
}) {
  const [text, setText] = useState(initial);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-3xl bg-white dark:bg-zinc-900 rounded p-6">
        <h3 className="text-lg font-semibold mb-3">I would like to confirm the prompt. Please review it. Please make changes if needed.</h3>
        <textarea value={text} onChange={(e)=>setText(e.target.value)} className="w-full min-h-[160px] p-3 bg-transparent border rounded" />
        <div className="flex justify-end gap-3 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-white text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white">Cancel</button>
          <button onClick={() => onConfirm(text)} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Confirm & Run</button>
        </div>
      </div>
    </div>
  );
}

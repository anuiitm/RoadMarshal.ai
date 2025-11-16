export default function LoadingView({ message = "Please wait - I'm onto it." }: { message?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="animate-spin h-16 w-16 border-4 border-t-emerald-600 border-zinc-200 dark:border-zinc-700 rounded-full" />
        <div className="text-center">
          <div className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{message}</div>
        </div>
      </div>
    </div>
  );
}


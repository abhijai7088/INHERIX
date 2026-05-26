export default function Loading() {
  return (
    <div className="min-h-[58vh] bg-[#f8faff] pt-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_14px_42px_rgba(8,17,31,0.07)]">
          <div className="h-1.5 w-full overflow-hidden bg-slate-100">
            <div className="h-full w-1/3 animate-[routeLoading_0.9s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-[#6366f1] via-[#3b82f6] to-[#14b8a6]" />
          </div>
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              <div className="h-4 w-28 rounded-full bg-slate-200" />
              <div className="h-10 w-full max-w-lg rounded-2xl bg-slate-200" />
              <div className="h-10 w-4/5 rounded-2xl bg-slate-100" />
              <div className="h-4 w-full max-w-xl rounded-full bg-slate-100" />
              <div className="h-4 w-2/3 rounded-full bg-slate-100" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-28 rounded-2xl border border-slate-100 bg-slate-50" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

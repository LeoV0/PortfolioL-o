export function TopLinks({ onAbout }: { onAbout: () => void }) {
  return (
    <div className="fixed top-6 right-6 z-50 flex gap-8 text-xs uppercase tracking-[0.25em] text-black">
       <button
        onClick={onAbout}
        disabled={!onAbout}
        className="hover:text-neutral-900 transition-colors cursor-pointer"
      >
        About
      </button>
      
    </div>
  );
}

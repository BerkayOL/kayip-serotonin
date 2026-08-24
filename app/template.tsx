export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-fade-in gpu-layer flex-1 flex flex-col w-full">
      {children}
    </div>
  );
}

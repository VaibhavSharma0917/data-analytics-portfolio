export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14,165,233,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* Blur Circle 1 */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-cyan-300/30 blur-[120px]" />

      {/* Blur Circle 2 */}
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-[140px]" />

      {/* Decorative Line */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <path
          d="M0 600
             C250 500
             450 700
             700 520
             S1200 400
             1600 500"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="4"
        />
      </svg>

    </div>
  );
}
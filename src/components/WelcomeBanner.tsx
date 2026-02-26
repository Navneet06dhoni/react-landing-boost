import { Upload, Sparkles } from "lucide-react";

const WelcomeBanner = () => {
  return (
    <div
      className="animate-fade-in rounded-2xl p-7 flex items-center justify-between overflow-hidden relative"
      style={{ background: "var(--gradient-banner)" }}
    >
      {/* Decorative circles */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5" />
      <div className="absolute right-20 -bottom-8 h-24 w-24 rounded-full bg-primary/8" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="h-4 w-4 text-accent-foreground" />
          <span className="text-xs font-bold uppercase tracking-widest text-accent-foreground">Welcome back</span>
        </div>
        <h2 className="font-display text-2xl font-extrabold text-foreground">
          Hello, Alex! 👋
        </h2>
        <p className="mt-1.5 text-sm text-muted-foreground max-w-md">
          You've mastered 4 new topics this week. Ready to continue your learning journey?
        </p>
      </div>
      <button className="relative z-10 flex items-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/25 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0">
        <Upload className="h-4 w-4" />
        Upload Document
      </button>
    </div>
  );
};

export default WelcomeBanner;

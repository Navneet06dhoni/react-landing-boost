import { Sparkles, ArrowRight } from "lucide-react";

const LearningGoals = () => {
  return (
    <div className="space-y-5">
      <div className="animate-fade-in rounded-2xl border border-border bg-card p-6" style={{ animationDelay: "350ms" }}>
        <h3 className="font-display text-lg font-bold text-foreground mb-6">Learning Goals</h3>

        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-sm font-medium text-foreground">Daily Flashcards</span>
              <span className="text-sm font-extrabold text-primary">18/25</span>
            </div>
            <div className="h-2.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-primary transition-all duration-700 ease-out" style={{ width: "72%" }} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-sm font-medium text-foreground">Course Completion</span>
              <span className="text-sm font-extrabold text-primary">45%</span>
            </div>
            <div className="h-2.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-primary transition-all duration-700 ease-out" style={{ width: "45%" }} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="animate-fade-in rounded-2xl p-6 text-primary-foreground relative overflow-hidden"
        style={{ background: "var(--gradient-cta)", animationDelay: "450ms" }}
      >
        <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10" />
        <div className="absolute right-10 bottom-0 h-16 w-16 rounded-full bg-white/5" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5" />
            <h3 className="font-display text-lg font-bold">Pro Plan</h3>
          </div>
          <p className="text-sm leading-relaxed opacity-90 mb-5">
            Unlock unlimited AI document summaries and personalized quizzes.
          </p>
          <button className="flex items-center gap-2 rounded-xl bg-primary-foreground/20 px-5 py-2.5 text-sm font-bold backdrop-blur-sm transition-all duration-200 hover:bg-primary-foreground/30">
            Upgrade Now
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningGoals;

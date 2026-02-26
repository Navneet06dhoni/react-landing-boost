import { Sparkles } from "lucide-react";

const LearningGoals = () => {
  return (
    <div className="space-y-4">
      <div className="animate-fade-in rounded-xl border border-border bg-card p-6" style={{ animationDelay: "400ms" }}>
        <h3 className="font-display text-lg font-bold text-foreground mb-5">Learning Goals</h3>

        <div className="space-y-5">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Daily Flashcards</span>
              <span className="text-sm font-bold text-primary">18/25</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-2 rounded-full bg-primary transition-all duration-500" style={{ width: "72%" }} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Course Completion</span>
              <span className="text-sm font-bold text-primary">45%</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-2 rounded-full bg-primary transition-all duration-500" style={{ width: "45%" }} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="animate-fade-in rounded-xl p-6 text-primary-foreground"
        style={{ background: "var(--gradient-cta)", animationDelay: "500ms" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5" />
          <h3 className="font-display text-lg font-bold">Pro Plan Features</h3>
        </div>
        <p className="text-sm opacity-90 mb-4">
          Unlock unlimited AI document summaries and personalized quizzes.
        </p>
        <button className="rounded-lg bg-primary-foreground/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-primary-foreground/30">
          Upgrade Now
        </button>
      </div>
    </div>
  );
};

export default LearningGoals;

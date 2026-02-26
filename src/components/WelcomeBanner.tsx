import { Upload } from "lucide-react";

const WelcomeBanner = () => {
  return (
    <div className="animate-fade-in rounded-xl bg-accent p-6 flex items-center justify-between">
      <div>
        <h2 className="font-display text-xl font-bold text-accent-foreground">
          Welcome back, Alex!
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          You've mastered 4 new topics this week. Ready to continue your learning journey?
        </p>
      </div>
      <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
        <Upload className="h-4 w-4" />
        Upload New Document
      </button>
    </div>
  );
};

export default WelcomeBanner;

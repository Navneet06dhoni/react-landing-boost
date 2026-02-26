import { FileText, Layers, Sparkles, TrendingUp } from "lucide-react";

const stats = [
  { label: "TOTAL DOCUMENTS", value: "42", change: "~5%", icon: FileText, color: "text-primary" },
  { label: "FLASHCARDS", value: "1,280", change: "~12%", icon: Layers, color: "text-primary" },
  { label: "QUIZZES TAKEN", value: "15", change: "~2%", icon: Sparkles, color: "text-primary" },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="animate-fade-in rounded-xl border border-border bg-card p-5 transition-shadow duration-200 hover:shadow-md"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="flex items-center gap-0.5 text-xs font-medium text-success">
                  <TrendingUp className="h-3 w-3" />
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;

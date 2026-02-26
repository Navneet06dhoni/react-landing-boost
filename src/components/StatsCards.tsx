import { FileText, Layers, Sparkles, TrendingUp } from "lucide-react";

const stats = [
  { label: "Total Documents", value: "42", change: "+5%", icon: FileText },
  { label: "Flashcards", value: "1,280", change: "+12%", icon: Layers },
  { label: "Quizzes Taken", value: "15", change: "+2%", icon: Sparkles },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="group animate-fade-in rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent transition-colors group-hover:bg-primary/10">
              <stat.icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-bold text-success">
              <TrendingUp className="h-3 w-3" />
              {stat.change}
            </span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            {stat.label}
          </p>
          <span className="font-display text-3xl font-extrabold text-foreground">{stat.value}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;

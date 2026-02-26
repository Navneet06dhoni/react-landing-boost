import { CheckCircle2, Layers, FileUp, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  { title: "Intro_to_AI.pdf", desc: "Quiz Completed • Score: 85%", time: "2h ago", icon: CheckCircle2, bgClass: "bg-success/10", textClass: "text-success" },
  { title: "Quantum Physics Notes", desc: "Generated 24 new flashcards", time: "5h ago", icon: Layers, bgClass: "bg-primary/10", textClass: "text-primary" },
  { title: "Biology_Chapter_4.pdf", desc: "Document uploaded successfully", time: "Yesterday", icon: FileUp, bgClass: "bg-accent", textClass: "text-accent-foreground" },
  { title: "Deep Learning Basics", desc: "Added to Favorites", time: "2 days ago", icon: Star, bgClass: "bg-amber-500/10", textClass: "text-amber-600" },
];

const RecentActivity = () => {
  return (
    <div className="animate-fade-in rounded-2xl border border-border bg-card" style={{ animationDelay: "250ms" }}>
      <div className="flex items-center justify-between border-b border-border px-6 py-5">
        <h3 className="font-display text-lg font-bold text-foreground">Recent Activity</h3>
        <button className="text-xs font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors">View All</button>
      </div>
      <div className="divide-y divide-border">
        {activities.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-muted/30"
          >
            <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl shrink-0", item.bgClass)}>
              <item.icon className={cn("h-4 w-4", item.textClass)} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
            </div>
            <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;

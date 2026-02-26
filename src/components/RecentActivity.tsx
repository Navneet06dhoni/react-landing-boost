import { CheckCircle2, Layers, FileUp, Star } from "lucide-react";

const activities = [
  { title: "Intro_to_AI.pdf", desc: "Quiz Completed • Score: 85%", time: "2h ago", icon: CheckCircle2, iconColor: "text-success" },
  { title: "Quantum Physics Notes", desc: "Generated 24 new flashcards", time: "5h ago", icon: Layers, iconColor: "text-primary" },
  { title: "Biology_Chapter_4.pdf", desc: "Document uploaded successfully", time: "Yesterday", icon: FileUp, iconColor: "text-accent-foreground" },
  { title: "Deep Learning Basics", desc: "Added to Favorites", time: "2 days ago", icon: Star, iconColor: "text-amber-500" },
];

const RecentActivity = () => {
  return (
    <div className="animate-fade-in rounded-xl border border-border bg-card p-6" style={{ animationDelay: "300ms" }}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-lg font-bold text-foreground">Recent Activity</h3>
        <button className="text-sm font-medium text-primary hover:underline">View All</button>
      </div>
      <div className="space-y-1">
        {activities.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-muted/50"
          >
            <div className={`flex h-9 w-9 items-center justify-center rounded-full bg-muted ${item.iconColor}`}>
              <item.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;

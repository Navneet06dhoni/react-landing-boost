import { Search, Bell } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-card/80 px-8 py-4 backdrop-blur-xl">
      <h1 className="font-display text-xl font-bold text-foreground">Dashboard Overview</h1>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search your library..."
            className="h-10 w-80 rounded-xl border border-input bg-muted/50 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
          />
        </div>

        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-destructive ring-2 ring-card" />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;

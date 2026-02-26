import { Search, Bell } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between border-b border-border bg-card px-8 py-4">
      <h1 className="font-display text-xl font-bold text-foreground">Dashboard Overview</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search your library..."
            className="h-10 w-72 rounded-lg border border-input bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
          />
        </div>

        <button className="relative flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
        </button>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-foreground">Alex Johnson</p>
            <p className="text-xs text-muted-foreground">Free Plan</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-300 to-orange-400" />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

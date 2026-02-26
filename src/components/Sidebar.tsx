import { LayoutDashboard, FileText, Layers, ClipboardList, Star, User, Settings, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Documents", icon: FileText },
  { label: "Flashcards", icon: Layers },
  { label: "Quizzes", icon: ClipboardList },
  { label: "Favorites", icon: Star },
];

const accountItems = [
  { label: "Profile", icon: User },
  { label: "Settings", icon: Settings },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-[260px] flex-col border-r border-sidebar-border bg-sidebar py-6">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-3 px-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30">
          <BookOpen className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <span className="font-display text-lg font-extrabold tracking-tight text-foreground">StudyTantra</span>
        </div>
      </div>

      <nav className="flex flex-1 flex-col px-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[13px] font-semibold transition-all duration-200",
                item.active
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-[18px] w-[18px]" />
              {item.label}
            </button>
          ))}
        </div>

        <div className="mx-2 my-5 border-t border-sidebar-border" />
        <span className="mb-3 px-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          Account
        </span>
        <div className="space-y-1">
          {accountItems.map((item) => (
            <button
              key={item.label}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[13px] font-semibold text-sidebar-foreground transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <item.icon className="h-[18px] w-[18px]" />
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Bottom user pill */}
      <div className="mx-4 mt-auto rounded-xl border border-border bg-muted/50 p-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/60 to-accent-foreground/40" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-foreground">Alex Johnson</p>
            <p className="text-[11px] text-muted-foreground">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

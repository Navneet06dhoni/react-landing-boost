import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import WelcomeBanner from "@/components/WelcomeBanner";
import StatsCards from "@/components/StatsCards";
import RecentActivity from "@/components/RecentActivity";
import LearningGoals from "@/components/LearningGoals";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 ml-64">
        <DashboardHeader />
        <main className="p-8 space-y-6">
          <WelcomeBanner />
          <StatsCards />
          <div className="grid grid-cols-[1fr_320px] gap-6">
            <RecentActivity />
            <LearningGoals />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;

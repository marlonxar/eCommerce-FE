import Sidebar from "@/components/Sidebar";
import OverviewCards from "@/components/OverviewCards";
import SalesChart from "@/components/SalesChart";
import RecentOrders from "@/components/RecentOrders";

export default function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
        <OverviewCards />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <SalesChart />
          <RecentOrders />
        </div>
      </main>
    </div>
  );
}

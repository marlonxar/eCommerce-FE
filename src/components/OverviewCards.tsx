import { ShoppingCart, DollarSign, Users, AlertTriangle } from "lucide-react";

export default function OverviewCards() {
  const stats = [
    { title: "Total Sales", value: "₡2,450,000", icon: DollarSign },
    { title: "Orders", value: "320", icon: ShoppingCart },
    { title: "Users", value: "145", icon: Users },
    { title: "Stock Alerts", value: "8", icon: AlertTriangle },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map(({ title, value, icon: Icon }) => (
        <div
          key={title}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4"
        >
          <div className="p-3 bg-gray-100 rounded-xl">
            <Icon className="text-gray-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-xl font-semibold">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

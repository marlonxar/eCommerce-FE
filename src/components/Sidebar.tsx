"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Users, BarChart3, Settings } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/admin", label: "Dashboard", icon: Home },
    { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
    { href: "/admin/users", label: "Users", icon: Users },
    { href: "/admin/reports", label: "Reports", icon: BarChart3 },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 p-3 rounded-md transition-colors mb-2 ${
              pathname === href
                ? "bg-gray-700 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <Icon size={20} />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

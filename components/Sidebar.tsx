'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, CreditCard, Calendar, Bell, AlertCircle } from 'lucide-react';

const navItems = [
  { href: '/', label: '대시보드', icon: LayoutDashboard },
  { href: '/residents', label: '입퇴실 관리', icon: Users },
  { href: '/billing', label: '비용 관리', icon: CreditCard },
  { href: '/facilities', label: '시설 예약', icon: Calendar },
  { href: '/notices', label: '공지사항', icon: Bell },
  { href: '/reports', label: '문제 신고', icon: AlertCircle },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900">기숙사 관리</h1>
      </div>
      <nav className="space-y-2 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

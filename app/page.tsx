'use client';

import { BarChart, AlertCircle, Users, CreditCard } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value }: { icon: React.ComponentType; label: string; value: string }) => (
  <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
    <Icon className="w-8 h-8 text-blue-600" />
    <div>
      <p className="text-gray-600 text-sm">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const NoticeCard = ({ title, date }: { title: string; date: string }) => (
  <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-600">
    <h3 className="font-semibold">{title}</h3>
    <p className="text-gray-500 text-sm">{date}</p>
  </div>
);

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">대시보드</h1>
        <p className="text-gray-600 mt-2">기숙사 현황 및 주요 정보</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="현재 입실자" value="48명" />
        <StatCard icon={BarChart} label="이번 달 수익" value="₩4.8M" />
        <StatCard icon={AlertCircle} label="미납금" value="₩850K" />
        <StatCard icon={CreditCard} label="예정 퇴실" value="3명" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">최근 공지사항</h2>
          <div className="space-y-3">
            <NoticeCard title="세탁실 정기 점검 안내" date="2024-01-15" />
            <NoticeCard title="겨울철 난방 안내" date="2024-01-10" />
            <NoticeCard title="Wi-Fi 업그레이드 완료" date="2024-01-05" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">처리 대기 신고</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">203호 샤워기 고장</h3>
                  <p className="text-gray-600 text-sm">2024-01-14</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">처리중</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">복도 조명 교체</h3>
                  <p className="text-gray-600 text-sm">2024-01-13</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">처리중</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

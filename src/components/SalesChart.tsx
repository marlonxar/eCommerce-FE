"use client"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3200 },
  { name: "Mar", sales: 4800 },
  { name: "Apr", sales: 3000 },
  { name: "May", sales: 5400 },
  { name: "Jun", sales: 4200 },
]

export default function SalesChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

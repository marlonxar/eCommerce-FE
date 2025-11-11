const orders = [
  { id: "ORD-001", customer: "María López", total: "₡25,000", status: "Completed" },
  { id: "ORD-002", customer: "Carlos Jiménez", total: "₡18,500", status: "Pending" },
  { id: "ORD-003", customer: "Laura Vargas", total: "₡45,000", status: "Completed" },
  { id: "ORD-004", customer: "Andrés Mora", total: "₡12,300", status: "Cancelled" },
];

export default function RecentOrders() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="pb-2">Order ID</th>
            <th className="pb-2">Customer</th>
            <th className="pb-2">Total</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="py-2">{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.total}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    order.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

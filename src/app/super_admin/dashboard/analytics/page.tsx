import React from "react";

const rowData = [
  { label: "Users", value: 75 },
  { label: "Orders", value: 45 },
  { label: "Revenue", value: 90 },
  { label: "Refunds", value: 20 },
  { label: "Support Tickets", value: 60 },
];

const PackagesPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <section className="max-w-3xl w-full bg-white rounded-2xl shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">👨‍💼 Admin</h1>
        <p className="text-gray-600 mb-6">
          Welcome to the Admin Dashboard. Here you can manage users, products, and monitor system activity.
        </p>

        {/* Row Graph Section */}
        <div className="text-left w-full mt-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">📊 Row Data Analysis</h2>
          <div className="space-y-4">
            {rowData.map((row, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{row.label}</span>
                  <span className="text-sm font-medium text-gray-700">{row.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-500 h-4 rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: `${row.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PackagesPage;

import React from "react";

const PackagesPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <section className="max-w-3xl w-full bg-white rounded-2xl shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">👨‍💼 Admin</h1>
        <p className="text-gray-600">
          Welcome to the Admin Dashboard. Here you can manage users, products, and monitor system activity.
        </p>
      </section>
    </main>
  );
};

export default PackagesPage;

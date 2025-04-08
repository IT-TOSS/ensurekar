import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MetricDataType } from "../../../../types/MetricDataType";

interface MetricProps {
  label: string;
  value: string;
  change: string;
}

export default function Analytics({
  MetricData,
}: {
  MetricData: MetricDataType[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="py-1"
    >
      <div className="grid gap-6 md:grid-cols-1">
        <div className="bg-white border rounded-lg overflow-hidden">
          <div className="bg-s1 p-4">
            <h2 className="text-2xl text-white">Purchase Analytics</h2>
          </div>
          <div className="p-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={MetricData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="purchases" fill="#8884d8" />
                <Bar dataKey="returns" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white border rounded-lg overflow-hidden">
          <div className="bg-p1 p-4">
            <h2 className="text-2xl text-white">Key Metrics</h2>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <Metric label="Total Purchases" value="$12,345" change="+15%" />
              <Metric label="Average Order Value" value="$85" change="+5%" />
              <Metric label="Return Rate" value="8%" change="-2%" />
              <Metric
                label="Customer Satisfaction"
                value="4.7/5"
                change="+0.2"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Metric({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) {
  const isPositive = change.startsWith("+");
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-sm font-medium text-gray-500">{label}</h3>
      <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
      <p
        className={`mt-2 text-sm ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {change}
      </p>
    </div>
  );
}

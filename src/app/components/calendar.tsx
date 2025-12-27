"use client";

import React from "react";

interface CalendarItem {
  date: number;
  description: string;
}

interface MonthData {
  month: string;
  year: string;
  items: CalendarItem[];
}

const Calendar = () => {
  const calendarData: MonthData[] = [
    {
      month: "January",
      year: "2026",
      items: [
        { date: 7, description: "TDS / TCS Payment for Dec 2025" },
        { date: 10, description: "Professional Tax (PT) on Salaries for Dec 2025" },
        { date: 10, description: "Professional Tax Due Date Varies from State to State. Kindly Contact eztax.in for Expert help. *" },
        { date: 11, description: "GSTR 1 (Monthly) for Dec 2025" },
        { date: 13, description: "GSTR-1 (Oct-Dec 2025) for QRMP" },
        { date: 15, description: "TCS Return in Form 27EQ for Oct-Dec 2025" },
        { date: 15, description: "Provident Fund (PF) & ESI Returns and Payment for Dec 2025" },
        { date: 18, description: "CMP 08 for Oct to Dec 2025 (Composition)" },
        { date: 20, description: "GSTR 3B for Dec 2025 (Monthly)" },
        { date: 22, description: "GSTR 3B (Oct-Dec 2025) for South India" },
        { date: 24, description: "GSTR 3B (Oct-Dec 2025) for North India" },
        { date: 30, description: "TDS Payment in Form 26QB (Property), 26QC (Rent), 26QD (Contractor Payments), 26QE (Crypto Assets) for Dec 2025" },
        { date: 30, description: "Issue of TCS Certificates in Form 27D for Oct to Dec 2025" },
        { date: 31, description: "TDS Return in Form 24Q, 26Q, 27Q for Oct to Dec 2025" },
      ],
    },
    {
      month: "February",
      year: "2026",
      items: [
        { date: 7, description: "TDS / TCS Payment for Jan 2026" },
        { date: 10, description: "Professional Tax (PT) on Salaries for Jan 2026" },
        { date: 10, description: "Professional Tax Due Date Varies from State to State. Kindly Contact eztax.in for Expert help. *" },
        { date: 11, description: "GSTR 1 (Monthly) for Jan 2026" },
        { date: 13, description: "GSTR 1 IFF (Optional) (Jan 2026) for QRMP" },
        { date: 15, description: "Provident Fund (PF) & ESI Returns and Payment for Jan 2026" },
        { date: 15, description: "Issue of TDS Certificates in Form 16A for Oct to Dec 2026" },
        { date: 20, description: "GSTR 3B for Jan 2026 (Monthly)" },
        { date: 25, description: "GST Challan Payment if no sufficient ITC for Jan 2026 (for all Quarterly Filers)" },
      ],
    },
    {
      month: "March",
      year: "2026",
      items: [
        { date: 2, description: "TDS Payment in Form 26QB (Property), 26QC (Rent), 26QD (Contractor Payments), 26QE (Crypto Assets) for Jan 2026" },
        { date: 7, description: "TDS / TCS Payment for Feb 2026" },
        { date: 10, description: "Professional Tax (PT) on Salaries for Feb 2026" },
        { date: 10, description: "Professional Tax Due Date Varies from State to State. Kindly Contact eztax.in for Expert help. *" },
        { date: 11, description: "GSTR 1 (Monthly) for Feb 2026" },
        { date: 13, description: "GSTR 1 IFF (Optional) (Feb 2026) for QRMP" },
        { date: 14, description: "Founder's Day @ EZTax.in" },
        { date: 15, description: "Advance Tax Payment for Jan to Mar 2026" },
        { date: 15, description: "Tax Planning & Book Closure Plan for FY 2025-26" },
        { date: 15, description: "Provident Fund (PF) & ESI Returns and Payment for Feb 2026" },
        { date: 15, description: "Form 15 (Nil / Lower TDS) for FY 2025-26" },
        { date: 20, description: "GSTR 3B for Feb 2026 (Monthly)" },
        { date: 20, description: "Composition Scheme (CMP 02) for FY 2026-27 (Duration Begin)" },
        { date: 25, description: "GST Challan Payment if no sufficient ITC for Feb 2026 (for all Quarterly Filers)" },
        { date: 30, description: "TDS Payment in Form 26QB (Property), 26QC (Rent), 26QD (Contractor Payments), 26QE (Crypto Assets) for Feb 2026" },
        { date: 31, description: "Composition Scheme (CMP 02) for FY 2026-27 (Duration End)" },
        { date: 31, description: "Last Date for Updated ITR For FY 2020-21 and for FY 2021-22, FY 2022-23 and FY 2023-24, the due date would be 31st Mar 2027, 2028 and 2029 respectively." },
      ],
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
          Tax & Compliance Calendar 2026
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {calendarData.map((monthData, monthIndex) => (
            <div
              key={monthIndex}
              className="bg-white border border-gray-300 rounded-lg shadow-sm p-6 flex flex-col transition-colors duration-200 hover:bg-[#ffbf3f]"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 border-b-2 border-teal-600 pb-2">
                {monthData.month} {monthData.year}
              </h3>
              
              <div className="flex-1 space-y-3">
                {monthData.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="text-sm text-gray-900 leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-blue-600 font-semibold min-w-[30px]">{item.date}</span>
                    <span>{item.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calendar;


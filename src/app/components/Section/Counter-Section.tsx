"use client";

import React, { useEffect, useState } from "react";
import counter_bg from "../../images/counter_bg.png"; // Background image

const CounterSection = ({
  CounterSectionData,
}: {
  CounterSectionData: { number: number; text: string }[];
}) => {
  // Array to store counter values in state
  const [counters, setCounters] = useState([0, 0, 0]);

  useEffect(() => {
    // Increment function to handle number counting animation
    const incrementValue = (
      currentValue: number,
      targetValue: number,
      index: number
    ) => {
      if (currentValue < targetValue) {
        const step = Math.ceil((targetValue - currentValue) / 20); // Adjust the step size
        const interval = setInterval(() => {
          setCounters((prevCounters) => {
            const newCounters = [...prevCounters];
            if (newCounters[index] + step >= targetValue) {
              clearInterval(interval);
              newCounters[index] = targetValue; // Set to target value
            } else {
              newCounters[index] += step;
            }
            return newCounters;
          });
        }, 100); // Adjust speed
      }
    };

    // Loop through the CounterSectionData and update values
    CounterSectionData.forEach((counter, index) => {
      incrementValue(0, counter.number, index);
    });
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${counter_bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="stp-30 sbp-30 relative"
    >
      <div className="container text-white flex justify-between items-center gap-8 sm:gap-4 md:gap-8 lg:gap-16 max-sm:flex-col">
        {CounterSectionData.map((counter, index) => (
          <React.Fragment key={index}>
            <div className="text-center max-w-[280px]">
              <p className="display-4 pb-3 counters flex justify-center items-center">
                <span>{counters[index]}</span>
                <span>+</span>
              </p>
              <i className="text-2xl italic  text-wrap md:text-nowrap">
                {counter.text}
              </i>
            </div>
            {index < CounterSectionData.length - 1 && (
              <div className="h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;

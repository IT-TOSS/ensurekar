"use client"

import { useEffect, useState } from "react"

const PackageLoading = () => {
  const [shimmerPosition, setShimmerPosition] = useState(0)

  // Create shimmer animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShimmerPosition((prev) => (prev >= 100 ? -20 : prev + 2))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-[#F8FBFF] relative overflow-hidden">
      {/* Shimmer effect overlay */}
      {/* <div
        className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 z-10 pointer-events-none"
        style={{ transform: `translateX(${shimmerPosition}%)` }}
      /> */}

      <div id="pricing-package" className="md:pt-[80px] py-[52px]">
        <div className="p-4 flex flex-col gap-[16px] relative items-center">
          {/* Loading skeleton for heading */}
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="h-8 md:h-10 bg-gray-300 rounded w-32"></div>
            <div className="h-8 md:h-10 bg-gray-300 rounded w-24"></div>
            {/* <div className="h-8 md:h-10 bg-gray-300 rounded w-28"></div> */}
          </div>

          {/* Loading skeleton for description */}
          <div className="h-4 bg-gray-300 rounded w-80 max-w-full"></div>
        </div>
      </div>

      {/* Mobile plan selector skeleton */}
      <div className="flex md:hidden justify-between items-center mx-auto px-4 mb-6">
        {[1, 2].map((item) => (
          <div key={item} className="h-6 bg-gray-300 rounded w-20"></div>
        ))}
      </div>

      {/* Plan cards loading skeleton - only 2 items */}
      <div className="flex justify-center items-start flex-wrap mx-auto">
        {[1, 2].map((planIndex) => (
          <div
            key={planIndex}
            className="p-4 flex m-3 relative flex-col gap-[10px] mx-4 md:w-[460px] my-[25px] md:mt-0 border-[1px] rounded-md shadow-[0px_0px_10px_rgba(104,104,104,0.08)] bg-white"
          >
            {/* Plan name skeleton */}
            <div className="h-7 bg-gray-300 rounded w-32"></div>

            {/* Plan description skeleton */}
            <div className="h-4 bg-gray-300 rounded w-full md:h-12 mt-2"></div>

            {/* Price section skeleton */}
            <div className="flex gap-3 items-center mt-4">
              <div className="h-4 bg-gray-300 rounded w-16"></div>
              <div className="flex w-fit gap-[4px] bg-gray-100 rounded-lg px-[8px] p-2">
                <div className="h-3 bg-gray-300 rounded w-12"></div>
              </div>
            </div>

            {/* Main price skeleton */}
            <div className="md:min-h-[95px]">
              <div className="flex gap-4 items-end mt-2">
                <div className="h-12 bg-gray-300 rounded w-24"></div>
              </div>

              {/* Additional price info skeleton */}
              <div className="flex flex-row pb-[16px] items-center mt-2">
                <div className="h-4 bg-gray-300 rounded w-48"></div>
              </div>
            </div>

            {/* Buy button skeleton */}
            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
              <div className="w-full">
                <div className="grid grid-cols-1 mt-4">
                  <div className="col-span-2">
                    <div className="py-2.5 bg-gray-300 rounded h-10 w-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features section skeleton */}
            <div className="flex flex-col gap-2">
              <div className="h-5 bg-gray-300 rounded w-32 mt-4"></div>

              {/* Feature items skeleton */}
              {[1, 2, 3, 4, 5, 6].map((featureIndex) => (
                <div key={featureIndex} className="flex gap-1 items-center justify-start mt-2">
                  <div className="w-[25px] h-[25px] items-center flex">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="h-3 bg-gray-300 rounded flex-1 max-w-xs"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PackageLoading
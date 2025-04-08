export default function Loading() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="flex flex-col items-center justify-center space-y-6 p-8 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl shadow-md">
          <div className="relative w-20 h-20">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full animate-ping"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-teal-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
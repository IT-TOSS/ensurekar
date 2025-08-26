// Define Feature type once
type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export function Startup_India_scheme({
  features,
  title = "What is the Startup India Scheme?",
  description = "Launched on January 16, 2016, the Startup India Scheme aims to make India a global hub for innovation and entrepreneurship. Managed by DPIIT, it supports startups with funding, mentorship, and business-friendly regulations.",
  imageUrl = "/../images/startup_India_Registration/3.png",
}: {
  features: Feature[];
  title?: string;
  description?: string;
  imageUrl?: string;
}) {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 lg:p-12">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((f, index) => {
              const Icon = f.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900">{f.title}</h3>
                    <p className="text-gray-600">{f.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

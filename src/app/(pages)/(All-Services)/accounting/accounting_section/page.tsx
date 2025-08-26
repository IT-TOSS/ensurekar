import { Phone, DollarSign, FileCheck, Zap } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "Tax Exemptions",
    description: "Startups enjoy a 3-year tax holiday and exemptions on capital gains, reducing financial burdens.",
  },
  {
    icon: DollarSign,
    title: "Funding Support",
    description: "Access to government-backed funds and seed funding to accelerate growth and innovation.",
  },
  {
    icon: FileCheck,
    title: "Simplified Compliance",
    description:
      "Self-certification for labor and environmental laws, along with single-window clearance for approvals.",
  },
  {
    icon: Zap,
    title: "Faster IP Processing",
    description: "Up to 80% rebate on patent costs and expedited intellectual property rights processing.",
  },
]

export function AccountingHeroSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 lg:p-12">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nwFcoX437tcAHNfnc6aA7Kqo3L5w1i.png"
              alt="Professional businesswoman with glasses talking on phone while taking notes at office desk"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              What is the Startup India Scheme?
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Launched on January 16, 2016, the Startup India Scheme aims to make India a global hub for innovation and
              entrepreneurship. Managed by DPIIT, it supports startups with funding, mentorship, and business-friendly
              regulations to foster growth and eliminate barriers. Benefits of the Startup India Scheme
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="bg-orange-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

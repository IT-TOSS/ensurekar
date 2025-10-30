import { CreditCard, FileText, Gift, AlertCircle } from "lucide-react"
import Image from 'next/image';

const features = [
  {
    icon: CreditCard,
    title: "Base Fee",
    description: "A nominal fee is typically charged for registering your startup under the Startup India Scheme.",
  },
  {
    icon: FileText,
    title: "Additional Costs",
    description: "You may incur charges for consulting services, legal fees, and documentation costs.",
  },
  {
    icon: Gift,
    title: "Government Support",
    description:
      "The government offers subsidies and waivers to reduce the financial burden on startups. You may be eligible for discounts on patent and trademark filings.",
  },
  {
    icon: AlertCircle,
    title: "Important Note",
    description:
      "Fees and regulations may change over time. It's advisable to consult the official Startup India portal for the most accurate and up-to-date information.",
  },
]

export default function StartupRegistrationFeesSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 lg:p-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nwFcoX437tcAHNfnc6aA7Kqo3L5w1i.png"
              alt="Professional businesswoman with glasses talking on phone while taking notes at office desk"
              className="w-full h-auto rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Startup India Registration Fees: A Breakdown
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Understanding the costs involved in registering your startup under the Startup India Scheme is crucial for
              planning your business finances. Here's a comprehensive breakdown of the fees and support available.
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

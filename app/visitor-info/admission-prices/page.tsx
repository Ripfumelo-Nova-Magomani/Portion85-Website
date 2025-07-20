import { VisitorSidebar } from "@/components/visitor-sidebar"

export default function AdmissionPricesPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <VisitorSidebar />
          </div>
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Admission Prices</h1>

            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-10">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Portion 85 Farm & Educational Center</h2>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Portion 85 Entrance fees</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex justify-between text-lg">
                  <span>Adult:</span>
                  <span className="font-bold">R115</span>
                </li>
                <li className="flex justify-between text-lg">
                  <span>Pensioner:</span>
                  <span className="font-bold">R100</span>
                </li>
                <li className="flex justify-between text-lg">
                  <span>Child:</span>
                  <span className="font-bold">R85</span>
                </li>
              </ul>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-orange-700 mb-4">
                  What is included in your entrance fee at Portion <span className="text-orange-500">85</span>?
                </h3>
                <p className="text-stone-700 mb-4">
                  Interaction with farming activities and educational displays will be assisted by a professional guide,
                  while they give you more information about sustainable farming practices. A guided tour where the
                  guide will tell you more about the crops and animals we have here. On Saturdays and Sundays from noon
                  until 15:00 with every tour, you will get a chance to see the wine processing demonstration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

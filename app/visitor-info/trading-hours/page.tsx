import { VisitorSidebar } from "@/components/visitor-sidebar"

export default function TradingHoursPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <VisitorSidebar />
          </div>
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Trading Hours</h1>

            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-10">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Weekdays</h2>
              <ul className="space-y-2 mb-8">
                <li className="flex justify-between text-lg">
                  <span>Monday:</span>
                  <span>8:00am – 17:00pm</span>
                </li>
                <li className="flex justify-between text-lg">
                  <span>Tuesday:</span>
                  <span>8:00am – 17:00pm</span>
                </li>
                <li className="flex justify-between text-lg">
                  <span>Wednesday:</span>
                  <span>8:00am – 17:00pm</span>
                </li>
                <li className="flex justify-between text-lg">
                  <span>Thursday:</span>
                  <span>8:00am – 17:00pm</span>
                </li>
                <li className="flex justify-between text-lg">
                  <span>Friday:</span>
                  <span>8:00am – 17:00pm</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-orange-700 mb-4">Weekends</h2>
              <ul className="space-y-2 mb-8">
                <li className="flex justify-between text-lg">
                  <span>Saturday:</span>
                  <span>8:00am – 17:00pm</span>
                </li>
                <li className="flex justify-between text-lg">
                  <span>Sunday:</span>
                  <span>8:00am – 15:30pm</span>
                </li>
              </ul>

              <p className="text-lg font-medium text-stone-700">
                <span>Public Holidays: </span>
                <span>8:00am – 15:30pm</span>
              </p>

              <p className="text-lg font-medium text-stone-700">N:B - Portion 85 will be closed on Christmas day</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

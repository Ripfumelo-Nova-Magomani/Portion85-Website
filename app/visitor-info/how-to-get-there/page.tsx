import { VisitorSidebar } from "@/components/visitor-sidebar"

export default function HowToGetTherePage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <VisitorSidebar />
          </div>
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">How to get to Portion 85</h1>

            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-10">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-orange-700 mb-2">GPS COORDINATES:</h2>
                <p className="text-lg">25° 54' 00.0" S</p>
                <p className="text-lg">28° 06' 00.0" E</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-orange-700 mb-2">Directions from Beyers Naude:</h2>
                  <p className="text-stone-700">
                    Turn on the M26 towards Knopjeslaagte. Go for about 9-10 km to big 4-way stop street with the M26
                    intersection (Malibongwe road). Go straight over intersection. Portion 85 Farm & Educational Center
                    is 2.5 Km on the left.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-orange-700 mb-2">
                    Directions from southern part of Johannesburg:
                  </h2>
                  <p className="text-stone-700">
                    From the N3 turn onto Malibongwe (R512) towards Lanseria Airport, past Ferreiras Northriding and
                    cross over Witkoppen Rd, past Kya Sands, Past Cosmo City on left, downhill and up long hill. Turn
                    right (big 4-way stop street intersection with the M26). Portion 85 Farm & Educational Center is
                    2.5km on the left.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-orange-700 mb-2">Directions from Pretoria:</h2>
                  <p className="text-stone-700">
                    Take the R28/N14 to Krugersdorp, turn off at the R512 (Lanseria/Randburg) offramp and keep to the
                    left (South) towards Randburg, about 1 km further, turn left (big 4-way stop street intersection
                    with the M26). Portion 85 Farm & Educational Center is 2.5km on the left.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-orange-700 mb-2">
                    Directions from Johannesburg From the N1 / northern suburbs:
                  </h2>
                  <p className="text-stone-700">
                    From the M1/N1, after the Woodmead Offramp take Western Bypass (N3), take the William Nicol Offramp
                    (R511) past Monte Casino, turn left into Witkoppen, and keep right, first traffic light right is
                    Cedar Rd turn right (BMW Cedar isle on right corner), Drive 8 km on Cedar until the T-junction. Turn
                    left at the junction (M26) and travel 300m. Portion 85 Farm & Educational Center is on the right
                    hand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

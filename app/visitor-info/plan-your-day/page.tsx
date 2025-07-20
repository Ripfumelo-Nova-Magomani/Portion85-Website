import { VisitorSidebar } from "@/components/visitor-sidebar"

export default function PlanYourDayPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <VisitorSidebar />
          </div>
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Plan your day</h1>
            <p className="text-lg text-stone-600 mb-8">
              Get some insight for your day out at Portion 85 Farm & Educational Center.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-10">
              <div className="space-y-6 mb-8">
                <p className="text-lg text-stone-700">
                  During the week tours or farming interaction happens as you get here or every hour. Weekends and
                  public holidays farming interaction is every hour.
                </p>

                <p className="text-lg text-stone-700">
                  Wine processing demonstration times are Saturdays and Sundays from 12:00 during the guided tours and
                  will happen until 15:00 with the guided tour.
                </p>

                <p className="text-lg text-stone-700">
                  Sustainable farming workshop is Sundays and Public Holidays at 11:00. The guide does a presentation
                  about the sustainable farming practices found in the area and it is not the same as the farming
                  interaction.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-orange-700 mb-4">What to bring when visiting Portion 85</h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">Be Sun Smart</h3>
                <p className="text-lg text-stone-700">
                  Joburg's sun can be quite fierce, even during winter, so remember to bring a hat, sunglasses and
                  sunscreen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">Camera</h3>
                <p className="text-lg text-stone-700">
                  There will be plenty of fantastic photo opportunities during your visit, so make sure you bring your
                  Camera. Don't forget to also bring extra film/memory cards and batteries so that you don't miss out on
                  any of the action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

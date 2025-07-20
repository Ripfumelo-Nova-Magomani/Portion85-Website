import { VisitorSidebar } from "@/components/visitor-sidebar"

export default function WhereToEatPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <VisitorSidebar />
          </div>
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Where to eat</h1>

            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-10">
              <p className="text-lg text-stone-700 mb-6">
                Our farm-to-table restaurant is rated as serving the best pizzas in the area! All beverages must be
                purchased from our restaurant. We do not allow cooler boxes into the farm.
              </p>

              <h2 className="text-2xl font-bold text-orange-700 mb-4">PIZZA MENU – Large only</h2>
              <p className="text-lg text-stone-700 mb-6">
                All our pizzas are made with fresh farm ingredients and baked the traditional way in our wood-fired
                oven, all with homemade tomato base & mozzarella cheese.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-orange-600">Harvest</h3>
                  <p className="text-stone-700">Chicken, onion, mushroom, sun-dried tomato and avocado</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-orange-600">Farmhouse</h3>
                  <p className="text-stone-700">Salami, ham, mushroom, onion, peppers, chilli, garlic and olives</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-orange-600">Orchard</h3>
                  <p className="text-stone-700">Chicken, mushroom, pineapple and sweet and sour sauce</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-orange-600">Garden</h3>
                  <p className="text-stone-700">Bacon, mushroom, onion, avocado, garlic</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-orange-600">Vineyard</h3>
                  <p className="text-stone-700">Ham, Mushroom, Olives and green pepper</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-orange-600">Meadow</h3>
                  <p className="text-stone-700">Chicken and mushroom</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-orange-600">Artisan</h3>
                  <p className="text-stone-700">Camembert cheese, bacon, chicken and Avo</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-orange-600">Spicy Farm</h3>
                  <p className="text-stone-700">Bacon, salami, peppadews</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-orange-600">Seasonal</h3>
                  <p className="text-stone-700">
                    Fresh seasonal vegetables, onion, mushroom, garlic, sweet and sour sauce
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-orange-600">Hot! Hot! Hot!</h3>
                  <p className="text-stone-700">Fresh Chilli, mushrooms, salami, chicken and blue cheese</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

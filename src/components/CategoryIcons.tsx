'use client';

import {
  Drumstick,
  Soup,
  Pizza,
  CakeSlice,
  ShoppingBasket,
  ChefHat,
  Salad,
  Candy,
  Store,
  Donut,
  Sandwich,
  UtensilsCrossed,
  Carrot,
  Beef,
  Coffee,
} from 'lucide-react';

const categories = [
  { name: '치킨', icon: Drumstick, color: 'bg-yellow-100 text-yellow-600' },
  { name: '국물요리', icon: Soup, color: 'bg-blue-100 text-blue-600' },
  { name: '피자', icon: Pizza, color: 'bg-red-100 text-red-600' },
  { name: '디저트', icon: CakeSlice, color: 'bg-pink-100 text-pink-600' },
  { name: '당근', icon: Carrot, color: 'bg-green-100 text-green-600' },
  { name: '레시피', icon: ChefHat, color: 'bg-amber-100 text-amber-600' },
  { name: '샐러드', icon: Salad, color: 'bg-lime-100 text-lime-600' },
  { name: '간식', icon: Candy, color: 'bg-fuchsia-100 text-fuchsia-600' },
];

export default function CategoryIcons() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-y-8 gap-x-4">
          {categories.map(({ name, icon: Icon, color }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer"
            >
              <div className={`flex items-center justify-center w-20 h-20 rounded-full ${color}`}>
                <Icon className="w-10 h-10" />
              </div>
              <span className="mt-2 text-sm text-gray-800">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

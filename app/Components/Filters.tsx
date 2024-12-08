import { Checkbox } from '@/components/ui/checkbox'

const categories = [
  'Shoes',
  'Sports Bras',
  'Tops & T-Shirts',
  'Hoodies & Sweatshirts',
  'Jackets',
  'Trousers & Tights',
  'Shorts',
  'Tracksuits',
  'Jumpsuits & Rompers',
  'Skirts & Dresses',
  'Socks',
  'Accessories & Equipment',
]

const genders = ['Men', 'Women', 'Unisex']
const kids = ['Boys', 'Girls']
const priceRanges = ['Under ₹ 2,500.00', '₹ 2,501.00 - ₹']

export function Filters() {
  return (
    <div className="w-60 space-y-6">
      <div>
        <h3 className="font-medium mb-4">New (500)</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <Checkbox id={category} />
              <label htmlFor={category} className="ml-2 text-sm">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4">Gender</h3>
        <div className="space-y-2">
          {genders.map((gender) => (
            <div key={gender} className="flex items-center">
              <Checkbox id={gender} />
              <label htmlFor={gender} className="ml-2 text-sm">
                {gender}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4">Kids</h3>
        <div className="space-y-2">
          {kids.map((kid) => (
            <div key={kid} className="flex items-center">
              <Checkbox id={kid} />
              <label htmlFor={kid} className="ml-2 text-sm">
                {kid}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4">Shop By Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <div key={range} className="flex items-center">
              <Checkbox id={range} />
              <label htmlFor={range} className="ml-2 text-sm">
                {range}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


import type { PriceFilterOption, PriceRange } from '@/features/filter/types/price-filter.type'

const options: PriceFilterOption[] = [
  { label: 'Tất cả', value: 'all' },
  { label: '< 500K', value: 'lt500' },
  { label: '500K – 1 triệu', value: '500to1m' },
  { label: '> 1 triệu', value: 'gt1m' },
]

type Props = {
  value: PriceRange
  onChange: (value: PriceRange) => void
}

export default function PriceFilter({ value, onChange }: Props) {
  return (
    <div className="flex flex-nowrap gap-2 overflow-x-auto py-2 text-sm">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`whitespace-nowrap rounded-full border px-4 py-1.5 transition ${
            value === opt.value ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

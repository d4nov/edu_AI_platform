export type PriceRange = 'all' | 'lt500' | '500to1m' | 'gt1m'

export type PriceFilterOption = {
  label: string
  value: PriceRange
}

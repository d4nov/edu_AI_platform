import { Star, StarHalf, Star as StarOutline } from 'lucide-react'

type Props = {
  rating: number
}

const RatingStars = ({ rating }: Props) => {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

  return (
    <div className="flex items-center gap-0.5 text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={16} fill="currentColor" />
      ))}
      {hasHalf && <StarHalf size={16} />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOutline key={`empty-${i}`} size={16} className="text-gray-300" fill="none" stroke="currentColor" />
      ))}
    </div>
  )
}

export default RatingStars

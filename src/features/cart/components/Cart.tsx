import { useCart } from '@/features/cart/contexts/CartContext'

const Cart = () => {
  const { cart } = useCart()

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-4 text-xl font-bold">Giỏ hàng của bạn</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Bạn chưa có sản phẩm nào.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li key={index} className="rounded border p-3">
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-gray-600">{item.price.toLocaleString()}₫</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart

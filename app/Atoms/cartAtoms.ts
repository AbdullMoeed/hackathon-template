import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: {
    asset: {
      _ref: string
    }
  }
  size: string
  color: string
}

// Persistent storage for cart items
export const cartItemsAtom = atomWithStorage<CartItem[]>("cartItems", [])

// Atom to add an item to the cart
export const addToCartAtom = atom(null, (get, set, newItem: CartItem) => {
  const currentItems = get(cartItemsAtom)
  const existingItemIndex = currentItems.findIndex((item) => item.id === newItem.id)

  if (existingItemIndex !== -1) {
    const updatedItems = [...currentItems]
    updatedItems[existingItemIndex].quantity += 1
    set(cartItemsAtom, updatedItems)
  } else {
    set(cartItemsAtom, [...currentItems, newItem])
  }
})



// Atom to remove an item from the cart
export const removeFromCartAtom = atom(null, (get, set, id: string) => {
  const currentItems = get(cartItemsAtom)
  set(
    cartItemsAtom,
    currentItems.filter((item) => item.id !== id),
  )
})

// Atom to update the quantity of an item in the cart
export const updateQuantityAtom = atom(null, (get, set, { id, quantity }: { id: string; quantity: number }) => {
  const currentItems = get(cartItemsAtom)
  const updatedItems = currentItems.map((item) =>
    item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
  )
  set(cartItemsAtom, updatedItems)
})

// Atom to calculate the subtotal
export const subtotalAtom = atom((get) => {
  const items = get(cartItemsAtom)
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
})









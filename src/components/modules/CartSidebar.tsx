import React from 'react'

function CartSidebar() {
    return (
        <div className="sticky top-44 border rounded-xl p-4">
            <div className="flex gap-2 mb-4">
                <button className="btn btn-sm btn-outline">Delivery</button>
                <button className="btn btn-sm btn-outline">Pick-up</button>
            </div>

            <h3 className="font-semibold mb-4">Your items</h3>

            {/* <CartItem /> */}
            cart item

            <hr className="my-4" />

            <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>Tk 850</span>
            </div>

            <div className="flex justify-between font-bold mt-2">
                <span>Total</span>
                <span className="text-pink-600">Tk 863</span>
            </div>

            <button className="btn btn-primary w-full mt-4">
                Review payment & address
            </button>
        </div>

    )
}

export default CartSidebar

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Trash2, Plus, Minus, Euro } from "lucide-react";
// import { Separator } from "@/components/ui/separator";
// import { toast } from "sonner";
// import { CartItem, getCart, removeFromCart, removeIngredientFromCart, updateQuantity } from "@/utils/cart-helper";
// import { CheckoutForm } from "../auth/CheckoutForm";

// export default function CartSidebar() {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [delivery, setDelivery] = useState<"delivery" | "pickup">("delivery");
//   const [checkout, setCheckout] = useState(false)

//   useEffect(() => {
//     async function loadCart() {
//       const storedCart = await getCart();
//       setCart(storedCart);
//     }

//     loadCart();

//     // Listen for cart changes from anywhere in the app
//     window.addEventListener("cart-updated", loadCart);

//     return () => {
//       window.removeEventListener("cart-updated", loadCart);
//     };
//   }, []);   // still empty deps — we use event instead


//   const handleIncrease = (id: string) => {
//     const updated = updateQuantity(id, cart.find(i => i.id === id)!.quantity + 1);
//     setCart(updated);
//   };

//   const handleDecrease = (id: string) => {
//     const updated = updateQuantity(id, cart.find(i => i.id === id)!.quantity - 1);
//     setCart(updated);
//   };


//   const handleRemove = async (id: string) => {
//     const updated = await removeFromCart(id); // await because it's async
//     setCart(updated);
//     toast.success("Item removed from cart");
//   };

//   // CartSidebar component-এর ভিতরে (state এর নিচে)

// const handleRemoveIngredient = (itemId: string, ingredientName: string) => {
//   const updatedCart = removeIngredientFromCart(itemId, ingredientName);
//   setCart(updatedCart);

//   // optional: toast notification
//   toast.success(`Removed ${ingredientName} from ${cart.find(i => i.id === itemId)?.name}`);
// };

//   // Subtotal
//   // const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const subtotal = cart.reduce((sum, item) => {
//   let itemTotal = item.price * item.quantity;

//   if (item.ingredients && item.ingredients.length > 0) {
//     const ingredientsSum = item.ingredients.reduce((esum, ing) => esum + ing.price, 0);
//     itemTotal += ingredientsSum * item.quantity; // quantity অনুযায়ী multiply
//   }

//   return sum + itemTotal;
// }, 0);

//   return (
//     <div className="w-full sticky top-46 bg-white rounded-xl border border-gray-200 overflow-auto">
//       {/* Delivery / Pickup toggle */}
//       <div className="flex p-4">
//         <button
//           onClick={() => setDelivery("delivery")}
//           className={`flex-1 py-4 text-center font-medium text-gray-500 hover:bg-gray-50 transition-colors ${delivery === "delivery" ? "bg-white border-2 rounded-tl-lg rounded-bl-lg" : "bg-gray-100 rounded-tl-lg rounded-bl-lg"}`}
//         >
//           Delivery
//           <span className="block text-xs text-gray-500 mt-0.5">Standard (15 - 25 mins)</span>
//         </button>
//         <button
//           onClick={() => setDelivery("pickup")}
//           className={`flex-1 py-4 text-center font-medium text-gray-500 hover:bg-gray-50 transition-colors ${delivery === "pickup" ? "bg-white border-2 rounded-tr-lg rounded-br-lg" : "bg-gray-100 rounded-tr-lg rounded-br-lg"}`}
//         >
//           Pick-up
//           <span className="block text-xs text-gray-500 mt-0.5">Standard (10 - 25 mins)</span>
//         </button>
//       </div>

//       <div className="p-4">
//         <h3 className="text-lg font-semibold mb-4">Your items</h3>

//         {cart.length === 0 && <p className="text-sm text-gray-500 text-center">Your cart is empty</p>}

//         {cart.map((item) => (
//           <>
//             <div key={item.id} className=" mb-5">
//               {/* Image */}
//               <div className="flex gap-4">
//                 <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
//                   <Image src={item.image || ""} alt={item.name} fill className="object-cover" />
//                 </div>

//                 {/* Details */}
//                 <div className="flex-1">
//                   <h4 className="font-medium">{item.name}</h4>
//                   <p className="text-sm text-gray-600 mt-0.5">
//                     Qty: {item.quantity}
//                   </p>

//                   {item.ingredients?.length > 0 && (
//                     <div className="mt-3">
//                       <p className="text-sm font-medium mb-1.5">Extra Ingredients:</p>
//                       <div className="space-y-2 text-sm">
//                         {item.ingredients.map((extra) => (
//                           <div
//                             key={extra.name}
//                             className="flex items-center justify-between text-gray-700 bg-gray-50 px-3 py-1.5 rounded-md"
//                           >
//                             <div className="flex items-center gap-2">
//                               <span>{extra.name}</span>
//                               <span className="text-pink-600 font-medium">+৳ {extra.price}</span>
//                             </div>

//                             {/* Remove বাটন */}
//                             <button
//                               onClick={() => handleRemoveIngredient(item.id, extra.name)}
//                               className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
//                               title="Remove this ingredient"
//                             >
//                               <Trash2 size={14} />
//                               {/* অথবা Minus size={14} ব্যবহার করতে পারো */}
//                             </button>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   <div className="flex items-center justify-between mt-2">
//                     <div>
//                       <span className="font-bold text-pink-600 flex items-center"><Euro size={14} /> {item.price * item.quantity}</span>
//                     </div>

//                     {/* Quantity + Delete */}
//                     <div className="flex items-center gap-3">
//                       <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-700">
//                         <Trash2 size={18} />
//                       </button>
//                       <div className="flex items-center border rounded-full">
//                         <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full cursor-pointer hover:border" disabled={item.quantity === 1} onClick={() => handleDecrease(item.id)}>
//                           <Minus size={16} />
//                         </Button>
//                         <span className="px-3 font-medium">{item.quantity}</span>
//                         <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full cursor-pointer hover:border" onClick={() => handleIncrease(item.id)}>
//                           <Plus size={16} />
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <Separator className="my-6 " />
//             </div>
//           </>
//         ))}

//       </div>

//       <div className="p-5 space-y-6">
//         <div className="space-y-3">
//           <div className="flex justify-between items-baseline">
//             <span className="font-bold text-xl">Total</span>
//             <span className="text-xl font-bold flex items-center"><Euro size={18} /> {subtotal}</span>
//           </div>
//         </div>

//         {
//           checkout ?
//             <CheckoutForm /> :
//             <Button disabled={cart.length < 1} onClick={() => setCheckout(true)} className={`w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white py-6 text-base font-medium rounded-xl`}>
//               Proceed to Checkout
//             </Button>
//         }

//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, Euro } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import {
  CartItem,
  getCart,
  removeFromCart,
  removeIngredientFromCart,
  updateQuantity,
} from "@/utils/cart-helper";
import { CheckoutForm } from "../auth/CheckoutForm";

export default function CartSidebar() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [delivery, setDelivery] = useState<"delivery" | "pickup">("delivery");
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    async function loadCart() {
      const storedCart = await getCart();
      setCart(storedCart);
    }

    loadCart();

    window.addEventListener("cart-updated", loadCart);
    return () => {
      window.removeEventListener("cart-updated", loadCart);
    };
  }, []);

  const handleIncrease = (id: string) => {
    const item = cart.find((i) => i.id === id);
    if (!item) return;
    const updated = updateQuantity(id, item.quantity + 1);
    setCart(updated);
  };

  const handleDecrease = (id: string) => {
    const item = cart.find((i) => i.id === id);
    if (!item || item.quantity <= 1) return;
    const updated = updateQuantity(id, item.quantity - 1);
    setCart(updated);
  };

  const handleRemove = async (id: string) => {
    const updated = await removeFromCart(id);
    setCart(updated);
    toast.success("Item removed from cart");
  };

  const handleRemoveIngredient = (itemId: string, ingredientName: string) => {
    const updatedCart = removeIngredientFromCart(itemId, ingredientName);
    setCart(updatedCart);

    const itemName = updatedCart.find((i) => i.id === itemId)?.name || "item";
    toast.success(`Removed ${ingredientName} from ${itemName}`);
  };

  const subtotal = cart.reduce((sum, item) => {
    let itemTotal = item.price * item.quantity;
    if (item.ingredients && item.ingredients.length > 0) {
      const ingredientsSum = item.ingredients.reduce((esum, ing) => esum + ing.price, 0);
      itemTotal += ingredientsSum * item.quantity;
    }
    return sum + itemTotal;
  }, 0);

  return (
    <div className="w-full sticky top-46 bg-white rounded-xl border border-gray-200 overflow-auto">
      <div className="flex p-4">
        <button
          onClick={() => setDelivery("delivery")}
          className={`flex-1 py-4 text-center font-medium text-gray-500 hover:bg-gray-50 transition-colors ${delivery === "delivery"
            ? "bg-white border-2 rounded-tl-lg rounded-bl-lg"
            : "bg-gray-100 rounded-tl-lg rounded-bl-lg"
            }`}
        >
          Delivery
          <span className="block text-xs text-gray-500 mt-0.5">Standard (15 - 25 mins)</span>
        </button>
        <button
          onClick={() => setDelivery("pickup")}
          className={`flex-1 py-4 text-center font-medium text-gray-500 hover:bg-gray-50 transition-colors ${delivery === "pickup"
            ? "bg-white border-2 rounded-tr-lg rounded-br-lg"
            : "bg-gray-100 rounded-tr-lg rounded-br-lg"
            }`}
        >
          Pick-up
          <span className="block text-xs text-gray-500 mt-0.5">Standard (10 - 25 mins)</span>
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Your items</h3>

        {cart.length === 0 && (
          <p className="text-sm text-gray-500 text-center py-8">Your cart is empty</p>
        )}

        {cart.map((item) => (
          <div key={item.id} className="mb-6">
            <div className="flex gap-4">
              {/* Image */}
              <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={item.image || "/placeholder-food.jpg"}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>

                <p className="text-sm text-gray-600 mt-1">Qty: {item.quantity}</p>

                <div className="flex items-center justify-between mt-3">
                  <span className="font-bold text-pink-600 flex items-center gap-1">
                    <Euro size={14} />
                    {(item.price * item.quantity).toFixed(0)}
                  </span>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>

                    <div className="flex items-center border rounded-full">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-none"
                        disabled={item.quantity <= 1}
                        onClick={() => handleDecrease(item.id)}
                      >
                        <Minus size={16} />
                      </Button>
                      <span className="px-4 font-medium">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-none"
                        onClick={() => handleIncrease(item.id)}
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {item.ingredients && item.ingredients?.length > 0 && (
              <div className="mt-3 flex flex-col">
                <p className="text-sm font-medium mb-1.5">Extra Ingredients:</p>
                <div className="space-y-2 flex items-start gap-2 flex-wrap">
                 {(item.ingredients).map((extra) => (
                    <div
                      key={extra.name}
                      className="flex items-center justify-between text-sm bg-gray-50 px-3 py-1.5 rounded-md"
                    >
                      <div className="flex items-center gap-2">
                        <span>{extra.name}</span>
                        <span className="text-pink-600 flex items-center"> <Euro size={12}/>{extra.price}</span>
                      </div>
                      <button
                        onClick={() => handleRemoveIngredient(item.id, extra.name)}
                        className="ml-2 text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
                        title="Remove this ingredient"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <Separator className="my-5" />
          </div>
        ))}
      </div>

      <div className="p-5 space-y-6">
        <div className="flex justify-between items-baseline text-xl">
          <span className="font-bold">Total</span>
          <span className="font-bold flex items-center gap-1">
            <Euro size={18} /> {subtotal.toFixed(0)}
          </span>
        </div>

        {/* {checkout ? (
          <CheckoutForm />
        ) : (
          <Button
            disabled={cart.length === 0}
            onClick={() => setCheckout(true)}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-6 text-base font-medium rounded-xl"
          >
            Proceed to Checkout
          </Button>
        )} */}
        <AnimatePresence mode="wait">
    {checkout ? (
      <motion.div
        key="checkout-form"
        initial={{ opacity: 0, height: 0, y: 20 }}
        animate={{ opacity: 1, height: "auto", y: 0 }}
        exit={{ opacity: 0, height: 0, y: -20 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          height: { duration: 0.5 },
        }}
        className="overflow-hidden" // height animation-এর জন্য দরকার
      >
        <CheckoutForm />
      </motion.div>
    ) : (
      <motion.div
        key="proceed-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          disabled={cart.length === 0}
          onClick={() => setCheckout(true)}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white py-6 text-base font-medium rounded-xl"
        >
          Proceed to Checkout
        </Button>
      </motion.div>
    )}
  </AnimatePresence>
      </div>
    </div>
  );
}


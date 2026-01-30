// // components/FoodDialog.tsx
// "use client";

// import React from "react";
// import Image from "next/image";
// import { Plus, Minus, X } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
// import { Food } from "@/types";
// import { addToCart } from "@/utils/cart-helper";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";


// interface FoodDialogProps {
//   food: Food;
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   onAddToCart?: (food: Food, quantity: number) => void; // optional callback
// }

// export default function FoodDetailsDialog({
//   food,
//   open,
//   onOpenChange,
// }: FoodDialogProps) {
//   const [quantity, setQuantity] = React.useState(1);

//   const router = useRouter();


//   const increaseQty = () => setQuantity((prev) => prev + 1);
//   const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   const priceDisplay = food.price.toFixed(2);
//   const totalPrice = (food.price * quantity).toFixed(2);

//   const formatCurrency = (value: string) => `Tk ${value}`;

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.stopPropagation();

//     await addToCart({
//       id: food._id,
//       name: food.name,
//       price: food.price,
//       image: food.image,
//     },
//       quantity
//     );

//     router.refresh();
//     toast.success("Added to cart");
//     onOpenChange(false);
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-125 max-h-[90vh] overflow-y-auto p-0">
//         {/* Close button */}
//         <DialogClose asChild>
//           <Button
//             variant="ghost"
//             size="icon"
//             className="absolute right-4 top-4 z-10 rounded-full bg-white/80 hover:bg-white shadow-sm"
//           >
//             <X size={20} />
//           </Button>
//         </DialogClose>

//         {/* Hero image */}
//         <div className="relative h-64 sm:h-72 w-full">
//           <Image
//             src={food.image}
//             alt={food.name}
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         <div className="p-6 pt-5 space-y-5">
//           <DialogHeader className="text-left space-y-1.5">
//             <DialogTitle className="text-2xl font-bold">
//               {food.name}
//             </DialogTitle>
//             <DialogDescription className="text-base text-muted-foreground">
//               {food.description}
//             </DialogDescription>
//           </DialogHeader>

//           <Separator />

//           {/* Price & Discount */}
//           <div className="flex items-baseline gap-3">
//             <span className="text-3xl font-bold text-primary">
//               {formatCurrency(priceDisplay)}
//             </span>
//             {/* Example discount - make conditional in real app */}
//             <span className="text-lg text-muted-foreground line-through">
//               {formatCurrency((food.price * 1.18).toFixed(0))}
//             </span>
//             <span className="text-sm font-medium text-green-600">15% off</span>
//           </div>

//           {/* Special instructions */}
//           <div className="space-y-2">
//             <label
//               htmlFor="instructions"
//               className="text-lg font-medium block"
//             >
//               Special instructions
//             </label>
//             <Input
//               id="instructions"
//               placeholder="e.g. No onions, extra spicy, etc."
//               className="resize-none"
//             />
//           </div>

//           {/* Quantity selector */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center border rounded-full overflow-hidden">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={decreaseQty}
//                 disabled={quantity <= 1}
//                 className="rounded-none"
//               >
//                 <Minus size={18} />
//               </Button>
//               <span className="w-12 text-center font-medium">{quantity}</span>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={increaseQty}
//                 className="rounded-none"
//               >
//                 <Plus size={18} />
//               </Button>
//             </div>

//             <div className="text-right">
//               <p className="text-sm text-muted-foreground">Total</p>
//               <p className="text-xl font-bold">
//                 {formatCurrency(totalPrice)}
//               </p>
//             </div>
//           </div>

//           {/* Add to cart */}
//           <DialogFooter className="pt-2">
//             <Button
//               className="w-full bg-pink-600 hover:bg-pink-700 text-white py-6 text-lg font-medium"
//               onClick={handleAddToCart}
//             >
//               Add to cart
//             </Button>
//           </DialogFooter>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }


// components/FoodDetailsDialog.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, X, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Food } from "@/types";
import { addToCart } from "@/utils/cart-helper";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface FoodDialogProps {
  food: Food;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FoodDetailsDialog({
  food,
  open,
  onOpenChange,
}: FoodDialogProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<Set<string>>(new Set());

  const router = useRouter();

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const basePrice = food.price;
  const extrasTotal = Array.from(selectedExtras).reduce((sum, name) => {
    const ing = food.ingredients?.find((i) => i.name === name);
    return sum + (ing?.price || 0);
  }, 0);

  const unitTotal = basePrice + extrasTotal;
  const grandTotal = unitTotal * quantity;
  const formatPrice = (num: number) => num.toFixed(0);

  const toggleExtra = (ingredientName: string) => {
    setSelectedExtras((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(ingredientName)) {
        newSet.delete(ingredientName);
      } else {
        newSet.add(ingredientName);
      }
      return newSet;
    });
  };

  const handleAddToCart = async () => {
    const ingredientsArray = Array.from(selectedExtras).map((name) => {
      const ing = food.ingredients?.find((i) => i.name === name);
      return { name, price: ing?.price || 0 };
    });

    await addToCart(
      {
        id: food._id,
        name: food.name,
        price: basePrice,
        image: food.image,
        ingredients: ingredientsArray,
      },
      quantity
    );

    router.refresh();
    toast.success("Added to cart");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-125 max-h-[90vh] overflow-y-auto p-0">
        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/80 hover:bg-white shadow-sm"
          >
            <X size={20} />
          </Button>
        </DialogClose>

        <div className="relative h-64 sm:h-72 w-full">
          <Image
            src={food.image}
            alt={food.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6 pt-5 space-y-6">
          <DialogHeader className="text-left space-y-1.5">
            <DialogTitle className="text-2xl font-bold">{food.name}</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              {food.description}
            </DialogDescription>
          </DialogHeader>

          <Separator />

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-primary flex items-center gap-1">
              <Euro size={26} /> {formatPrice(basePrice)}
            </span>
          </div>
          {/* Extra ingredients  */}
          {food?.ingredients && food.ingredients.length > 0 && (
            <div className="space-y-3">
              <label className="text-lg font-medium block">Extra Ingredients</label>
              <div className="space-y-3">
                {food.ingredients.map((ingredient) => {     // ← TS now knows it's defined
                  const isSelected = selectedExtras.has(ingredient.name);
                  return (
                    <div
                      key={ingredient.name}
                      className="flex items-center justify-between py-1.5 px-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{ingredient.name}</span>
                        <span className="text-muted-foreground text-sm flex items-center gap-1">
                          + <Euro size={14} /> {ingredient.price}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleExtra(ingredient.name)}
                      >
                        {isSelected ? <Minus size={16} /> : <Plus size={16} />}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity & Total */}
          <div className="flex items-center justify-between">
            <div className="flex items-center border rounded-full overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={decreaseQty}
                disabled={quantity <= 1}
                className="rounded-none"
              >
                <Minus size={18} />
              </Button>
              <span className="w-16 text-center font-medium text-lg">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={increaseQty}
                className="rounded-none"
              >
                <Plus size={18} />
              </Button>
            </div>

            <div className="text-right">
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="text-2xl font-bold flex items-center justify-end gap-1">
                <Euro size={20} /> {formatPrice(grandTotal)}
              </p>
            </div>
          </div>

          {/* Add to cart */}
          <DialogFooter className="pt-4">
            <Button
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-6 text-lg font-medium"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
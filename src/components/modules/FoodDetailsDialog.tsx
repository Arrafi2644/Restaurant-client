// components/FoodDialog.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Plus, Minus, X } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Food } from "@/types";


interface FoodDialogProps {
  food: Food;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddToCart?: (food: Food, quantity: number) => void; // optional callback
}

export default function FoodDetailsDialog({
  food,
  open,
  onOpenChange,
  onAddToCart,
}: FoodDialogProps) {
  const [quantity, setQuantity] = React.useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const priceDisplay = food.price.toFixed(2);
  const totalPrice = (food.price * quantity).toFixed(2);

  const formatCurrency = (value: string) => `Tk ${value}`;

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(food, quantity);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-125 max-h-[90vh] overflow-y-auto p-0">
        {/* Close button */}
        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/80 hover:bg-white shadow-sm"
          >
            <X size={20} />
          </Button>
        </DialogClose>

        {/* Hero image */}
        <div className="relative h-64 sm:h-72 w-full">
          <Image
            src={food.image}
            alt={food.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6 pt-5 space-y-5">
          <DialogHeader className="text-left space-y-1.5">
            <DialogTitle className="text-2xl font-bold">
              {food.name}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              {food.description}
            </DialogDescription>
          </DialogHeader>

          <Separator />

          {/* Price & Discount */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-primary">
              {formatCurrency(priceDisplay)}
            </span>
            {/* Example discount - make conditional in real app */}
            <span className="text-lg text-muted-foreground line-through">
              {formatCurrency((food.price * 1.18).toFixed(0))}
            </span>
            <span className="text-sm font-medium text-green-600">15% off</span>
          </div>

          {/* Special instructions */}
          <div className="space-y-2">
            <label
              htmlFor="instructions"
              className="text-lg font-medium block"
            >
              Special instructions
            </label>
            <Input
              id="instructions"
              placeholder="e.g. No onions, extra spicy, etc."
              className="resize-none"
            />
          </div>

          {/* Quantity selector */}
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
              <span className="w-12 text-center font-medium">{quantity}</span>
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
              <p className="text-xl font-bold">
                {formatCurrency(totalPrice)}
              </p>
            </div>
          </div>

          {/* Add to cart */}
          <DialogFooter className="pt-2">
            <Button
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-6 text-lg font-medium"
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
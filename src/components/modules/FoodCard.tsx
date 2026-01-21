// components/FoodCard.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Food } from "@/types";
import FoodDetailsDialog from "./FoodDetailsDialog";


interface FoodCardProps {
  food: Food;
}

export default function FoodCard({ food }: FoodCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card – clickable */}
      <div
        onClick={() => setOpen(true)}
        className="border hover:bg-pink-100 relative p-4 rounded-xl overflow-hidden hover:shadow-md transition flex items-center justify-between cursor-pointer group"
      >
        {/* Content */}
        <div className="space-y-2 flex-1 pr-4">
          <h5 className="font-semibold group-hover:text-pink-700 transition">
            {food.name}
          </h5>
          <div className="flex items-center justify-between pt-1">
            <span className="font-bold text-primary">
              Tk {food.price.toFixed(0)}
            </span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {food.description}
          </p>
        </div>

        {/* Plus button – decorative */}
        <Button
          className="absolute right-5 bottom-5 bg-white rounded-full text-gray-800 hover:bg-gray-100 shadow-sm"
          size="icon"
          variant="ghost"
        >
          <Plus size={28} />
        </Button>

        {/* Image */}
        <Image
          src={food.image}
          alt={food.name}
          height={128}
          width={128}
          className="h-28 w-28 md:h-32 md:w-32 rounded-lg object-cover object-center"
        />
      </div>

      {/* Modal – now separate component */}
      <FoodDetailsDialog
        food={food}
        open={open}
        onOpenChange={setOpen}
        // onAddToCart={(f, qty) => { ... your cart logic here ... }}
      />
    </>
  );
}
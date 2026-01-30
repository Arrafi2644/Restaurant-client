
"use client";

import { useRouter } from "next/navigation";
import { Plus, Euro } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { addToCart } from "@/utils/cart-helper";
import { useState } from "react";
import FoodDetailsDialog from "./FoodDetailsDialog";

export default function FoodCard({ food }: any) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  
  const handleQuickAdd = async (e: React.MouseEvent) => {
    e.stopPropagation();

    await addToCart({
      id: food._id,
      name: food.name,
      price: food.price,
      image: food.image,
    });

    router.refresh();
    toast.success("Added to cart");
  };

  return (
    <div className="relative h-full">
      <div
        onClick={() => setOpen(true)}
        className="border h-full hover:bg-pink-100 p-4 rounded-xl overflow-hidden hover:shadow-md transition flex items-center justify-between cursor-pointer group"
      >
        {/* Content */}
        <div className="space-y-2 flex-1 pr-4">
          <h5 className="font-bold transition group-hover:text-pink-700">
            {food.name}
          </h5>
          <div className="flex items-center justify-between pt-1">
            <span className="font-bold text-primary flex items-center gap-1">
              <Euro size={16} /> {food.price.toFixed(0)}
            </span>
          </div>
          <p className="text-sm text-gray-800 line-clamp-2">
            {food.description}
          </p>
          <h4 className="font-medium" >Extra Ingredients</h4>
          <div className="flex flex-wrap gap-1.5">
{food?.ingredients?.length > 0 ? (
  <div className="flex flex-wrap gap-2">
    {food.ingredients.slice(0, 2).map((ing:any, i:number) => {
      const isLastVisible = i === 1 && food.ingredients.length > 2;
      return (
        <span
          key={i}
          className="text-xs bg-pink-50 text-pink-700 px-2.5 py-1 rounded-full border border-pink-200"
        >
          {ing.name}
          {isLastVisible && (
            <span className="ml-1 text-gray-500">+{food.ingredients.length - 2}</span>
          )}
        </span>
      );
    })}
  </div>
) : (
  <span className="text-xs text-gray-500">No extras available</span>
)}
</div>
        </div>

        {/* Image */}
        <Image
          src={food.image}
          alt={food.name}
          height={128}
          width={128}
          className="h-28 w-28 md:h-32 md:w-32 rounded-lg object-cover object-center"
        />
      </div>

      <Button
        onClick={ food.ingredients.length <= 1 ? handleQuickAdd :   () => setOpen(true)}
        size="icon"
        
        className={` absolute cursor-pointer right-6 bottom-6 rounded-full text-gray-800 hover:text-white bg-white hover:bg-pink-500 transition-all duration-300`}
      >
        <Plus />
      </Button>

      <FoodDetailsDialog
      food={food}
      open={open}
      onOpenChange={setOpen}
    />
    </div>
  );
}

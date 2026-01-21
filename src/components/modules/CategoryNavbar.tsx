
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Category {
  name: string;
  count: number;
  _id: string;
}

const categories: Category[] = [
  {_id:"12345678", name: "Popular", count: 6 },
  {_id:"1234567", name: "Delicious Pastry", count: 3 },
  {_id:"123456", name: "Dessert", count: 9 },
  {_id:"12345", name: "Creamy Cupcakes", count: 5 },
  {_id:"1234", name: "Beverages", count: 8 },
  {_id:"123", name: "Warm Hot Drinks", count: 12 },
];

export default function CategoryNavbar() {
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  // detect overflow
  const checkOverflow = () => {
    if (!scrollRef.current) return;
    setShowScrollBtn(
      scrollRef.current.scrollWidth > scrollRef.current.clientWidth
    );
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const scrollContainer = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  const handleCategoryClick = (name: string) => {
  setActiveCategory(name);

  document
    .getElementById(`${name}`)          
    ?.scrollIntoView({ behavior: "smooth", inline: "center" });

  document
    .getElementById(`section-${name}`)  
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};
return (
  <div className="sticky top-24 lg:top-20 z-30 bg-white border-b">
    <div className="container mx-auto px-4 py-4">

      {/* WRAPPER */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">

        {/* 🔍 SEARCH */}
        <div className="relative w-full lg:w-64 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search in menu"
            className="pl-9 bg-gray-50"
          />
        </div>

        {/* CATEGORY BAR */}
        <div className="flex items-center gap-2 flex-1">

          {/* LEFT BUTTON */}
          {showScrollBtn && (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => scrollContainer("left")}
              className="shrink-0"
            >
              <ChevronLeft />
            </Button>
          )}

          {/* CATEGORY LIST */}
          <div
            ref={scrollRef}
            className="flex gap-2 flex-1 overflow-x-auto scrollbar-hide"
          >
            {categories.map((cat) => (
              <Button
                id={cat._id}
                key={cat.name}
                variant="ghost"
                onClick={() => handleCategoryClick(cat.name)}
                className={`shrink-0 whitespace-nowrap ${
                  activeCategory === cat.name
                    ? "text-pink-600 border-b-2 border-pink-600 rounded-none"
                    : "text-gray-600"
                }`}
              >
                {cat.name} ({cat.count})
              </Button>
            ))}
          </div>

          {/* RIGHT BUTTON */}
          {showScrollBtn && (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => scrollContainer("right")}
              className="shrink-0"
            >
              <ChevronRight />
            </Button>
          )}
        </div>

      </div>
    </div>

    {/* Hide scrollbar */}
    <style jsx>{`
      .scrollbar-hide {
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `}</style>
  </div>
);

}

import React from 'react'
import CategoryCard from './CategoryCard';
export interface Category {
    _id: string;
    name: string;
    count: number;
    description: string;
    categoryImg: string;
}

export default function CategoryWiseFoodSection() {
    const categories: Category[] = [
        {
            _id: "123456",
            name: 'Popular',
            count: 6,
            description: 'Our most loved and top-selling items chosen by customers.',
            categoryImg: "https://res.cloudinary.com/dog2ins5h/image/upload/v1768928243/crispy-tubtim-fish-salad-thai-food-herb_hmqamy.webp"
        },
        {
            _id: "123455",
            name: 'Delicious Pastry',
            count: 3,
            description: 'Freshly baked pastries with flaky layers and rich flavors.',
            categoryImg: 'https://res.cloudinary.com/dog2ins5h/image/upload/v1768928297/lavash-rolls-with-stuffings-tomatoes_o3xs6y.webp'
        },
        {
            _id: "123454",
            name: 'Dessert',
            count: 9,
            description: 'Sweet treats to satisfy your cravings and complete your meal.',
            categoryImg: 'https://res.cloudinary.com/dog2ins5h/image/upload/v1768928889/spicy-minced-chicken-white-plate-complete-with-cucumber-lettuce-side-dishes_icawvk.webp'
        },
        {
            _id: "123453",
            name: 'Creamy Cupcakes',
            count: 5,
            description: 'Soft cupcakes topped with smooth, creamy frosting.',
            categoryImg: 'https://res.cloudinary.com/dog2ins5h/image/upload/v1768929000/vegetarian-buddha-bowl-raw-vegetables-baked-potatoes-bowl-vegan-meal-healthy-detox-food-concept_ylkqls.webp'
        },
        {
            _id: "123452",
            name: 'Beverages',
            count: 8,
            description: 'Refreshing cold drinks and smoothies to keep you energized.',
            categoryImg: 'https://res.cloudinary.com/dog2ins5h/image/upload/v1768929000/vegetarian-buddha-bowl-raw-vegetables-baked-potatoes-bowl-vegan-meal-healthy-detox-food-concept_ylkqls.webp'
        },
        {
            _id: "123451",
            name: 'Warm Hot Drinks',
            count: 12,
            description: 'Comforting hot beverages perfect for any time of the day.',
            categoryImg: 'https://res.cloudinary.com/dog2ins5h/image/upload/v1768928243/crispy-tubtim-fish-salad-thai-food-herb_hmqamy.webp'
        }
    ];

    return (
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
            <h3 className='text-3xl lg:text-4xl font-bold mb-2'>Explore Food By Category</h3>
            <p className='mb-4'>
            Discover delicious dishes from every category, made just for you.
            </p>
            
            <div className='space-y-4'>
                {
                    categories.map(category => <CategoryCard key={category._id} category={category} />)
                }

            </div>
        </div>
    )
}

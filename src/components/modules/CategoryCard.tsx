import { Category } from "./CategoryWiseFoodSection";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import FoodCard from "./FoodCard";

type Props = {
    category: Category;
};

type Food = {
    _id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
    totalSell: number;
};

export default function CategoryCard({ category }: Props) {
    const foods = [
        // 🍰 Delicious Pastry
        {
            _id: "65f001a1c001a001a001a001",
            name: "Chocolate Croissant",
            description: "Flaky pastry filled with rich chocolate.",
            category: "Delicious Pastry",
            price: 180,
            image: "https://i.ibb.co/pastry1.jpg",
            totalSell: 320
        },
        {
            _id: "65f001a1c001a001a001a002",
            name: "Butter Danish",
            description: "Soft and buttery Danish pastry.",
            category: "Delicious Pastry",
            price: 160,
            image: "https://i.ibb.co/pastry2.jpg",
            totalSell: 280
        },
        {
            _id: "65f001a1c001a001a001a003",
            name: "Almond Puff",
            description: "Crispy puff pastry topped with almonds.",
            category: "Delicious Pastry",
            price: 200,
            image: "https://i.ibb.co/pastry3.jpg",
            totalSell: 190
        },
        {
            _id: "65f001a1c001a001a001a004",
            name: "Strawberry Pastry",
            description: "Sweet pastry layered with strawberry cream.",
            category: "Delicious Pastry",
            price: 220,
            image: "https://i.ibb.co/pastry4.jpg",
            totalSell: 410
        },
        {
            _id: "65f001a1c001a001a001a005",
            name: "Vanilla Cream Pastry",
            description: "Light pastry with vanilla cream filling.",
            category: "Delicious Pastry",
            price: 190,
            image: "https://i.ibb.co/pastry5.jpg",
            totalSell: 350
        },
        {
            _id: "65f001a1c001a001a001a006",
            name: "Honey Glazed Pastry",
            description: "Golden pastry glazed with natural honey.",
            category: "Delicious Pastry",
            price: 210,
            image: "https://i.ibb.co/pastry6.jpg",
            totalSell: 270
        },
        {
            _id: "65f001a1c001a001a001a007",
            name: "Coffee Puff Pastry",
            description: "Coffee-flavored crispy puff pastry.",
            category: "Delicious Pastry",
            price: 230,
            image: "https://i.ibb.co/pastry7.jpg",
            totalSell: 150
        },
        {
            _id: "65f001a1c001a001a001a008",
            name: "Cheese Danish",
            description: "Creamy cheese-filled Danish pastry.",
            category: "Delicious Pastry",
            price: 240,
            image: "https://i.ibb.co/pastry8.jpg",
            totalSell: 300
        },

        // 🍮 Dessert
        {
            _id: "65f001a1c001a001a001a009",
            name: "Chocolate Mousse",
            description: "Smooth and airy chocolate mousse.",
            category: "Dessert",
            price: 250,
            image: "https://i.ibb.co/dessert1.jpg",
            totalSell: 500
        },
        {
            _id: "65f001a1c001a001a001a010",
            name: "Caramel Pudding",
            description: "Soft pudding topped with caramel sauce.",
            category: "Dessert",
            price: 180,
            image: "https://i.ibb.co/dessert2.jpg",
            totalSell: 430
        },
        {
            _id: "65f001a1c001a001a001a011",
            name: "Tiramisu",
            description: "Classic Italian coffee-flavored dessert.",
            category: "Dessert",
            price: 320,
            image: "https://i.ibb.co/dessert3.jpg",
            totalSell: 380
        },
        {
            _id: "65f001a1c001a001a001a012",
            name: "Cheesecake Slice",
            description: "Creamy cheesecake with biscuit base.",
            category: "Dessert",
            price: 300,
            image: "https://i.ibb.co/dessert4.jpg",
            totalSell: 460
        },
        {
            _id: "65f001a1c001a001a001a013",
            name: "Brownie Sundae",
            description: "Warm brownie served with ice cream.",
            category: "Dessert",
            price: 280,
            image: "https://i.ibb.co/dessert5.jpg",
            totalSell: 520
        },
        {
            _id: "65f001a1c001a001a001a014",
            name: "Fruit Custard",
            description: "Fresh fruits mixed with sweet custard.",
            category: "Dessert",
            price: 200,
            image: "https://i.ibb.co/dessert6.jpg",
            totalSell: 290
        },
        {
            _id: "65f001a1c001a001a001a015",
            name: "Chocolate Lava Cake",
            description: "Soft cake with molten chocolate inside.",
            category: "Dessert",
            price: 350,
            image: "https://i.ibb.co/dessert7.jpg",
            totalSell: 610
        },
        {
            _id: "65f001a1c001a001a001a016",
            name: "Ice Cream Delight",
            description: "Mixed ice cream with chocolate sauce.",
            category: "Dessert",
            price: 220,
            image: "https://i.ibb.co/dessert8.jpg",
            totalSell: 400
        },

        // 🧁 Creamy Cupcakes
        {
            _id: "65f001a1c001a001a001a017",
            name: "Vanilla Cupcake",
            description: "Soft vanilla cupcake with cream frosting.",
            category: "Creamy Cupcakes",
            price: 120,
            image: "https://i.ibb.co/cupcake1.jpg",
            totalSell: 700
        },
        {
            _id: "65f001a1c001a001a001a018",
            name: "Chocolate Cupcake",
            description: "Moist chocolate cupcake with rich cream.",
            category: "Creamy Cupcakes",
            price: 140,
            image: "https://i.ibb.co/cupcake2.jpg",
            totalSell: 820
        },
        {
            _id: "65f001a1c001a001a001a019",
            name: "Red Velvet Cupcake",
            description: "Classic red velvet with cream cheese frosting.",
            category: "Creamy Cupcakes",
            price: 160,
            image: "https://i.ibb.co/cupcake3.jpg",
            totalSell: 650
        },
        {
            _id: "65f001a1c001a001a001a020",
            name: "Strawberry Cupcake",
            description: "Fresh strawberry flavored cupcake.",
            category: "Creamy Cupcakes",
            price: 150,
            image: "https://i.ibb.co/cupcake4.jpg",
            totalSell: 500
        },
        {
            _id: "65f001a1c001a001a001a021",
            name: "Coffee Cupcake",
            description: "Coffee infused cupcake with cream topping.",
            category: "Creamy Cupcakes",
            price: 170,
            image: "https://i.ibb.co/cupcake5.jpg",
            totalSell: 420
        },
        {
            _id: "65f001a1c001a001a001a022",
            name: "Caramel Cupcake",
            description: "Sweet caramel cupcake with creamy swirl.",
            category: "Creamy Cupcakes",
            price: 160,
            image: "https://i.ibb.co/cupcake6.jpg",
            totalSell: 480
        },
        {
            _id: "65f001a1c001a001a001a023",
            name: "Blueberry Cupcake",
            description: "Blueberry flavored cupcake with cream.",
            category: "Creamy Cupcakes",
            price: 155,
            image: "https://i.ibb.co/cupcake7.jpg",
            totalSell: 390
        },
        {
            _id: "65f001a1c001a001a001a024",
            name: "Nutella Cupcake",
            description: "Cupcake topped with Nutella cream.",
            category: "Creamy Cupcakes",
            price: 180,
            image: "https://i.ibb.co/cupcake8.jpg",
            totalSell: 560
        },

        // 🥤 Beverages
        {
            _id: "65f001a1c001a001a001a025",
            name: "Fresh Orange Juice",
            description: "Cold pressed fresh orange juice.",
            category: "Beverages",
            price: 150,
            image: "https://i.ibb.co/bev1.jpg",
            totalSell: 900
        },
        {
            _id: "65f001a1c001a001a001a026",
            name: "Mango Smoothie",
            description: "Thick mango smoothie with ice.",
            category: "Beverages",
            price: 180,
            image: "https://i.ibb.co/bev2.jpg",
            totalSell: 760
        },
        {
            _id: "65f001a1c001a001a001a027",
            name: "Lemon Mint Drink",
            description: "Refreshing lemon and mint beverage.",
            category: "Beverages",
            price: 120,
            image: "https://i.ibb.co/bev3.jpg",
            totalSell: 840
        },
        {
            _id: "65f001a1c001a001a001a028",
            name: "Cold Coffee",
            description: "Chilled coffee with milk and ice.",
            category: "Beverages",
            price: 190,
            image: "https://i.ibb.co/bev4.jpg",
            totalSell: 680
        },
        {
            _id: "65f001a1c001a001a001a029",
            name: "Chocolate Shake",
            description: "Creamy chocolate milkshake.",
            category: "Beverages",
            price: 220,
            image: "https://i.ibb.co/bev5.jpg",
            totalSell: 720
        },
        {
            _id: "65f001a1c001a001a001a030",
            name: "Strawberry Shake",
            description: "Sweet strawberry flavored milkshake.",
            category: "Beverages",
            price: 210,
            image: "https://i.ibb.co/bev6.jpg",
            totalSell: 650
        },
        {
            _id: "65f001a1c001a001a001a031",
            name: "Iced Tea",
            description: "Cold brewed lemon iced tea.",
            category: "Beverages",
            price: 110,
            image: "https://i.ibb.co/bev7.jpg",
            totalSell: 880
        },
        {
            _id: "65f001a1c001a001a001a032",
            name: "Apple Juice",
            description: "Fresh and healthy apple juice.",
            category: "Beverages",
            price: 140,
            image: "https://i.ibb.co/bev8.jpg",
            totalSell: 730
        },

        // ☕ Warm Hot Drinks
        {
            _id: "65f001a1c001a001a001a033",
            name: "Cappuccino",
            description: "Hot cappuccino with milk foam.",
            category: "Warm Hot Drinks",
            price: 180,
            image: "https://i.ibb.co/hot1.jpg",
            totalSell: 950
        },
        {
            _id: "65f001a1c001a001a001a034",
            name: "Latte",
            description: "Smooth hot latte coffee.",
            category: "Warm Hot Drinks",
            price: 190,
            image: "https://i.ibb.co/hot2.jpg",
            totalSell: 880
        },
        {
            _id: "65f001a1c001a001a001a035",
            name: "Hot Chocolate",
            description: "Rich and creamy hot chocolate.",
            category: "Warm Hot Drinks",
            price: 200,
            image: "https://i.ibb.co/hot3.jpg",
            totalSell: 920
        },
        {
            _id: "65f001a1c001a001a001a036",
            name: "Green Tea",
            description: "Healthy and refreshing green tea.",
            category: "Warm Hot Drinks",
            price: 120,
            image: "https://i.ibb.co/hot4.jpg",
            totalSell: 860
        },
        {
            _id: "65f001a1c001a001a001a037",
            name: "Black Coffee",
            description: "Strong and bold black coffee.",
            category: "Warm Hot Drinks",
            price: 150,
            image: "https://i.ibb.co/hot5.jpg",
            totalSell: 780
        },
        {
            _id: "65f001a1c001a001a001a038",
            name: "Milk Tea",
            description: "Classic hot milk tea.",
            category: "Warm Hot Drinks",
            price: 130,
            image: "https://i.ibb.co/hot6.jpg",
            totalSell: 890
        },
        {
            _id: "65f001a1c001a001a001a039",
            name: "Masala Tea",
            description: "Spiced traditional masala tea.",
            category: "Warm Hot Drinks",
            price: 140,
            image: "https://i.ibb.co/hot7.jpg",
            totalSell: 910
        },
        {
            _id: "65f001a1c001a001a001a040",
            name: "Espresso",
            description: "Strong single-shot espresso.",
            category: "Warm Hot Drinks",
            price: 160,
            image: "https://i.ibb.co/hot8.jpg",
            totalSell: 840
        }
    ];

    const newLinks = [
        "https://res.cloudinary.com/dog2ins5h/image/upload/v1768928243/crispy-tubtim-fish-salad-thai-food-herb_hmqamy.webp",
        "https://res.cloudinary.com/dog2ins5h/image/upload/v1768928297/lavash-rolls-with-stuffings-tomatoes_o3xs6y.webp",
        "https://res.cloudinary.com/dog2ins5h/image/upload/v1768928889/spicy-minced-chicken-white-plate-complete-with-cucumber-lettuce-side-dishes_icawvk.webp",
        "https://res.cloudinary.com/dog2ins5h/image/upload/v1768929000/vegetarian-buddha-bowl-raw-vegetables-baked-potatoes-bowl-vegan-meal-healthy-detox-food-concept_ylkqls.webp"
    ];

    for (let i = 0; i < foods.length; i++) {
        foods[i].image = newLinks[i % newLinks.length];
    }


    const popularFoods = foods
        .sort((a, b) => b.totalSell - a.totalSell)
        .slice(0, 6);

    return (
        <Accordion type="single" collapsible className="w-full border rounded-xl ">
            <AccordionItem id={`section-${category.name}`} value={category._id} className="border rounded-xl scroll-mt-56 lg:scroll-mt-40 ">
                {/* Header */}
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <div className="flex items-center justify-between gap-6 w-full">
                        <div>
                            <h4 className="text-lg font-semibold">{category.name}</h4>
                            <p className="text-sm text-muted-foreground">
                                {category.description}
                            </p>
                        </div>
                        <div>
                            <Image
                                src={category.categoryImg}
                                alt={category.name}
                                height={100}
                                width={100}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </AccordionTrigger>

                {/* Expanded Content */}
                <AccordionContent className="px-6 pb-6">
                    {(
                        category.name === "Popular"
                            ? popularFoods
                            : foods.filter(food => food.category === category.name)
                    ).length === 0 ? (
                        <p className="text-sm text-muted-foreground">
                            No items available in this category.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {(category.name === "Popular"
                                ? popularFoods
                                : foods.filter(food => food.category === category.name)
                            ).map(food => (
                                // <div
                                //     key={food._id}
                                //     className="border hover:bg-pink-100 relative p-4 rounded-xl overflow-hidden hover:shadow-md transition flex items-center justify-between"
                                // >

                                //     {/* Content */}
                                //     <div className=" space-y-2">
                                //         <h5 className="font-semibold">{food.name}</h5>
                                //         <div className="flex items-center justify-between pt-2">
                                //             <span className="font-bold text-primary">
                                //                 €{food.price}
                                //             </span>
                                //         </div>
                                //         <p className="text-sm text-muted-foreground line-clamp-2">
                                //             {food.description}
                                //         </p>

                                //     </div>

                                //     <Button className="absolute right-5 bottom-5 cursor-pointer hover:text-white bg-white rounded-full text-gray-800" size="icon"><Plus size={28} /></Button>

                                //     {/* Image */}
                                //     <Image
                                //         src={food.image}
                                //         alt={food.name}
                                //         height={128}
                                //         width={128}
                                //         className=" h-28 w-28 md:h-32 md:w-32 rounded-lg object-cover object-center"
                                //     />
                                // </div>
                                <FoodCard food={food} />
                            ))}
                        </div>
                    )}
                </AccordionContent>

            </AccordionItem>
        </Accordion>
    );
}
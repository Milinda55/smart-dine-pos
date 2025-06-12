import pizza from '../assets/images/Margherita Pizza.jpg'
import burger from '../assets/images/cheese-burger.jpg'
import bananaMilkShake from '../assets/images/banana_milkshake_73300_16x9.jpg.webp'
import berrySmoothie from '../assets/images/BerrySmoothie.jpg'
import chickenRice from '../assets/images/chicken-fried-rice.jpg'
import chocCake from '../assets/images/chocolate-lava-cake.jpg'
import lasagna from '../assets/images/classic-beef-lasanga.png'
import pankCake from '../assets/images/FluffyJapanesePancakes-e6d7773.jpg'
import juice from '../assets/images/hero5.png'
import iceCream from '../assets/images/hero12.png'



export const popularDishes = [
    {
        id: 1,
        image: pizza,
        name: 'Margherita Pizza',
        numberOfOrders: 120,
    },
    {
        id: 2,
        image: burger,
        name: 'Cheese Burger',
        numberOfOrders: 150,
    },
    {
        id: 3,
        image: bananaMilkShake,
        name: 'Banana Milk Shake',
        numberOfOrders: 100,
    },
    {
        id: 4,
        image: berrySmoothie,
        name: 'Berry Smoothie',
        numberOfOrders: 180,
    },
    {
        id: 5,
        image: chickenRice,
        name: 'Chicken Rice',
        numberOfOrders: 80,
    },
    {
        id: 6,
        image: chocCake,
        name: 'Chocolate Cake',
        numberOfOrders: 150,
    },
    {
        id: 7,
        image: lasagna,
        name: 'Classic Beef Lasagna',
        numberOfOrders: 100,
    },
    {
        id: 8,
        image: pankCake,
        name: 'Pancakes',
        numberOfOrders: 120,
    },
    {
        id: 9,
        image: juice,
        name: 'Fruit Juice',
        numberOfOrders: 220,
    },
    {
        id: 10,
        image: iceCream,
        name: 'Ice Cream',
        numberOfOrders: 250,
    }
]

export const tables = [
    {
        id: 1,
        name: 'Table 1',
        status: 'Booked',
        initial: 'AM',
        seats: 2
    },
    {
        id: 2,
        name: 'Table 2',
        status: 'Available',
        initial: 'MB',
        seats: 3
    },
    {
        id: 3,
        name: 'Table 3',
        status: 'Booked',
        initial: 'KB',
        seats: 5
    },
    {
        id: 4,
        name: 'Table 4',
        status: 'Available',
        initial: 'HR',
        seats: 1
    },
    {
        id: 5,
        name: 'Table 5',
        status: 'Booked',
        initial: 'PL',
        seats: 3
    },
    {
        id: 6,
        name: 'Table 6',
        status: 'Available',
        initial: 'RT',
        seats: 2
    },
    {
        id: 7,
        name: 'Table 7',
        status: 'Booked',
        initial: 'LC',
        seats: 4
    },
    {
        id: 8,
        name: 'Table 8',
        status: 'Available',
        initial: 'DP',
        seats: 1
    },
    {
        id: 9,
        name: 'Table 9',
        status: 'Booked',
        initial: 'NK',
        seats: 5
    },
    {
        id: 10,
        name: 'Table 10',
        status: 'Available',
        initial: 'SB',
        seats: 3
    },
    {
        id: 11,
        name: 'Table 11',
        status: 'Booked',
        initial: 'JD',
        seats: 4
    },
    {
        id: 12,
        name: 'Table 12',
        initial: 'AM',
        status: 'Available',
        seats: 3
    },
    {
        id: 13,
        name: 'Table 13',
        initial: 'MB',
        status: 'Booked',
        seats: 4
    },
    {
        id: 14,
        name: 'Table 14',
        initial: 'JS',
        status: 'Available',
        seats: 1
    },
    {
        id: 15,
        name: 'Table 15',
        initial: 'HR',
        status: 'Booked',
        seats: 5
    }
]

export const startersItem = [
    {
        id: 1,
        name: "Burger",
        price: 450,
        category: "Vegetarian"
    },
    {
        id: 2,
        name: "Chicken Roti",
        price: 200,
        category: "Non-Vegetarian"
    },
    {
        id: 3,
        name: "Tandoori Chicken",
        price: 550,
        category: "Non-Vegetarian"
    },
    {
        id: 4,
        name: "Samosa",
        price: 100,
        category: "Vegetarian"
    },
    {
        id: 5,
        name: "Cutlet",
        price: 120,
        category: "Vegetarian"
    },
    {
        id: 6,
        name: "Those",
        price: 220,
        category: "Vegetarian"
    }
];

export const mainCourse = [
    {
        id: 1,
        name: "Chicken rice",
        price: 400,
        category: "Non-Vegetarian"
    },
    {
        id: 2,
        name: "Noodles",
        price: 350,
        category: "Vegetarian"
    },
    {
        id: 3,
        name: "Chicken Biryani",
        price: 450,
        category: "Non-Vegetarian"
    },
    {
        id: 4,
        name: "Spaghetti",
        price: 180,
        category: "Vegetarian"
    },
    {
        id: 5,
        name: "Chicken Kottu",
        price: 400,
        category: "Non-Vegetarian"
    },
    {
        id: 6,
        name: "Cheese Kottu",
        price: 500,
        category: "Non-Vegetarian"
    }
];

export const beverages = [
    {
        id: 1,
        name: "Masala Tea",
        price: 50,
        category: "Hot"
    },
    {
        id: 2,
        name: "Lemon Soda",
        price: 80,
        category: "Cold"
    },
    {
        id: 3,
        name: "Mango Lassi",
        price: 120,
        category: "Cold"
    },
    {
        id: 4,
        name: "Cold Coffee",
        price: 150,
        category: "Cold"
    },
    {
        id: 5,
        name: "Fresh Lime Water",
        price: 60,
        category: "Cold"
    },
    {
        id: 6,
        name: "Iced Tea",
        price: 100,
        category: "Cold"
    }
];

export const soups = [
    {
        id: 1,
        name: "Tomato Soup",
        price: 120,
        category: "Vegetarian"
    },
    {
        id: 2,
        name: "Sweet Corn Soup",
        price: 130,
        category: "Vegetarian"
    },
    {
        id: 3,
        name: "Hot & Sour Soup",
        price: 140,
        category: "Vegetarian"
    },
    {
        id: 4,
        name: "Chicken Clear Soup",
        price: 160,
        category: "Non-Vegetarian"
    },
    {
        id: 5,
        name: "Mushroom Soup",
        price: 150,
        category: "Vegetarian"
    },
    {
        id: 6,
        name: "Lemon Coriander Soup",
        price: 110,
        category: "Vegetarian"
    }
];

export const desserts = [
    {
        id: 1,
        name: "Ice cream",
        price: 100,
        category: "Vegetarian"
    },
    {
        id: 2,
        name: "Jelly",
        price: 150,
        category: "Vegetarian"
    },
    {
        id: 3,
        name: "Chocolate Lava Cake",
        price: 250,
        category: "Vegetarian"
    },
    {
        id: 4,
        name: "Pudding",
        price: 180,
        category: "Vegetarian"
    }
];

export const pizzas = [
    {
        id: 1,
        name: "Margherita Pizza",
        price: 1350,
        category: "Vegetarian"
    },
    {
        id: 2,
        name: "Veg Supreme Pizza",
        price: 1400,
        category: "Vegetarian"
    },
    {
        id: 3,
        name: "Pepperoni Pizza",
        price: 1450,
        category: "Non-Vegetarian"
    }
];

export const alcoholicDrinks = [
    {
        id: 1,
        name: "Beer",
        price: 200,
        category: "Alcoholic"
    },
    {
        id: 2,
        name: "Whiskey",
        price: 500,
        category: "Alcoholic"
    },
    {
        id: 3,
        name: "Vodka",
        price: 450,
        category: "Alcoholic"
    },
    {
        id: 4,
        name: "Rum",
        price: 350,
        category: "Alcoholic"
    },
    {
        id: 5,
        name: "Tequila",
        price: 600,
        category: "Alcoholic"
    },
    {
        id: 6,
        name: "Cocktail",
        price: 400,
        category: "Alcoholic"
    }
];

export const salads = [
    {
        id: 1,
        name: "Caesar Salad",
        price: 200,
        category: "Vegetarian"
    },
    {
        id: 2,
        name: "Greek Salad",
        price: 250,
        category: "Vegetarian"
    },
    {
        id: 3,
        name: "Fruit Salad",
        price: 150,
        category: "Vegetarian"
    },
    {
        id: 4,
        name: "Chicken Salad",
        price: 300,
        category: "Non-Vegetarian"
    },
    {
        id: 5,
        name: "Tuna Salad",
        price: 350,

    }
];

export const menus = [
    { id: 1, name: "Starters", bgColor: "#b73e3e" ,icon: "🍲", items: startersItem },
    { id: 2, name: "Main Course", bgColor: "#5b45b0" ,icon: "🍛", items: mainCourse },
    { id: 3, name: "Beverages", bgColor: "#7f167f" ,icon: "🍹", items: beverages },
    { id: 4, name: "Soups", bgColor: "#735f32" ,icon: "🍜", items: soups },
    { id: 5, name: "Desserts", bgColor: "#1d2569" ,icon: "🍰", items: desserts },
    { id: 6, name: "Pizzas", bgColor: "#285430" ,icon: "🍕", items: pizzas },
    { id: 7, name: "Alcoholic Drinks", bgColor: "#b73e3e" ,icon: "🍺", items: alcoholicDrinks },
    { id: 8, name: "Salads", bgColor: "#5b45b0" ,icon: "🥗", items: salads }
]


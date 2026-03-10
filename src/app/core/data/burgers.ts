export interface Burger {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  badge: string;
}

export const BURGERS: Burger[] = [
  {
    id: 1,
    name: 'Classic Beef Burger',
    price: 5.99,
    description: 'Juicy grilled beef, cheddar cheese, lettuce, and tomato.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    badge: 'Popular'
  },
  {
    id: 2,
    name: 'Double Smash Burger',
    price: 7.49,
    description: 'Two smashed patties with caramelized onions and cheese.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
    badge: 'Best Seller'
  },
  {
    id: 3,
    name: 'Chicken Crunch Burger',
    price: 6.25,
    description: 'Crispy chicken fillet with spicy mayo and fresh slaw.',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360',
    badge: 'Hot'
  },
  {
    id: 4,
    name: 'BBQ Bacon Burger',
    price: 7.99,
    description: 'Smoky BBQ sauce, crispy bacon, cheese, and onion rings.',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add',
    badge: 'New'
  },
  {
    id: 5,
    name: 'Cheese Lava Burger',
    price: 6.89,
    description: 'Loaded with melted cheese and signature house sauce.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5',
    badge: 'Cheesy'
  },
  {
    id: 6,
    name: 'Spicy Jalapeño Burger',
    price: 6.95,
    description: 'For spice lovers with jalapeños, pepper jack, and chili sauce.',
    image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234',
    badge: 'Spicy'
  },
  {
    id: 7,
    name: 'Mushroom Swiss Burger',
    price: 7.10,
    description: 'Swiss cheese with sautéed mushrooms and garlic butter.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90',
    badge: 'Premium'
  },
  {
    id: 8,
    name: 'Avocado Burger',
    price: 7.30,
    description: 'Creamy avocado, lettuce, tomato, and grilled patty.',
    image: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05',
    badge: 'Fresh'
  },
  {
    id: 9,
    name: 'Crispy Fish Burger',
    price: 6.50,
    description: 'Golden fish fillet with tartar sauce and crunchy lettuce.',
    image: 'https://images.unsplash.com/photo-1615297928064-24977384d0da',
    badge: 'Seafood'
  },
  {
    id: 10,
    name: 'Veggie Burger',
    price: 5.75,
    description: 'Healthy plant-based patty with avocado and greens.',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2',
    badge: 'Vegan'
  },
  {
    id: 11,
    name: 'Egg Delight Burger',
    price: 6.80,
    description: 'Fried egg, cheese, and beef patty in a toasted bun.',
    image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f',
    badge: 'Special'
  },
  {
    id: 12,
    name: 'Ultimate Tower Burger',
    price: 8.99,
    description: 'A huge layered burger for the biggest appetite.',
    image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd',
    badge: 'Mega'
  }
];
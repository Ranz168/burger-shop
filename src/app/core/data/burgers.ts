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
    image: 'https://i.pinimg.com/736x/77/7e/d8/777ed8d70b122823c25a4fc851b437d5.jpg',
    badge: 'Popular'
  },
  {
    id: 2,
    name: 'Double Smash Burger',
    price: 7.49,
    description: 'Two smashed patties with caramelized onions and cheese.',
    image: 'https://i.pinimg.com/1200x/44/a7/47/44a7470857eae54b03d080b1a5ea2b63.jpg',
    badge: 'Best Seller'
  },
  {
    id: 3,
    name: 'Chicken Crunch Burger',
    price: 6.25,
    description: 'Crispy chicken fillet with spicy mayo and fresh slaw.',
    image: 'https://i.pinimg.com/736x/82/e0/16/82e016563f01273c6a3e9e29a7783cfd.jpg',
    badge: 'Hot'
  },
  {
    id: 4,
    name: 'BBQ Bacon Burger',
    price: 7.99,
    description: 'Smoky BBQ sauce, crispy bacon, cheese, and onion rings.',
    image: 'https://i.pinimg.com/736x/13/b6/99/13b699bdd0177af113a401d2d629c621.jpg',
    badge: 'New'
  },
  {
    id: 5,
    name: 'Cheese Lava Burger',
    price: 6.89,
    description: 'Loaded with melted cheese and signature house sauce.',
    image: 'https://i.pinimg.com/736x/bc/8a/5f/bc8a5f1dcbd42f762a8a5cce6c97d704.jpg',
    badge: 'Cheesy'
  },
  {
    id: 6,
    name: 'Spicy Jalapeño Burger',
    price: 6.95,
    description: 'For spice lovers with jalapeños, pepper jack, and chili sauce.',
    image: 'https://i.pinimg.com/736x/bb/9c/7f/bb9c7f91eb4b0e547da12740f3d47851.jpg',
    badge: 'Spicy'
  },
  {
    id: 7,
    name: 'Mushroom Swiss Burger',
    price: 7.10,
    description: 'Swiss cheese with sautéed mushrooms and garlic butter.',
    image: 'https://i.pinimg.com/736x/b3/e7/77/b3e777ceea6c2387bf13178486f6443e.jpg',
    badge: 'Premium'
  },
  {
    id: 8,
    name: 'Avocado Burger',
    price: 7.30,
    description: 'Creamy avocado, lettuce, tomato, and grilled patty.',
    image: 'https://i.pinimg.com/1200x/cd/60/f6/cd60f6cb9216062dfb1b3be4da4d0f91.jpg',
    badge: 'Fresh'
  },
  {
    id: 9,
    name: 'Crispy Fish Burger',
    price: 6.50,
    description: 'Golden fish fillet with tartar sauce and crunchy lettuce.',
    image: 'https://i.pinimg.com/1200x/cd/27/61/cd276157e4f27e8312ff5fad3faf0927.jpg',
    badge: 'Seafood'
  },
  {
    id: 10,
    name: 'Veggie Burger',
    price: 5.75,
    description: 'Healthy plant-based patty with avocado and greens.',
    image: 'https://i.pinimg.com/1200x/69/b7/ca/69b7ca2dc354cc607eb6788424258b52.jpg',
    badge: 'Vegan'
  },
  {
    id: 11,
    name: 'Egg Delight Burger',
    price: 6.80,
    description: 'Fried egg, cheese, and beef patty in a toasted bun.',
    image: 'https://i.pinimg.com/1200x/10/09/22/100922639447914b9e114ec89f12c403.jpg',
    badge: 'Special'
  },
  {
    id: 12,
    name: 'Ultimate Tower Burger',
    price: 8.99,
    description: 'A huge layered burger for the biggest appetite.',
    image: 'https://i.pinimg.com/736x/e9/d8/0a/e9d80adcaf481d60b7c5ba71c24de565.jpg',
    badge: 'Mega'
  }
];
{ /* Importing images from assets folder */}

import logo from './logo.png';
import search_icon from './search_icon.png';
import profile_icon from './profile_icon.png';
import cart_icon from './cart_icon.png';
import menu_icon from './menu_icon.png';
import dropdown_icon from './dropdown_icon.png';
import hero_img from './hero_img.png';
import product1 from './product1.png';
import product2 from './product2.png';
import product3 from './product3.png';
import product4 from './product4.png';
import product5 from './product5.png';
import product6 from './product6.png';
import product7 from './product7.png';
import product8 from './product8.png';
import product9 from './product9.png';
import product10 from './product10.png';
import exchange_icon from './exchange_icon.png';
import quality_icon from './quality_icon.png';
import support_img from './support_img.png';
import delete_icon from './delete_icon.png';
import star_icon from './star_icon.png';
import dullstar_icon from './dullstar_icon.png';
import stripe_logo from './stripe_logo.png';
import razorpay_logo from './razorpay_logo.png';
import EmilioLinkedInPic from './EmilioLinkedInPic.jpg';
import contact_img from './contact_img.png';

{ /* Assets list needed for rest of website */ }
export const assets = {
    // Add more assets as needed
  logo,
  search_icon,
  profile_icon,
  cart_icon,
  menu_icon,
  dropdown_icon,
  hero_img,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  exchange_icon,
  quality_icon,
  support_img,
  delete_icon,
  star_icon,
  dullstar_icon,
  stripe_logo,
  razorpay_logo,
  EmilioLinkedInPic,
  contact_img
}

{ /* Products list needed for Home/Collections page */ }
export const products = [
  {
    _id: "aa",
    name: 'Violin',
    price: 1099.99,
    image: ['/src/assets/product1.png'],
    description: 'This finely polished Violin is perfect for Beginners, Amatuers, and Professionals.',
    category: "String",
    subcategory: "BestSellers",
    sizes: ["M", "L", "XL"],
    bestseller: true
  },
  {
    _id: "ab",
    name: 'Cello',
    price: 1999.99,
    image: ['/src/assets/product2.png'],
    description: 'This beautifully crafted wooden Cello provides rich, loud accoustic sound.',
    category: "String",
    subcategory: "NotBestSellers",
    sizes: ["M", "L", "XL"],
    bestseller: false
  },
  {
    _id: "ac",
    name: 'Electronic Keyboard',
    price: 199.99,
    image: ['/src/assets/product3.png'],
    description: 'This sleek-designed keyboard contains over 300+ voices and rythyms',
    category: "Remainder",
    subcategory: "BestSellers",
    sizes: ["M", "L", "XL"],
    bestseller: true
  },
  {
    _id: "ad",
    name: 'Saxophone',
    price: 1499.99,
    image: ['/src/assets/product4.png'],
    description: 'This Golden Saxophone is perfect for Jazz, Blues, and Classical music.',
    category: "Wind",
    subcategory: "NotBestSellers",
    sizes: ["M", "L", "XL"],
    bestseller: false
  },
  {
    _id: "ae",
    name: 'Accordion',
    price: 2999.99,
    image: ['/src/assets/product5.png'],
    description: 'This 31-key Accordion is perfect for everyone. Containing 5 switches and lightweight play',
    category: "Wind",
    subcategory: "BestSellers",
    sizes: ["M", "L", "XL"],
    bestseller: true
  },
  {
    _id: "af",
    name: 'Drum Set',
    price: 399.99,
    image: ['/src/assets/product6.png'],
    description: 'This Drum Set provides loud, rich sound. Perfect for all levels of players',
    category: "Remainder",
    subcategory: "BestSellers",
    sizes: ["M", "L", "XL"],
    bestseller: true
  },
  {
    _id: "ag",
    name: 'Bass Guitar',
    price: 499.99,
    image: ['/src/assets/product7.png'],
    description: 'This Bass Guitar provides a nice groovy sound. Perfect for all musicians',
    category: "String",
    subcategory: "BestSellers",
    sizes: ["M", "L", "XL"],
    bestseller: true
  },
  {
    _id: "ah",
    name: 'Steel Guitar',
    price: 699.99,
    image: ['/src/assets/product8.png'],
    description: 'This Steel Guitar is one of a kind, where you can play Santo and Johnnys classic "Sleepwalk"',
    category: "String",
    subcategory: "NotBestSellers",
    sizes: ["M", "L", "XL"],
    bestseller: false
  },
  {
    _id: "ai",
    name: 'Clarinet',
    price: 1999.99,
    image: ['/src/assets/product9.png'],
    description: 'This Clarinet made from high-quality wood provides rich, loud accoustic sound.',
    category: "Wind",
    subcategory: "NotBestSellers",
    sizes: ["M", "L", "XL"],
    bestseller: false
  },
  {
    _id: "aj",
    name: 'Trumpet',
    price: 249.99,
    image: ['/src/assets/product10.png'],
    description: 'This Trumpet is perfect for Jazz, Blues, and Classical music.',
    category: "Wind",
    subcategory: "NotBestSellers",
    sizes: ["M", "L", "XL"],
    bestseller: false
  }
    
]
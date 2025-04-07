import logo from './logo.png';
import search_icon from './search_icon.png';
import profile_icon from './profile_icon.png';
import cart_icon from './cart_icon.png';
import menu_icon from './menu_icon.png';
import dropdown_icon from './dropdown_icon.png';
import hero_img from './hero_img.png';
import product1 from './product1.png';
import product2 from './product2.png';

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
  product2
}

export const products = [
  {
    id: 1,
    name: 'Violin',
    price: 1099.99,
    image: ['/src/assets/product1.png'],
    description: 'This finely polished Violin is perfect for Beginners, Amatuers, and Professionals.'
  },
  {
    id: 2,
    name: 'Cello',
    price: 1999.99,
    image: ['/src/assets/product2.png'],
    description: 'This beautifully crafted wooden Cello provides rich, loud accoustic sound.'
  },
  {
    id: 3,
    name: 'Product 3',
    price: 39.99,
    image: 'https://via.placeholder.com/150',
    description: 'This is yet another great product.'
  }
    
]
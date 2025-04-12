# Github Link: https://github.com/EmilioCz/Ecommerce_website
# Emilio Cervantez
# R11785036

## Set up Instructions
Download zip, extract folder.
Navigate your terminal to frontend of extracted folder using 'cd ...\ecommerce-app\frontend'.
Now Type "npm run dev" into terminal
Click the local site link: 'http://localhost:5173/' 

## Description of Implemented Feautures (Components, Pages, Files)

- Code files contain comments for features in more detail.

- App.jsx : This file is the main router configuration using react-router-dom.
- Main.jsx : All pages are wrapped inside Navbar and Footer, across routes.
- index.css : App is wrapped by ShopContextProvider which is wrapped by BrowserRouter.
  + ShopContextProvider wraps everything for global state access. 

- Routes Defined:
/ = Home
/collections = Collection
/product/:productId = Product
/cart = Cart
/contact = Contact
/login = Login
/about = About
/orders = Orders
/placeorder = PlaceOrder

- All pages(routes) are wrapped inside Navbar and Footer, across routes.

## Components:
Navigation Bar Component:
- Displays site logo and name in top right of page (if logo is clicked this will navigate to home page)
- Provide links to main pages (Home, Collection, About, Contact, My Profile, Orders, Cart)
- Include a search bar component (only usable in collection page)
- Show cart item count (updates based on quanity added or if adjusted in cart page)
- Responsive design with mobile menu toggle (click 4 grid squares to select Home, Collection, About, Contact)

Product Card Component:
- Displays product image
- Shows product name, price, and brief description about product
- Includes an "Add to Cart" button and updates the cart quantity in top right of screen
- Displays product rating (4 out of 5 starts for example)
- Handles image loading states and errors via useEffect()

Product List/Grid Component:
- Product List is in a responsive column layout that contains 10 products.
- Implemented infinite scroll.
- Includes sorting functionality (by price, popularity, etc.) using a tab on right side of productpage

Shopping Cart Component:
- Lists all items added to cart with quantities
- Allows quantity adjustments and item removal (trash bin)
- Calculate and display subtotal, taxes, and total 
- Includes "Proceed to Checkout" button
- Handles empty cart state appropriately by not allowing addToCart to work (toastify prints message)

Search Component:
- Provides text input for product search (collection page only)
- Implements search suggestions (pictures)
- Demonstrates debouncing for performance

Filtering:
- Allows filtering products by category (Wind, String, Remainder)
- Includes price range selection (high to low, low to high)
- Provides options for additional filters (type bestseller/non, instrument category)
- Allows multiple simultaneous filters
- Maintains filter state across page navigation

User Authentication Forms:
- Implements login form with email/password fields
- Creates registration form with validation (need @ symbol and valid email)
- Handles form submission and error states
- Include password reset option (not functional yet)
- Stores authentication state appropriately

Checkout Form:
- Creates multi-step checkout process
- Gathers shipping information (address, email, number, zip)
- Collects payment details
- Provides order summary (quantity price etc..)
- Implements form validation
- Shows confirmation message upon submission (not yet but will be when working on backend)

Hero Component:
- Full-width promotional banner used on Home page.
- Displays tagline and CTA button linking to /collections.

BestSeller Component:
- Renders a list of products marked as bestsellers.
- Uses ProductItem to display each product card.

LatestCollection Component:
- Displays a grid of latest or remaining category products.
- Also uses ProductItem for consistent visual cards.

ProductItem Component:
- Reusable product display component.
- Shows product image, name, price.
- Used in Collection, BestSeller, LatestCollection, RelatedProducts.

CartTotal Component:
- Used in Cart page to compute total and tax.
- Accesses ShopContext to read cartItems and calculate subtotal.

NewsletterBox Component:
- Simple newsletter signup UI box used on Home, About, Contact page.
- Includes input field and subscribe button (no backend logic yet).

OurPolicy Component:
- Displays three icon-based trust banners: Easy Exchange, Quality Products, Support.
- Used on Home page below product listings.

RelatedProducts Component:
- Displays horizontal list of other related products based on description.
- Filters and shows bestselling products related to current item (behind the scenes).

Title Component:
- Small reusable component to render section titles.
- Used in Collection and many other section headers.

Footer Component:
- Sticky footer rendered on all pages.
- Displays branding, links, and contact/social/footer content.


## Pages
Home Page:
- This page displays (from user perspective): Navbar, Hero, BestSeller, LatestCollection, NewsletterBox, OurPolicy, Footer.
- Hero displays a banner with image/text.
- BestSeller and LatestCollection render product cards filtered by flags.
- NewsletterBox offers email signup UI.
- OurPolicy presents trust elements (returns, quality, support).

Collection Page:
- This page displays (from user perspective): Navbar, Title, SearchBar, ProductItem, Footer.
- Title renders a consistent header.
- SearchBar allows users to filter/search instruments.
- ProductItem is reused to display product cards.

Product Page:
- This page displays (from user perspective): Navbar, ProductItem, RelatedProducts, Footer.
- Dynamically shows one product using its ID from URL.
- RelatedProducts shows other bestsellers using ProductItem.

Cart Page:
- This page displays (from user perspective): Navbar, CartTotal, Footer.
- Lists products in the user's cart with images and controls.
- CartTotal calculates price and estimated tax from cartItems.

PlaceOrder Page:
- This page displays (from user perspective): Navbar, Footer.
- Displays a summary of selected items from the cart.
- Shows Stripe and Razorpay logos for visual payment placeholder.

Contact Page:
- This page displays (from user perspective): Navbar, Footer.
- Contains a form and support image for user communication.

Login Page:
- This page displays (from user perspective): Navbar, Footer.
- Placeholder for future login functionality.

Orders Page:
- This page displays (from user perspective): Navbar, Footer.
- Placeholder for displaying past orders/information on orders such as delivery etc...

About Page:
- This page displays (from user perspective): Navbar, Footer.
- Contains basic store information/pictures/mission statement.

# User Experience Form
Navigation:
- From any page, users can click Navbar links to reach other sections.

Shopping:
- Browse products on homepage (BestSeller) or /collections
- View different pages
- Add items to cart
- Login/Sign Up

Checkout:
- Review items in /cart
- Proceed to /placeorder and simulate order placement

# Features
Feature                       | Implemented using
------------------------------|-----------------------------------------------
Dynamic Routing               | react-router-dom in App.jsx
Global Cart Management        | ShopContext and useContext()
Product Filtering             | Category logic in Collection.jsx
Image Assets Management       | assets.js
Checkout UI                   | Cart.jsx + PlaceOrder.jsx
Modular Components            | Navbar, Footer, Cards, Hero, Policy, etc.
Responsive Layout             | CSS 
Interactive Icons             | Like delete buttons, star ratings
Static Pages                  | Contact, About, Orders, Login


## Third-party libraries used and why
-React + Vite these are used for the overall setup of the website(JavaScript,CSS,HTML, necessary files).
-ToastContainer is used for the purpose of requiring the user to select a size when adding a product to cart.
-Google Fonts is used to help style the fonts in pages (in certain areas) such as Sign up page, and Home page.
-TailWind CSS for styling different divs etc, used all over the site.
-React-Router-Dom is used z

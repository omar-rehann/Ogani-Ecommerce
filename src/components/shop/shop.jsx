import "./shop.css"
import Swal from "sweetalert2";

// structure product
import ProductCard from "../productcard/procard"
// sales product 
import imgone from '../../img/coffe.avif';
import imgtwo from '../../img/icecoffe.avif';
import imgthree from '../../img/colacan.avif';
import imgfour from '../../img/energy.avif';
import imgfive from '../../img/chips.avif';
import imgsix from '../../img/nacos.avif';
import imgseven from '../../img/popcorn.avif';
import imgeight from '../../img/Lollipop.avif';
import imgnine from '../../img/cho.avif';
import imgten from '../../img/candy.avif';
import imgeleven from '../../img/cake.avif';
import imgtweleve from '../../img/cupcake.avif';
import imgthirty from '../../img/donus.avif';
import imgfourty from '../../img/burger.avif';
import imgfifty from '../../img/pizza.avif';
import imgsixitu from '../../img/Fries.avif';


function Shop(){
const products = [
  // Coffee & Drinks ☕🥤
  {
    id: 1,
    name: "Coffee",
    title: "Hot Coffee Cup",
    price: 35,
    src: imgone,
    category: "Beverages"
  },
  {
    id: 2,
    name: "Iced Coffee",
    title: "Cold Iced Coffee",
    price: 40,
    src: imgtwo,
    category: "Beverages"
  },
  {
    id: 3,
    name: "Cola Can",
    title: "Soft Drink Can",
    price: 20,
    src: imgthree,
    category: "Beverages"
  },
  {
    id: 4,
    name: "Energy Drink",
    title: "Energy Drink Can",
    price: 30,
    src: imgfour,
    category: "Beverages"
  },

  // Snacks 🍟
  {
    id: 5,
    name: "Chips",
    title: "Potato Chips",
    price: 15,
    src: imgfive,
    category: "Snacks"
  },
  {
    id: 6,
    name: "Nachos",
    title: "Cheese Nachos",
    price: 18,
    src: imgsix,
    category: "Snacks"
  },
  {
    id: 7,
    name: "Popcorn",
    title: "Butter Popcorn",
    price: 12,
    src: imgseven,
    category: "Snacks"
  },

  // Sweets 🍭🍫
  {
    id: 8,
    name: "Lollipop",
    title: "Colorful Lollipop",
    price: 5,
    src: imgeight,
    category: "Sweets"
  },
  {
    id: 9,
    name: "Chocolate",
    title: "Chocolate Bar",
    price: 10,
    src: imgnine,
    category: "Sweets"
  },
  {
    id: 10,
    name: "Candy",
    title: "Mixed Candy",
    price: 8,
    src: imgten,
    category: "Sweets"
  },

  // Bakery 🍰
  {
    id: 11,
    name: "Cake",
    title: "Strawberry Cake",
    price: 60,
    src: imgeleven,
    category: "Bakery"
  },
  {
    id: 12,
    name: "Cupcake",
    title: "Sweet Cupcake",
    price: 20,
    src: imgtweleve,
    category: "Bakery"
  },
  {
    id: 13,
    name: "Donut",
    title: "Chocolate Donut",
    price: 15,
    src: imgthirty,
    category: "Bakery"
  },

  // Fast Food 🍔🍕
  {
    id: 14,
    name: "Burger",
    title: "Beef Burger",
    price: 70,
    src: imgfourty,
    category: "Fast Food"
  },
  {
    id: 15,
    name: "Pizza",
    title: "Cheese Pizza",
    price: 80,
    src: imgfifty,
    category: "Fast Food"
  },
  {
    id: 16,
    name: "Fries",
    title: "French Fries",
    price: 25,
    src: imgsixitu,
    category: "Fast Food"
  }
];
//  add to localstorage
const saveproduct = (product) => {
  let buyproduct=JSON.parse(localStorage.getItem("cards")) || [];
  buyproduct.push(product);
  localStorage.setItem("cards",JSON.stringify(buyproduct));
  Swal.fire({
    icon: "success",
    title: "Added to Cart 🛒",
    text: "The product has been added successfully",
    showConfirmButton: false,
    timer: 1500
  });
  };
  // add to favorite local storage

  const favproduct = (favproductt) => {
 let favproduct=JSON.parse(localStorage.getItem("favcards")) || [];
  favproduct.push(favproductt);
  localStorage.setItem("favcards",JSON.stringify(favproduct));
   Swal.fire({
    icon: "success",
    title: "Added to Wishlist ❤️",
    text: "The product has been added to your wishlist",
    showConfirmButton: false,
    timer: 1500
  });
  };
    return(
        <>
        <div className="shop">
              <div className="poster">
              <div className="text">
              <h4>Organi Shop
</h4>
<h5>Home / Shop</h5>

              </div>
            </div>
            <div className="content">
                <div className="row g-2">
                    <div className="col-md-3">
                       <div className="leftside">
                         <div className="dapartment">
    
<h2>Department</h2>
<h5>Fresh Meat
</h5>
<h5>Vegetables
</h5>
<h5>Fruit & Nut Gifts
</h5>
<h5>Fresh Berries
</h5>
<h5>Ocean Foods
</h5>
<h5>Ocean Foods
</h5>
<h5>Butter & Eggs
</h5>
<h5>Fastfood
</h5>
<h5>Fresh Onion
</h5>
<h5>Papayaya & Crisps
</h5>
<h5>Oatmeal</h5>

                        </div>
                        <div className="colors">
                            <h2>color</h2>
                            <h5>White</h5>
                            <h5>Red</h5>
                            <h5>Gold</h5>
                            <h5>Black</h5>
                            <h5>Blue</h5>
                            <h5>Green</h5>


                        </div>
                        <div className="size">
                            <h2>Popular Size</h2>
                            <h5>Large</h5>
                            <h5>Medium</h5>
                            <h5>Small</h5>
                            <h5>Tiny</h5>

                        </div>
                        <div className="price">
                            <input type="range" name="" id="" />
                        </div>
                       </div>

                    </div>
                    <div className="col-md-9">
                         <div className="continer">
                            <h4>Sale Off</h4>
                         </div>
                         <div className="salesproduct">
<div className="row">
            {products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="box">
                   <ProductCard
                  name={product.name}
                  title={product.title}
                   price={product.price}
                  src={product.src}
                  saveproduct={() => saveproduct(product)}
                  favproduct={() => favproduct(product)}
                />
                </div>
              </div>
             
              
            ))}
          </div>
                         </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Shop
import "./swiper.css"
import Swal from "sweetalert2";
import ProductCard from "../productcard/procard"
import { useState } from "react";
import imgone from '../../img/apple.avif';
import imgtwo from '../../img/bannana.avif';
import imgthree from '../../img/grappes.jpg';
import imgfour from '../../img/orange.avif';
import imgfive from '../../img/meat.avif';
import imgsix from '../../img/mango.avif';
import imgseven from '../../img/watermelon.avif';
import imgeight from '../../img/f1.avif';
import imgnine from '../../img/f2.avif';
import imgten from '../../img/f3.avif';
import imgeleven from '../../img/f4.avif';
import imgtweleve from '../../img/f5.avif';
import imgthirty from '../../img/f5.avif';
import imgfourty from '../../img/b1.avif';
import imgfifty from '../../img/b2.avif';
import imgsixitu from '../../img/b3.avif';
import imgseventy from '../../img/b4.avif';
import imgeighty from '../../img/b5.avif';
import imgnintey from '../../img/fr1.avif';
import imgtwenty from '../../img/fr2.avif';
import imgtwentyone from '../../img/fr3.avif';
import imgtwentytwo from  '../../img/fr4.avif';
import imgtwentythree from '../../img/fr5.avif';
import imgtwentyfour from '../../img/fr6.avif';
import imgtwentyfive from '../../img/br1.avif';
import imgtwentysix from '../../img/br2.avif';
import imgtwentyseven from  '../../img/br3.avif';
import imgtwentyeight from '../../img/br4.avif';
import imgtwentynine from '../../img/br5.avif';





function SwiperCard(){
const products = [
  // All Products + Categories
  {
    id: 1,
    name: "Apple Product",
    title: "Fresh Red Apple",
    price: 30,
    src: imgone,
    category: "Fruits"
  },
  {
    id: 2,
    name: "Banana Product",
    title: "Fresh Banana",
    price: 30,
    src: imgtwo,
    category: "Fruits"
  },
  {
    id: 3,
    name: "Grapes Product",
    title: "Fresh Grapes",
    price: 40,
    src: imgthree,
    category: "Fruits"
  },
  {
    id: 4,
    name: "Orange Product",
    title: "Fresh Orange",
    price: 40,
    src: imgfour,
    category: "Fruits"
  },
  {
    id: 5,
    name: "Meat Product",
    title: "Fresh Meat",
    price: 40,
    src: imgfive,
    category: "Meat"
  },
  {
    id: 6,
    name: "Mango Product",
    title: "Fresh Mango",
    price: 40,
    src: imgsix,
    category: "Fruits"
  },
  {
    id: 7,
    name: "Watermelon Product",
    title: "Fresh Watermelon",
    price: 40,
    src: imgseven,
    category: "Fruits"
  },

  // Fruits
  {
    id: 8,
    name: "Pineapple",
    title: "Fresh Pineapple",
    price: 40,
    src: imgeight,
    category: "Fruits"
  },
  {
    id: 9,
    name: "Grapes",
    title: "Fresh Grapes",
    price: 60,
    src: imgnine,
    category: "Fruits"
  },
  {
    id: 10,
    name: "Apricot",
    title: "Fresh Apricot",
    price: 70,
    src: imgten,
    category: "Fruits"
  },
  {
    id: 11,
    name: "Banana",
    title: "Fresh Banana",
    price: 50,
    src: imgeleven,
    category: "Fruits"
  },
  {
    id: 12,
    name: "Grapes",
    title: "Fresh Grapes",
    price: 55,
    src: imgtweleve,
    category: "Fruits"
  },
  {
    id: 13,
    name: "Grapes",
    title: "Fresh Grapes",
    price: 66,
    src: imgthirty,
    category: "Fruits"
  },

  // Bakery
  {
    id: 14,
    name: "Bakery Item",
    title: "Fresh Bread",
    price: 90,
    src: imgfourty,
    category: "Bakery"
  },
  {
    id: 15,
    name: "Bakery Item",
    title: "Croissant",
    price: 23,
    src: imgfifty,
    category: "Bakery"
  },
  {
    id: 16,
    name: "Bakery Item",
    title: "Cake",
    price: 34,
    src: imgsixitu,
    category: "Bakery"
  },
  {
    id: 17,
    name: "Bakery Item",
    title: "Donut",
    price: 36,
    src: imgseventy,
    category: "Bakery"
  },
  {
    id: 18,
    name: "Bakery Item",
    title: "Cookies",
    price: 33,
    src: imgeighty,
    category: "Bakery"
  },

  // Frozen Foods
  {
    id: 19,
    name: "Frozen Item",
    title: "Frozen Vegetables",
    price: 24,
    src: imgnintey,
    category: "Frozen Foods"
  },
  {
    id: 20,
    name: "Frozen Item",
    title: "Frozen Chicken",
    price: 60,
    src: imgtwenty,
    category: "Frozen Foods"
  },
  {
    id: 21,
    name: "Frozen Item",
    title: "Ice Cream",
    price: 60,
    src: imgtwentyone,
    category: "Frozen Foods"
  },
  {
    id: 22,
    name: "Frozen Item",
    title: "Frozen Pizza",
    price: 70,
    src: imgtwentytwo,
    category: "Frozen Foods"
  },
  {
    id: 23,
    name: "Frozen Item",
    title: "Frozen Fries",
    price: 80,
    src: imgtwentythree,
    category: "Frozen Foods"
  },
  {
    id: 24,
    name: "Frozen Item",
    title: "Frozen Fish",
    price: 30,
    src: imgtwentyfour,
    category: "Frozen Foods"
  },

  // Beverages
  {
    id: 25,
    name: "Beverage",
    title: "Orange Juice",
    price: 90,
    src: imgtwentyfive,
    category: "Beverages"
  },
  {
    id: 26,
    name: "Beverage",
    title: "Cola Drink",
    price: 70,
    src: imgtwentysix,
    category: "Beverages"
  },
  {
    id: 27,
    name: "Beverage",
    title: "Water Bottle",
    price: 60,
    src: imgtwentyseven,
    category: "Beverages"
  },
  {
    id: 28,
    name: "Beverage",
    title: "Mango Juice",
    price: 50,
    src: imgtwentyeight,
    category: "Beverages"
  },
  {
    id: 29,
    name: "Beverage",
    title: "Apple Juice",
    price: 60,
    src: imgtwentynine,
    category: "Beverages"
  },
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
const [value,choosevalue]=useState("All");
const filterdata=value==="All" ? products : products.filter((e)=>e.category===value);
const [cart, setCart] = useState([]);
    return(
        <>
        <div className="feturedproduct">
          <div className="continer">
            <h4>Fetured Product</h4>
          </div>
          <div className="content text-center">
            <div className="buttons mx-auto">
              <button onClick={()=>choosevalue("All")} className="btn btn-danger m-2">All</button>
              <button onClick={()=>choosevalue("Fruits")} className="btn btn-danger m-2">Fruits</button>
              <button onClick={()=>choosevalue("Bakery")} className="btn btn-danger m-2">Bakery</button>
              <button onClick={()=>choosevalue("Frozen Foods")} className="btn btn-danger m-2">Frozen Foods</button>
              <button onClick={()=>choosevalue("Beverages")} className="btn btn-danger m-2">Beverages</button>

            </div>

          </div>
          <div className="showproducts">
          <div className="row">
            {filterdata.map((product) => (
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
      
        </>
    )
}
export default SwiperCard
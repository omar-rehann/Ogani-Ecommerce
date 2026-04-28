
import Header from "./components/Header/header";
import Homepage from "./pages/homepage"
import Shop from "./components/shop/shop"
import BlogPage from "./pages/blogpage"
import Blogdetials from "./components/blog detials/details"
import Calc from "./components/calculation/calc";
import Fav from "./components/fav/fav";
import Footer from "./components/footer/footer"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

    return ( 
        <>
     <BrowserRouter>
  <Header />

  <Routes>
    <Route path="*" element={<Homepage />} />
    <Route path="/" element={<Homepage />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/blogdetails" element={<Blogdetials />} />
    <Route path="/elements" element={<Calc/>} />
    <Route path="/fav" element={<Fav/>} />
  </Routes>

  <Footer />
</BrowserRouter>
        
        
      
        </>
    );
}

export default App;
import "./procard.css"
function ProductCard({name,title,src,price,saveproduct,favproduct}){
    return(
        <>
        <div className="productcard">
            <div className="row">
                <div className="col-md-12">
                    <div class="box details_box lg-bg">
                            <img src={src} class="w-100" alt=""/>
                            <h6 class="gray text-start mt-2">{name}</h6>
                            <h4 className="color text-start">{title}</h4>
                            <div className="icon text-start">
                                <i className="fa-solid fa-star star" ></i>
                                <i className="fa-solid fa-star star"></i>
                                <i className="fa-solid fa-star star"></i>
                                <i className="fa-solid fa-star star"></i>
                                <i className="fa-solid fa-star star"></i>
                            </div>
                            <div className="price mt-2 d-flex justify-content-between align-items-center ">
                                <h5 className="mt-2">{price}</h5>
                             <div className="icon">
                                <i onClick={saveproduct} className="fa-solid fa-cart-shopping buy ms-2"></i>
                                <i onClick={favproduct} className="fa-solid fa-heart  buy ms-2"></i>
                             </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductCard
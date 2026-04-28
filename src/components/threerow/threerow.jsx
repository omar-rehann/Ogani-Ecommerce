import "./threerow.css"
import ip1 from "../../img/lp-1.jpg"
import ip2 from "../../img/lp-2.jpg"
import ip3 from "../../img/lp-3.jpg"
import ip4 from "../../img/veg1.avif"
import ip5 from "../../img/veg2.avif"
import ip6 from "../../img/beg3.avif"
import ip7 from "../../img/veg7.webp"
import ip8 from "../../img/veg2.avif"
import ip9 from "../../img/veg9.webp"

function Threerow(){
    return(
        <>
        <div className="threerow">
           <div className="row m-2">
    {/* Latest Product - Arugula (Rocket) */}
    <div className="col-md-4">
        <div className="adress">
            <h3>Latest Product</h3>
        </div>
        
        <div className="box">
            <div className="content">
                <div className="carrd">
                    <div className="image">
                        <img src={ip1} alt="Arugula" />
                    </div>
                    <div className="text">
                        <h4>Fresh Arugula</h4>
                        <h5>$2.50</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="content">
                <div className="carrd">
                    <div className="image">
                        <img src={ip2} alt="Arugula" />
                    </div>
                    <div className="text">
                        <h4>Organic Arugula</h4>
                        <h5>$3.20</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="content">
                <div className="carrd">
                    <div className="image">
                        <img src={ip3} alt="Arugula" />
                    </div>
                    <div className="text">
                        <h4>Roman Arugula</h4>
                        <h5>$2.80</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Top Rated Product - Pepper */}
    <div className="col-md-4">
        <div className="adress">
            <h3>Top Rated Product</h3>
        </div>
        
        <div className="box">
            <div className="content">
                <div className="carrd">
                    <div className="image">
                        <img src={ip4} alt="Pepper" />
                    </div>
                    <div className="text">
                        <h4>Green Hot Chili Pepper</h4>
                        <h5>$1.80</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="content">
                <div className="carrd">
                    <div className="image">
                        <img src={ip5} alt="Pepper" />
                    </div>
                    <div className="text">
                        <h4>Colorful Bell Pepper</h4>
                        <h5>$3.50</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="content">
                <div className="carrd">
                    <div className="image">
                        <img src={ip6} alt="Pepper" />
                    </div>
                    <div className="text">
                        <h4>Yellow Sweet Pepper</h4>
                        <h5>$3.00</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Review Product - Chicken */}
    <div className="col-md-4">
        <div className="adress">
            <h3>Review Product</h3>
        </div>
        
        <div className="box">
            <div className="content">
                <div className="carrd">
                    <div className="image">
                        <img src={ip7} alt="Chicken" />
                    </div>
                    <div className="text">
                        <h4>Whole Fresh Chicken</h4>
                        <h5>$12.99</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="content">
                <div className="carrd">
                    <div className="image">
                        <img src={ip8} alt="Chicken" />
                    </div>
                    <div className="text">
                        <h4>Boneless Chicken Breast</h4>
                        <h5>$15.50</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="content">
                <div className="carrd">
                    <div className="image">
                        <img src={ip9} alt="Chicken" />
                    </div>
                    <div className="text">
                        <h4>Fresh Chicken Thighs</h4>
                        <h5>$13.75</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
        </>
    )
}
export default Threerow
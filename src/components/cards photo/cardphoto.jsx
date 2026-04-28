import "./cardphoto.css"
import Bannerone from "../../img/banner-1.jpg"
import Bannertwo from "../../img/banner-2.jpg"
import Bannerthree from "../../img/banner-3.jpg"
import Bannerfour from "../../img/banner-6.jpg"
import Bannerfive from "../../img/banner-7.jpg"
import Bannersix from "../../img/banner-8.jpg"


function Cardphoto(){
    return(
        <>
        <div className="cardphoto">
            <div className="row g-2 m-2">
                <div className="col-md-4">
                    <div className="image">
                        <img src={Bannerone} alt="" />
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="image">
                        <img src={Bannertwo} alt="" />
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="image">
                        <img src={Bannerthree} alt="" />
                    </div>

                </div>
                  <div className="col-md-4">
                    <div className="image">
                        <img src={Bannerfour} alt="" />
                    </div>

                </div>
                  <div className="col-md-4">
                    <div className="image">
                        <img src={Bannerfive} alt="" />
                    </div>

                </div>
                  <div className="col-md-4">
                    <div className="image">
                        <img src={Bannersix} alt="" />
                    </div>

                </div>
            </div>

        </div>
        </>
    )
}
export default Cardphoto
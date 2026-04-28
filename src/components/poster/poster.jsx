import "./poster.css"
import Banner from "././../../img/banner-1.jpg"
import Button from 'react-bootstrap/Button';

function Poster(){
    return(
        <>
        <div className="poster">
            <div className="row">
                <div className="col-md-12">
                    <div className="image">
                        <img src={Banner} alt="" />
                        <div className="text">
  <h2>Fresh & Healthy Fruits</h2>
<h3>Organic Vegetables Collection</h3>
<h4>100% Natural and Organic Products</h4>
<p>Free pickup and delivery available</p>
      <Button variant="success w-50">Shop Now</Button>
</div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default Poster
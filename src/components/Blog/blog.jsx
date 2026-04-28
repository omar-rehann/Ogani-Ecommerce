import "./blog.css"
import Card from 'react-bootstrap/Card';
import blogone from "../../img/blog-1.jpg"
import blogtwo from "../../img/blog-2.jpg"
import blogthree from "../../img/blog-3.jpg"
import blogfour from "../../img/blog-4.jpg"
import blogfive from "../../img/blog-6.jpg"



function Blog(){
    return(
        <>
        <div className="blog">
            <div className="continer m-3">
                <h4>From The Blog</h4>
            </div>
            <div className="content">
                <div className="row m-3 g-2">
                   <div className="col-md-4">
  <Card style={{ width: '100%' }}> 
    <Card.Img variant="top" src={blogone} />
    <Card.Body>
                              <span> <i className="fa-solid fa-calendar me-2"></i>May 4,2019</span>


      <Card.Title>Fresh Vegetables for a Healthy Lifestyle</Card.Title>
      <Card.Text>
        Discover the benefits of fresh organic vegetables and how they help
        maintain a healthy and balanced lifestyle every day.
      </Card.Text>
    </Card.Body>
  </Card>
</div>

<div className="col-md-4">
  <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src={blogtwo} />
    <Card.Body>
     <span> <i className="fa-solid fa-calendar me-2"></i>April 2,2019</span>

      <Card.Title>Top Organic Fruits You Should Try</Card.Title>
      <Card.Text>
        Explore our selection of naturally grown fruits packed with vitamins,
        freshness, and delicious taste for your family.
      </Card.Text>
    </Card.Body>
  </Card>
</div>

<div className="col-md-4">
  <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src={blogthree} />
    <Card.Body>
            <span> <i className="fa-solid fa-calendar me-2"></i>Sept 4,2015</span>

      <Card.Title>Why Choose 100% Organic Products</Card.Title>
      <Card.Text>
        Learn why organic products are the best choice for better nutrition,
        improved health, and eco-friendly living.
      </Card.Text>
    </Card.Body>
  </Card>
</div>
<div className="col-md-4">
    
  <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src={blogfour} />
    
    <Card.Body>
            <span> <i className="fa-solid fa-calendar me-2"></i>Agu 4,2012</span>

      <Card.Title>Daily Fresh Fruits Delivered to Your Door</Card.Title>
      <Card.Text>
        Enjoy premium quality fresh fruits delivered daily with natural taste,
        rich nutrients, and guaranteed freshness for every meal.
      </Card.Text>
    </Card.Body>
  </Card>
</div>

<div className="col-md-4">
  <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src={blogfive} />
    <Card.Body>
      <Card.Title>Best Farm Products for Your Family</Card.Title>
      <Card.Text>
        Choose from our carefully selected farm products to provide healthy,
        natural, and delicious food options for your family every day.
      </Card.Text>
    </Card.Body>
  </Card>
</div>
                </div>

            </div>
        </div>
        </>
    )
}
export default Blog
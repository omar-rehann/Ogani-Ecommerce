import "./blogpage.css"
import Newone from "../../img/n1.jpg"
import Newtwo from "../../img/n2.jpg"
import Newthree from "../../img/n3.jpg"
import Card from 'react-bootstrap/Card';

import blogone from "../../img/blog-1.jpg"
import blogtwo from "../../img/blog-2.jpg"
import blogthree from "../../img/blog-3.jpg"
import blogfour from "../../img/blog-4.jpg"
import blogfive from "../../img/blog-6.jpg"

function Blogpage(){
    return(
        <>
        <div className="blogpage">
            <div className="poster">
              <div className="text">
              <h4>Blog</h4>
<h5>Home / Blog</h5>

              </div>
            </div>
            <div className="content">
                <div className="row ">
                    <div className="col-md-4">
                      <div className="sidebar">
  {/* Search Input */}
  <div className="search-box">
    <input type="search" placeholder="Search Item" />
  </div>

  {/* Categories */}
  <div className="categories">
    <div className="section-title">
      <h4>Categories</h4>
    </div>
    <div className="category-list">
      <h6>All</h6>
      <h6>Beauty (20)</h6>
      <h6>Travel (10)</h6>
      <h6>Life Style (9)</h6>
      <h6>Food (5)</h6>
    </div>
  </div>

  {/* Recent News / Posts */}
  <div className="recent-news">
    <div className="section-title">
      <h4>Recent News</h4>
    </div>
    <div className="news-list">
      <div className="news-item">
        <div className="news-image">
          <img src={Newone} alt="news" />
        </div>
        <div className="news-text">
          <h6>09 Kids Of Vegtables protect the liver</h6>
        </div>
      </div>

      <div className="news-item">
        <div className="news-image">
          <img src={Newtwo} alt="news" />
        </div>
        <div className="news-text">
          <h6>Tips You To Blanace Nutration Meal Day</h6>
        </div>
      </div>

      <div className="news-item">
        <div className="news-image">
          <img src={Newthree} alt="news" />
        </div>
        <div className="news-text">
          <h6>4 Principles Help You Use Weight With Vegtables</h6>
        </div>
      </div>
    </div>
  </div>

  {/* Search By Tags */}
  <div className="tags-section">
    <div className="section-title">
      <h4>Search By</h4>
    </div>
    <div className="tags">
      <h4>Apple</h4>
      <h4>Beauty</h4>
      <h4>Fruit</h4>
      <h4>LifeStyle</h4>
      <h4>Healthy Food</h4>
    </div>
  </div>
</div>

                    </div>
                    <div className="col-md-8">
                        <div className="row">
                                            <div className="col-md-6">
  <Card style={{ width: '100%' ,margin: "10px 0"}}> 
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
<div className="col-md-6">
      <Card style={{ width: '100%' ,margin: "10px 0" }}>
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
<div className="col-md-6">
      <Card style={{ width: '100%' ,margin: "10px 0"}}>
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
<div className="col-md-6">
     <Card style={{ width: '100%' ,margin: "10px 0"}}>
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
                        </div>

                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default  Blogpage
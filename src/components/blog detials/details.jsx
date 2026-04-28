import "./details.css"
import Card from 'react-bootstrap/Card';
import Newone from "../../img/n1.jpg"
import Newtwo from "../../img/n2.jpg"
import Newthree from "../../img/n3.jpg"
import Grappes from "../../img/grappes.jpg"
import Personone from "../../img/avatar-01.png"
import Persontwo from "../../img/avatar-02.png"
import Personthree from "../../img/avatar-03.png"
import Personfour from "../../img/avatar-04.png"
import Personfive from "../../img/avatar-05.png"
import personesix from "../../img/avatar-06.png"
import Blog from "../Blog/blog"


function BlogDetials(){
    return(
        <>
        <div className="blogdetials">
            <div className="poster">
  <div className="poster-overlay"></div>
  
  <div className="text">
    <h5>The Moments You Need Remove Garlic From The Menu</h5>
    <h6>
      By Michel Scofied | January 14, 2019 | 8 Comments
    </h6>
  </div>
</div>
<div className="content">
     <div className="row">
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
        <h6>Health (15)</h6>
        <h6>Recipes (28)</h6>
        <h6>Nutrition (12)</h6>
      </div>
    </div>

    {/* Recent News / Posts - زدت واحدة إضافية */}
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
            <h6>09 Kids Of Vegetables Protect The Liver</h6>
          </div>
        </div>

        <div className="news-item">
          <div className="news-image">
            <img src={Newtwo} alt="news" />
          </div>
          <div className="news-text">
            <h6>Tips To Balance Your Nutrition Every Meal</h6>
          </div>
        </div>

        <div className="news-item">
          <div className="news-image">
            <img src={Newthree} alt="news" />
          </div>
          <div className="news-text">
            <h6>4 Principles To Lose Weight With Vegetables</h6>
          </div>
        </div>

     
      </div>
    </div>

    {/* Popular Tags */}
    <div className="tags-section">
      <div className="section-title">
        <h4>Popular Tags</h4>
      </div>
      <div className="tags">
        <h4>Apple</h4>
        <h4>Beauty</h4>
        <h4>Fruit</h4>
        <h4>LifeStyle</h4>
        <h4>Healthy Food</h4>
        <h4>Vegetables</h4>
        <h4>Weight Loss</h4>
        <h4>Organic</h4>
        <h4>Superfood</h4>
        <h4>Diet</h4>
      </div>
    </div>

    {/* New Section: Newsletter Subscription */}
    <div className="newsletter">
      <div className="section-title">
        <h4>Subscribe Newsletter</h4>
      </div>
      <p>Get the latest recipes and health tips directly to your inbox.</p>
      <div className="subscribe-form">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>

    {/* Author / About Section */}
    <div className="author-card">
      <div className="author">
        <div className="author-image">
          <img src={Personone} alt="Author" />
        </div>
        <div className="author-info">
          <h5>Written by Michel Scofield</h5>
          <p>Food blogger &amp; Nutrition enthusiast. Sharing healthy recipes and wellness tips since 2018.</p>
          
          <div className="social-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-solid fa-envelope"></i>
          </div>
        </div>
      </div>
      <div className="author">
        <div className="author-image">
          <img src={Personfive} alt="Author" />
        </div>
        <div className="author-info">
          <h5>Written by Omar Rehan</h5>
          <p>Food blogger &amp; Nutrition enthusiast. Sharing healthy recipes and wellness tips since 2018.</p>
          
          <div className="social-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-solid fa-envelope"></i>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
                    <div className="col-md-8">
                        <div className="image">
                            <img src={Grappes} alt="" />
                        </div>
                        <div className="text">
                            <p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.

</p>
                        </div>
                        <div className="title">
                            <h4>The corner window forms a place within a place that is a resting point within the large space.
</h4>
                        </div>
                        <div className="texttwo">
                            <p>The study area is located at the back with a view of the vast nature. Together with the other buildings, a congruent story has been managed in which the whole has a reinforcing effect on the components. The use of materials seeks connection to the main house, the adjacent stables

</p>
                        </div>
                       <div className="author-card">
  <div className="author">
    <div className="author-image">
      <img src={Personone} alt="Author" />
    </div>
    
    <div className="author-info">
      <h5>Categories: Food</h5>
      
      <h6 className="tags">
        Tags: All, Trending, Cookies, Food, Healthy, Life, Style
      </h6>
      
      <div className="social-icons">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-google"></i>
        <i className="fa-solid fa-envelope"></i>
      </div>
    </div>
  </div>
   <div className="author">
    <div className="author-image">
      <img src={Persontwo} alt="Author" />
    </div>
    
    <div className="author-info">
      <h5>Categories: Food Haelthy</h5>
      
      <h6 className="tags">
        Tags: All, Trending, Cookies, Food, Healthy, Life, Style
      </h6>
      
      <div className="social-icons">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-google"></i>
        <i className="fa-solid fa-envelope"></i>
      </div>
    </div>
  </div>
  <div className="author">
    <div className="author-image">
      <img src={Persontwo} alt="Author" />
    </div>
    
    <div className="author-info">
      <h5>Categories: Fasty Food </h5>
      
      <h6 className="tags">
        Tags: All, Trending, Cookies, Food, Healthy, Life, Style
      </h6>
      
      <div className="social-icons">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-google"></i>
        <i className="fa-solid fa-envelope"></i>
      </div>
    </div>
  </div>
    <div className="author">
    <div className="author-image">
      <img src={Persontwo} alt="Author" />
    </div>
    
    <div className="author-info">
      <h5>Categories: Tredning Food </h5>
      
      <h6 className="tags">
        Tags: All, Trending, Cookies, Food, Healthy, Life, Style
      </h6>
      
      <div className="social-icons">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-google"></i>
        <i className="fa-solid fa-envelope"></i>
      </div>
    </div>
  </div>
  <div className="author">
    <div className="author-image">
      <img src={Persontwo} alt="Author" />
    </div>
    
    <div className="author-info">
      <h5>Categories: Orddering Food </h5>
      
      <h6 className="tags">
        Tags: All, Trending, Cookies, Food, Healthy, Life, Style
      </h6>
      
      <div className="social-icons">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-google"></i>
        <i className="fa-solid fa-envelope"></i>
      </div>
    </div>
  </div>
</div>
                    </div>
                  
                </div>
</div>
<div className="blog">
<Blog/>
</div>


        </div>
        </>
    )
}
export default BlogDetials
import './hotels.css';

const HotelPage = () => {
  return (
    <div className="hotel-page">
      <div className="sidebar">
        <div className="filter-section">
          <h3>Search By Property Name</h3>
          <div className="search-input">
            <input type="text" placeholder="Enter property name" />
            <button>Search</button>
          </div>
        </div>
        <div className="filter-section">
          <h3>Filter By</h3>
          <select>
            <option value="">All</option>
            <option value="all-inclusive">All Inclusive</option>
            <option value="hotel-resort">Hotel Resort</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>
        <div className="filter-section">
          <h3>Total Price</h3>
          <input type="range" min="0" max="2000" step="100" />
        </div>
        <div className="filter-section">
          <h3>Guest Rating</h3>
          <div className="rating-options">
            <label>
              <input type="radio" name="guest-rating" value="bad" />
              Bad
            </label>
            <label>
              <input type="radio" name="guest-rating" value="good" />
              Good
            </label>
            <label>
              <input type="radio" name="guest-rating" value="very-good" />
              Very Good
            </label>
            <label>
              <input type="radio" name="guest-rating" value="wonderful" />
              Wonderful
            </label>
          </div>
        </div>
        <div className="filter-section">
          <h3>Payment Type</h3>
          <select>
            <option value="">Any</option>
            <option value="fully-refundable">Fully Refundable</option>
            <option value="reserve-now">Reserve Now</option>
            <option value="pay-later">Pay Later</option>
          </select>
        </div>
        <div className="filter-section">
          <h3>Property Type</h3>
          <select>
            <option value="">Any</option>
            <option value="hotel-resort">Hotel Resort</option>
            <option value="apartment">Apartment</option>
            <option value="house-boat">House Boat</option>
          </select>
        </div>
        <div className="filter-section">
          <h3>Cities</h3>
          <select>
            <option value="">Any</option>
            <option value="hamburg">Hamburg</option>
            <option value="munchen">Munchen</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>
        <div className="filter-section">
          <h3>Meal Plans Available</h3>
          <div className="meal-options">
            <label>
              <input type="checkbox" value="breakfast-included" />
              Breakfast Included
            </label>
            <label>
              <input type="checkbox" value="lunch-included" />
              Lunch Included
            </label>
            <label>
              <input type="checkbox" value="dinner-included" />
              Dinner Included
            </label>
            <label>
              <input type="checkbox" value="all-inclusive" />
              All Inclusive
            </label>
          </div>
        </div>
        <div className="filter-section">
          <h3>Amenities</h3>
          <div className="amenities-options">
            <label>
              <input type="checkbox" value="sea-view" />
              Sea View
            </label>
            <label>
              <input type="checkbox" value="pool" />
              Pool
            </label>
            <label>
              <input type="checkbox" value="pet-friendly" />
              Pet-Friendly
            </label>
          </div>
        </div>
      </div>
      <div className="content">
        <h2 className='types'>Hotel Types</h2>
        <div className="hotel-types">
          <div className="hotel-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5RizA8tI3h30rnEXK8Yy8MidyMccy_Y8vng&usqp=CAU" alt="" className="hotel-image" />
            <div className="hotel-info">
              <h3>Luxury Resort</h3>
              <p>Price Range: $300 - $800 per night</p>
              <p>Rating: 4.8/5</p>
            </div>
          </div>
          <div className="hotel-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBtSX8xGTK8lpCVcq5uHhq4qNZkg5iet45zh5lN08azz6dP_r4GsrFcdBp4qhuM86KCs&usqp=CAU" alt="" className="hotel-image" />
            <div className="hotel-info">
              <h3>Budget Hotel</h3>
              <p>Price Range: $200 - $500 per night</p>
              <p>Rating: 4.6/5</p>
            </div>
          </div>
          <div className="hotel-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLz9cjmpidHS6O4vC1JnXchw9qlTr8qqmGQ&usqp=CAU" alt="" className="hotel-image" />
            <div className="hotel-info">
              <h3>Luxury Resort</h3>
              <p>Price Range: $250 - $600 per night</p>
              <p>Rating: 4.7/5</p>
            </div>
          </div>
          <div className="hotel-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tiXbxhuOUwEC5Fw36TPm02aEeey4FYm9uQ&usqp=CAU" alt="" className="hotel-image" />
            <div className="hotel-info">
              <h3>Mountain Lodge</h3>
              <p>Price Range: $180 - $400 per night</p>
              <p>Rating: 4.3/5</p>
            </div>
          </div>
          <div className="hotel-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzgjOaA_krhDRY61S2o_WblaUC0NN4w1aEHg&usqp=CAU" alt="" className="hotel-image" />
            <div className="hotel-info">
              <h3>Business Hotel</h3>
              <p>Price Range: $180 - $400 per night</p>
              <p>Rating: 4.3/5</p>
            </div>
          </div>
          <div className="hotel-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_RVyEYvuBmJX8WO5ZdMZpRJJbSqxolzkt-w&usqp=CAU" alt="" className="hotel-image" />
            <div className="hotel-info">
              <h3>Historic Hotel</h3>
              <p>Price Range: $200 - $500 per night</p>
              <p>Rating: 4.6/5</p>
            </div>
          </div>
          <div className="hotel-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSkWN1mc9QBBgE4-PYeKVhXJqv_-ueSNQVw&usqp=CAU" alt="" className="hotel-image" />
            <div className="hotel-info">
              <h3>Family-friendly Hotel</h3>
              <p>Price Range: $150 - $350 per night</p>
              <p>Rating: 4.4/5</p>
            </div>
          </div>
          <div className="hotel-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8H5NV-SBf2_zCZRHWXLq_QsA9LY-Rsj0QYQ&usqp=CAU" alt="" className="hotel-image" />
            <div className="hotel-info">
              <h3>Ski Resort</h3>
              <p>Price Range: $250 - $600 per night</p>
              <p>Rating: 4.7/5</p>
            </div>
          </div>
          <div className="hotel-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGE968cQW2ERLQ4Ib9FkjygbpQx4ZSMlh4Iw&usqp=CAU" alt="" className="hotel-image" />
            <div className="hotel-info">
              <h3>Urban Hotel</h3>
              <p>Price Range: $180 - $400 per night</p>
              <p>Rating: 4.3/5</p>
            </div>
          </div>
          <div className="hotel-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquURlmiC5l1X8cS4WwAXRLJ4-LKSa6egklg&usqp=CAU" alt="" className="hotel-image" />
            <div className="hotel-info">
              <h3>Resort & Spa</h3>
              <p>Price Range: $300 - $800 per night</p>
              <p>Rating: 4.8/5</p>
            </div>
          </div>
          <div className="hotel-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST79HdQY4VhnkUeIB5S9IWSePoEBt2lgC7tg&usqp=CAU" alt="" className="hotel-image" />
            <div className="hotel-info">
              <h3>Budget Hotel</h3>
              <p>Price: $100 per night</p>
              <p>Rating: 4.6/5</p>
            </div>
          </div>
          <div className="hotel-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7n70-Api_9ZQ_gqB0X_4wldthKIgngvI3Sg&usqp=CAU" alt="" className="hotel-image" />
            <div className="hotel-info">
              <h3>Budget Hotel</h3>
              <p>Price Range: $78 per night</p>
              <p>Rating: 4.2/5</p>
            </div>

            <div className="pagination">
           <button>1</button>
           <button>2</button>
           <button>3</button>
           <button>4</button>
           <button>5</button>
           <button>&gt;</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;





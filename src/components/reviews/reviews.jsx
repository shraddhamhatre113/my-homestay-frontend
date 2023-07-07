import "./reviews.css";

const Reviews = (props) => {


  return (
    <div id="reviews" class="review-section">
      <div class="mb-4 d-flex align-items-center">
        <h4 class="m-0">Reviews </h4>
        <span className="ml-3 d-flex align-items-center fs-4">
          {" "}
          {props.reviewScore.review_scores_rating}<i className="fa fa-star ml-1"></i>
        </span>
      </div>

      <ul class="stars-counters row">
     
      <li class="col-6 d-flex align-items-center ">
          <span className="col-6"><strong>Accuracy</strong></span>

          <div class="progress-bar-container col-6">
            <div class="fit-progressbar fit-progressbar-bar star-progress-bar">
              <div class="fit-progressbar-background">
                <span
                  class="progress-fill"
                  style={{ width: props.reviewScore.review_scores_accuracy*10 + "%" }}
                ></span>
              </div>
            </div>
          </div>
        </li>
         <li class="col-6 d-flex align-items-center mt-3">
          <span className="col-6"><strong>Cleanliness</strong></span>

          <div class="progress-bar-container">
            <div class="fit-progressbar fit-progressbar-bar star-progress-bar">
              <div class="fit-progressbar-background">
                <span
                  class="progress-fill"
                  style={{ width: props.reviewScore.review_scores_cleanliness*10 + "%" }}
                ></span>
              </div>
            </div>
          </div>
        </li>
        <li class="col-6 d-flex align-items-center">
          <span className="col-6"><strong>Communication</strong></span>

          <div class="progress-bar-container">
            <div class="fit-progressbar fit-progressbar-bar star-progress-bar">
              <div class="fit-progressbar-background">
                <span
                  class="progress-fill"
                  style={{ width: props.reviewScore.review_scores_communication*10 + "%" }}
                ></span>
              </div>
            </div>
          </div>
        </li>
        <li class="col-6 d-flex align-items-center mt-3">
          <span className="col-6"><strong>Checkin</strong></span>

          <div class="progress-bar-container">
            <div class="fit-progressbar fit-progressbar-bar star-progress-bar">
              <div class="fit-progressbar-background">
                <span
                  class="progress-fill"
                  style={{ width: props.reviewScore.review_scores_checkin*10+ "%" }}
                ></span>
              </div>
            </div>
          </div>
        </li>
        <li class="col-6 d-flex align-items-center mt-3">
          <span className="col-6"><strong>Location</strong></span>

          <div class="progress-bar-container">
            <div class="fit-progressbar fit-progressbar-bar star-progress-bar">
              <div class="fit-progressbar-background">
                <span
                  class="progress-fill"
                  style={{ width: props.reviewScore.review_scores_location*10 + "%" }}
                ></span>
              </div>
            </div>
          </div>
        </li>
        <li class="col-6 d-flex align-items-center mt-3">
          <span className="col-6"><strong>Value to money</strong></span>

          <div class="progress-bar-container">
            <div class="fit-progressbar fit-progressbar-bar star-progress-bar">
              <div class="fit-progressbar-background">
                <span
                  class="progress-fill"
                  style={{ width: props.reviewScore.review_scores_value*10 + "%" }}
                ></span>
              </div>
            </div>
          </div>
        </li> 
      </ul>

      <div class="row g-2">
        <div class="row testimonial-three testimonial-three--col-three mt-5">
          {props.reviews && props.reviews.map((review)=> (
 <div class="col-md-6 testimonial-three-col">
 <div class="testimonial-inner">
   <div class="testimonial-image" itemprop="image">
     <img
       width="180"
       height="180"
       src={review.reviewer.image ? `data:image/jpg;base64,${review.reviewer.image.picture_url}` : noimage}
     />
   </div>
   <div class="testimonial-meta">
     <strong class="testimonial-name" itemprop="name">
       {review.reviewer.first_name}
     </strong>
     <span class="testimonial-job-title" itemprop="jobTitle">
       {review.reviewer.address.city},
     </span>&nbsp;
     <span class="testimonial-link" href="#">
       {review.reviewer.address.country}
     </span>
   </div>
   <div class="testimonial-content">
     <p>
      {review.comments}
     </p>
   </div>
 </div>
</div>
         ) )}
         
          {/* <div class="col-md-6 testimonial-three-col">
            <div class="testimonial-inner">
              <div class="testimonial-image" itemprop="image">
                <img
                  width="180"
                  height="180"
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                />
              </div>
              <div class="testimonial-meta">
                <strong class="testimonial-name" itemprop="name">
                  Anna Vandana
                </strong>
                <span class="testimonial-job-title" itemprop="jobTitle">
                  CEO
                </span>{" "}
                –{" "}
                <a class="testimonial-link" href="#">
                  Media Wiki
                </a>
              </div>
            </div>
            <div class="testimonial-content">
              <p>
                Nulla consequat massa quis enim. Donec pede justo, fringilla
                vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                pede mollis pretium.
              </p>
            </div>
          </div>*/}
        </div> 
      </div>
    </div>
  );
};

export default Reviews;

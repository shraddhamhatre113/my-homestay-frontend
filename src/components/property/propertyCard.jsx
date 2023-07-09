import "./propertyCard.css";
import noPropertyImage from "../../images/no-property-photo.jpg";
const PropertyCard = ({ property }) => {
  return (
    <div className="col-4 p-2">
      <div class="card h-100">
        <div class="image-container">
          <div class="first">
            <div class="d-flex justify-content-between align-items-center">
              <span class="discount">
                {property.security_deposit ? "" : "No Deposite"}
              </span>
              <span class="wishlist">
                <i class="fa fa-heart-o"></i>
              </span>
            </div>
          </div>

          <img
            src={
              property.images[0].picture_url == null ||
              property.images[0].picture_url == ""
                ? noPropertyImage
                : property.images[0].picture_url
            }
            class="img-fluid rounded thumbnail-image card-img-top"
          />
        </div>
       
          <div class="product-detail-container p-2 card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="dress-name">{property.property_type}</h5>
            </div>

            <div class="d-flex justify-content-between align-items-center pt-1">
              <div class="d-flex flex-column">
                <span>{property.name}</span>
                <span
                  className="fw-lighter text-muted"
                  style={{ fontSize: "small" }}
                >
                  {property.beds[0].total_beds} Beds. {property.bedrooms}{" "}
                  Bedrooms.
                </span>
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center pt-1">
              <div>
                <i class="fa fa-star-o rating-star mr-1"></i>
                <span class="rating-number">
                  {property.review_scores.review_scores_rating / 20}
                </span>
              </div>

              <div class="d-flex flex-column mb-2">
                <span class="new-price">€{property.price}</span>
                <small class="old-price text-right"></small>
              </div>
            </div>
            <a href={"/property/"+property._id} class="btn btn-primary stretched-link text-decoration-none">
              </a>
          </div>
          
        
      </div>
    </div>
  );
};
export default PropertyCard;

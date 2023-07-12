import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import "./properties.css";
import { useLocation } from "react-router-dom";
import PropertyCard from "../../components/property/propertyCard";
import PriceRange from "../../components/pricerange/pricerange";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const PropertiesList = () => {
  const [loading, setLoading] = useState(0);
  const [bedCount, setBedCount] = useState(1);
  const [bathCount, setBathCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [propertyType, setPropertyType] = useState({});
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 0,
  });
  const [rating, setRating] = useState(0);
  const [result, setResult] = useState({
    properties: [],
  });
  const city = useQuery().get("city");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:4040/api/properties/search?city=" + city
      );
      // Process the response or update the state with the filtered properties
      setResult(response.data);
      setPriceRange({
        min: response.data.minPrice,
        max: response.data.maxPrice,
      });
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const increment = function (e) {
    if (e.target.name === "bedCount") {
      setBedCount(bedCount + 1);
    } else if (e.target.name === "bathCount") {
      setBathCount(bathCount + 1);
    } else if (e.target.name === "bedroomCount") {
      setBedroomCount(bedroomCount + 1);
    }
  };
  const decrement = function (e) {
    if (e.target.name === "bedCount" && bedCount > 1) {
      setBedCount(bedCount - 1);
    } else if (e.target.name === "bathCount" && bathCount > 1) {
      setBathCount(bathCount - 1);
    } else if ((e.target.name === "bedroomCount") & (bedroomCount > 0)) {
      setBedroomCount(bedroomCount - 1);
    }
  };
  const onPropertyChecked = function (e) {
    setPropertyType({
      ...propertyType,
      [e.target.name]: e.target.checked,
    });
  };
  const onPriceChange = (e) => {
    setPriceRange({
      min: e[0],
      max: e[1],
    });
  };
  const onRatingChange = (e) => {
    setRating(e.target.value);
  };
  const updateFilters = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:4040/api/properties/search?city=" +
          city +
          "&beds=" +
          bedCount +
          "&bedrooms=" +
          bedroomCount +
          "&bathrooms=" +
          bathCount +
          "&rating=" +
          rating +
          "&minPrice=" +
          priceRange.min +
          "&maxPrice=" +
          priceRange.max +
          "&propertyType=" +
          Object.keys(propertyType).filter((key) => propertyType[key])
      );
 
      // Process the response or update the state with the filtered properties
      setResult({
        ...result,
        properties: response.data.properties
      });
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="wrapper mt-5">
        <div class="d-md-flex align-items-md-center">
          <h3>{city}</h3>
          <div class="ml-auto d-flex align-items-center views">
            <span class="text-success mr-4">
              <span class="fas fa-th px-md-2 px-1"></span>
              <span>Grid view</span>
            </span>
            <span class="">
              <span class="fas fa-list-ul"></span>
              <span class="px-md-2 px-1">List view</span>
            </span>
            <span class="green-label px-md-2 px-1">{result.total}</span>
            <span class="text-muted">Properties</span>
          </div>
        </div>
        <div class="d-sm-flex align-items-sm-center pt-2 clear">
          <div class="text-muted filter-label">Applied Filters:</div>
          {Object.keys(propertyType)
            .filter((key) => propertyType[key])
            .map((key) => {
              return <span class="badge badge-primary mx-1">{key}</span>;
            })}
          {
            <span class="badge badge-primary mx-1">
              Price: {priceRange.min + "-" + priceRange.max}
            </span>
          }
          {<span class="badge badge-primary mx-1">{rating + "%"}</span>}
          {
            <span class="badge badge-primary mx-1">
              {bathCount + " Bathrooms"}
            </span>
          }
          {<span class="badge badge-primary mx-1">{bedCount + " Beds"}</span>}
          {
            <span class="badge badge-primary mx-1">
              {bedroomCount + " Bedrooms"}
            </span>
          }
        </div>
        <div className="row pt-4">
          <div className="col-2 d-flex flex-column filter-items mx-4">
            <button className="btn btn-primary" onClick={updateFilters}>Update Filters</button>
            <div className="my-4">
              <h6>Popular Filters</h6>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name="Apartment"
                  checked={propertyType.Apartment}
                  onChange={onPropertyChecked}
                />
                <label class="form-check-label" for="exampleCheck1">
                  Apartment
                </label>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name="Hotel"
                  checked={propertyType.Hotel}
                  onChange={onPropertyChecked}
                />
                <label class="form-check-label" for="exampleCheck1">
                  Hotel
                </label>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name="Villa"
                  checked={propertyType.Villa}
                  onChange={onPropertyChecked}
                />
                <label class="form-check-label" for="exampleCheck1">
                  Villa
                </label>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name="Resort"
                  checked={propertyType.Resort}
                  onChange={onPropertyChecked}
                />
                <label class="form-check-label" for="exampleCheck1">
                  Resort
                </label>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name="BNB"
                  checked={propertyType.BNB}
                  onChange={onPropertyChecked}
                />
                <label class="form-check-label" for="exampleCheck1">
                  B&B
                </label>
              </div>
            </div>
            <div className="my-4">
              <h6>Price</h6>
              <PriceRange
                minPrice={result.minPrice}
                maxPrice={result.maxPrice}
                onChange={onPriceChange}
              ></PriceRange>
            </div>
            <div className="my-4">
              <h6>Guest Rating</h6>
              <div class="form-check my-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={rating == 0}
                  value="0"
                  onChange={onRatingChange}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Any
                </label>
              </div>
              <div class="form-check my-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="90"
                  checked={rating == 90}
                  onChange={onRatingChange}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Wonderfull 9+
                </label>
              </div>
              <div class="form-check my-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="80"
                  checked={rating == 80}
                  onChange={onRatingChange}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Very Good 8+
                </label>
              </div>
              <div class="form-check my-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="70"
                  checked={rating == 70}
                  onChange={onRatingChange}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  good 7+
                </label>
              </div>
            </div>
            <div className="my-4">
              <h6>Amenities</h6>

              <div class="d-flex flex-column ">
                <div>
                  <p class="text-dark">Bedrooms</p>
                </div>
                <div class="input-group w-auto align-items-center ">
                  <input
                    name="bedroomCount"
                    type="button"
                    value="-"
                    class="button-minus border rounded-circle  icon-shape icon-sm mx "
                    data-field="quantity"
                    onClick={decrement}
                  />
                  <input
                    type="text"
                    readOnly
                    value={bedroomCount}
                    name="quantity"
                    class="quantity-field border-0 text-center w-25"
                  />
                  <input
                    name="bedroomCount"
                    type="button"
                    value="+"
                    class="button-plus border rounded-circle icon-shape icon-sm "
                    data-field="quantity"
                    onClick={increment}
                  />
                </div>
              </div>

              <div class="d-flex flex-column my-3">
                <div>
                  <p class="text-dark">Bathrooms</p>
                </div>
                <div class="input-group w-auto align-items-center ">
                  <input
                    name="bathCount"
                    type="button"
                    value="-"
                    class="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                    data-field="quantity"
                    onClick={decrement}
                  />
                  <input
                    type="text"
                    readOnly
                    name="quantity"
                    value={bathCount}
                    class="quantity-field border-0 text-center w-25"
                  />
                  <input
                    name="bathCount"
                    type="button"
                    value="+"
                    class="button-plus border rounded-circle icon-shape icon-sm "
                    data-field="quantity"
                    onClick={increment}
                  />
                </div>
              </div>

              <div class="d-flex flex-column">
                <div>
                  <p class="text-dark">Beds</p>
                </div>
                <div class="input-group w-auto  align-items-center">
                  <input
                    name="bedCount"
                    type="button"
                    value="-"
                    class="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                    data-field="quantity"
                    onClick={decrement}
                  />

                  <input
                    type="text"
                    readOnly
                    value={bedCount}
                    name="quantity"
                    class="quantity-field border-0 text-center w-25"
                  />
                  <input
                    name="bedCount"
                    type="button"
                    value="+"
                    class="button-plus border rounded-circle icon-shape icon-sm "
                    data-field="quantity"
                    onClick={increment}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-9 mx-4">
            <div className="row">
              {result.properties.map((property) => (
                <PropertyCard property={property}></PropertyCard>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        class="loader-overlay"
        style={{ display: loading ? "block" : "none" }}
      >
        <div class="popup-spinner">
          <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesList;

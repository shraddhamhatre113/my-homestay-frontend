import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "./hotels.css";
import PropertyCard from "../../components/property/propertyCard";

const HotelPage = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [maxBedrooms, setMaxBedrooms] = useState("");
  const [minBathrooms, setMinBathrooms] = useState("");
  const [maxBathrooms, setMaxBathrooms] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [amenities, setAmenities] = useState("");
  const [propName, setPropName] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4040/api/properties/search?city=Berlin"
      );
      console.log(response);
      // Process the response or update the state with the filtered properties
      setFilteredProperties(response.data.filteredProps);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        "http://localhost:4040/api/properties/search?city=Berlin"
      );
      setFilteredProperties(res.data.filteredProps);
    } catch (error) {
      console.error(error);
    }
  };
  const increment = function (e) {
    console.log(e.target.name);
    if (e.target.name === "adult") {
      setAdultCount(adultCount + 1);
    } else if (e.target.name === "child") {
      setChildCount(childCount + 1);
    } else if (e.target.name === "infant") {
      setInfantCount(infantCount + 1);
    }
  };
  const decrement = function (e) {
    if (e.target.name === "adult" && adultCount > 0) {
      setAdultCount(adultCount - 1);
    } else if (e.target.name === "child" && childCount > 0) {
      setChildCount(childCount - 1);
    } else if (e.target.name === "infant" && infantCount > 0) {
      setInfantCount(infantCount - 1);
    }
  };
  return (
    <div className="container-xxl mt-5">
      <div className="row">
        <div className="col-2 d-flex flex-column filter-items">
          <h2>Filter By</h2>

          <div className="">
            <h6>Popular Filters</h6>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label" for="exampleCheck1">
                Apartment
              </label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label" for="exampleCheck1">
                Hotel
              </label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label" for="exampleCheck1">
                Villa
              </label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label" for="exampleCheck1">
                Hotel-Resort
              </label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label" for="exampleCheck1">
                B&B
              </label>
            </div>
          </div>
          <div className="">
            <h6>Price</h6>
            <RangeSlider></RangeSlider>
          </div>
          <div className="">
            <h6>Guest Rating</h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Any
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Wonderfull 9+
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Very Good 8+
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                good 7+
              </label>
            </div>
          </div>
          <div className="">
            <h6>Amenities</h6>

            <div class="d-flex flex-column ">
              <div>
                <p class="text-dark">Bedrooms</p>
              </div>
              <div class="input-group w-auto align-items-center border rounded d-flex justify-content-between ">
                <input
                  name="adult"
                  type="button"
                  value="-"
                  class="button-minus border rounded-circle  icon-shape icon-sm mx "
                  data-field="quantity"
                />
                <input
                  type="text"
                  readOnly
                  value="bedroom"
                  name="quantity"
                  class="quantity-field border-0 text-center w-25"
                />
                <input
                  name="adult"
                  type="button"
                  value="+"
                  class="button-plus border rounded-circle icon-shape icon-sm "
                  data-field="quantity"
                />
              </div>
            </div>

            <div class="d-flex flex-column p-3">
              <div>
                <p class="text-dark">Bathrooms</p>
              </div>
              <div class="input-group w-auto align-items-center border rounded d-flex justify-content-between">
                <input
                  name="adult"
                  type="button"
                  value="-"
                  class="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                  data-field="quantity"
                />
                <input
                  type="text"
                  readOnly
                  name="quantity"
                  value="bathroom"
                  class="quantity-field border-0 text-center w-25"
                />
                <input
                  name="adult"
                  type="button"
                  value="+"
                  class="button-plus border rounded-circle icon-shape icon-sm "
                  data-field="quantity"
                />
              </div>
            </div>

            <div class="d-flex flex-column">
              <div>
                <p class="text-dark">Beds</p>
              </div>
              <div class="input-group w-auto  align-items-center border rounded d-flex justify-content-between">
                <input
                  name="adult"
                  type="button"
                  value="-"
                  class="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                  data-field="quantity"
                />

                <input
                  type="text"
                  readOnly
                  value="bed"
                  name="quantity"
                  class="quantity-field border-0 text-center w-25"
                />
                <input
                  name="adult"
                  type="button"
                  value="+"
                  class="button-plus border rounded-circle icon-shape icon-sm "
                  data-field="quantity"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-9">
          <div className="row">
            {filteredProperties.map((property) => (
              <PropertyCard property={property}></PropertyCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;

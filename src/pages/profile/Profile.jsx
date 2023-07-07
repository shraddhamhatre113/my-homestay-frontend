import "./Profile.css";
import noimage from "../../images/no-profile-picture-icon.png";
import { updateProfile, useProfileDispatch, useProfileState,uploadPic } from "../../contexts";
import { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";

const Profile = () => {
  const userDetails = useProfileState();
  const [profile, setProfile] = useState({});
  const [message, setMessage] = useState({});
  const [images, setImages] = useState([]);

  const dispatch = useProfileDispatch();

  useEffect(() => {
    setProfile(userDetails.user);
  }, []);

  const updateAddressField = async (e) => {
    const fieldName = e.target.name;
    const field = {};
    field[fieldName] = e.target.value;
    profile.address = {
      ...profile.address,
      ...field,
    };
   
    setProfile({
      ...profile,

    });
  };
  const updateInputField = async (e) => {
    e.preventDefault();
    const fieldName = e.target.name;
    const field = {};
    field[fieldName] = e.target.value;
    setProfile({
      ...profile,
      ...field,
    });
  };
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      let response = await updateProfile(dispatch, profile);
    } catch (error) {
      console.error(error);
    }
  };
  //    const maxNumber = 69;
  const onChange = async (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
    let response = await uploadPic(dispatch,profile._id,imageList[0].file)
    setProfile({
        ...response
    })
  };

  return (
    <div className="container profile-container p-5">
      <div className="row justify-content-between">
        <div className="col col-auto col-md-4 d-grid profile-pic">
          <div className="row">
            <div className="col flex-column justify-content-around align-items-center d-flex">
              <picture className="mb-5 mt-5">
                <img
                  className="rounded-circle"
                  width="200"
                  height="200"
                  src={profile.image ? profile.image.picture_url : noimage}
                />
              </picture>
              <ImageUploading
                value={images}
                onChange={onChange}
                maxNumber={1}
                dataURLKey="data_url"
                multiple= {false}
                acceptType={["jpg", "png"]}
              >
      
                {({ imageList, onImageUpdate }) => (
                  <button
                    className="btn btn-primary"
                    onClick={() => onImageUpdate()}
                    type="button"
                  >
                    Upload Image
                  </button>
                )}

              </ImageUploading>
            </div>
          </div>
          <div className="row"></div>
        </div>
        <div className="col-md-4 col-lg-8">
          <form className="d-grid profile-form">
            <div className="row">
              <div className="col-lg-12 d-lg-flex flex-column justify-content-center d-flex">
                <h4>
                  {profile.first_name} {profile.last_name}
                </h4>
                <h6>Logged In</h6>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="first_name"
                    value={profile.first_name}
                    onChange={updateInputField}
                  ></input>
                </div>
                <div className="form-group">
                  <label className="form-label">Date of Birth</label>
                  <input
                    className="form-control"
                    type="date"
                    name="dob"
                    value={profile.dob}
                    onChange={updateInputField}
                  ></input>
                </div>
                <div className="form-group">
                  <label className="form-label">Street</label>
                  <input
                    className="form-control"
                    type="text"
                    name="street"
                    value={profile.address ? profile.address.street : ""}
                    onChange={updateAddressField}
                  ></input>
                </div>
                <div className="form-group">
                  <label className="form-label">City</label>
                  <input
                    className="form-control"
                    type="text"
                    name="city"
                    value={profile.address ? profile.address.city : ""}
                    onChange={updateAddressField}
                  ></input>
                </div>
                <div className="form-group">
                  <label className="form-label">Interests</label>
                  <textarea
                    className="form-control form-control-lg"
                    name="interest"
                    type="text"
                    value={profile.interest}
                    onChange={updateInputField}
                  ></textarea>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="last_name"
                    value={profile.last_name}
                    onChange={updateInputField}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Gender</label>
                  <select
                    className="form-control form-select"
                    name="gender"
                    value={profile.gender ? profile.gender : ""}
                    onChange={updateInputField}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="">Please select</option>
                  </select>
                </div>
                <div className=" row">
                  <div className="form-group col">
                    <label className="form-label">Number</label>
                    <input
                      className="form-control"
                      type="text"
                      name="street_number"
                      value={
                        profile.address ? profile.address.street_number : ""
                      }
                      onChange={updateAddressField}
                    />
                  </div>
                  <div className="form-group col">
                    <label className="form-label">Postal</label>
                    <input
                      className="form-control"
                      type="text"
                      name="postal_code"
                      value={profile.address ? profile.address.postal_code : ""}
                      onChange={updateAddressField}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Country</label>
                  <select
                    className="form-control form-select"
                    name="country"
                    value={profile.address ? profile.address.country : ""}
                    onChange={updateAddressField}
                  >
                    <option>select country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Aland">Aland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua">Antigua and Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bonaire">Bonaire, Sint Eustatius and Saba</option>
                    <option value="Bosnia">Bosnia and Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British">British Indian Ocean Territory</option>
                    <option value="Brunei">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape">Cape Verde</option>
                    <option value="Cayman">Cayman Islands</option>
                    <option value="Central">Central African Republic</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas">Christmas Island</option>
                    <option value="Cocos">Cocos (Keeling) Islands</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="CD">
                      Congo, Democratic Republic of the Congo
                    </option>
                    <option value="Cook">Cook Islands</option>
                    <option value="Costa">Costa Rica</option>
                    <option value="Cote">Cote D'Ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Curacao">Curacao</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican">Dominican Republic</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El">El Salvador</option>
                    <option value="Equatorial">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland">Falkland Islands (Malvinas)</option>
                    <option value="Faroe">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French">French Guiana</option>
                    <option value="French">French Polynesia</option>
                    <option value="French">French Southern Territories</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="HM">
                      Heard Island and Mcdonald Islands
                    </option>
                    <option value="Holy">Holy See (Vatican City State)</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran, Islamic Republic of</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="KP">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="Korea">Korea, Republic of</option>
                    <option value="Kosovo">Kosovo</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao">Lao People's Democratic Republic</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan">Libyan Arab Jamahiriya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="MK">
                      Macedonia, the Former Yugoslav Republic of
                    </option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia">Micronesia, Federated States of</option>
                    <option value="Moldova">Moldova, Republic of</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands">Netherlands Antilles</option>
                    <option value="New">New Caledonia</option>
                    <option value="New">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk">Norfolk Island</option>
                    <option value="Northern">Northern Mariana Islands</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian">Palestinian Territory, Occupied</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian">Russian Federation</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint">Saint Barthelemy</option>
                    <option value="Saint">Saint Helena</option>
                    <option value="Saint">Saint Kitts and Nevis</option>
                    <option value="Saint">Saint Lucia</option>
                    <option value="Saint">Saint Martin</option>
                    <option value="Saint">Saint Pierre and Miquelon</option>
                    <option value="Saint">Saint Vincent and the Grenadines</option>
                    <option value="Samoa">Samoa</option>
                    <option value="San">San Marino</option>
                    <option value="Sao">Sao Tome and Principe</option>
                    <option value="Saudi">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Serbia">Serbia and Montenegro</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Sint">Sint Maarten</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South">South Africa</option>
                    <option value="GS">
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option value="South">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard">Svalbard and Jan Mayen</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syrian">Syrian Arab Republic</option>
                    <option value="Taiwan">Taiwan, Province of China</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania, United Republic of</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor">Timor-Leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad">Trinidad and Tobago</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks">Turks and Caicos Islands</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United">United Arab Emirates</option>
                    <option value="United">United Kingdom</option>
                    <option value="United">United States</option>
                    <option value="UM">
                      United States Minor Outlying Islands
                    </option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Viet">Viet Nam</option>
                    <option value="Virgin">Virgin Islands, British</option>
                    <option value="Virgin">Virgin Islands, U.s.</option>
                    <option value="Wallis">Wallis and Futuna</option>
                    <option value="Western">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Hobbies</label>
                  <textarea
                    className="form-control form-control-lg"
                    type="text"
                    name="hobbies"
                    value={profile.hobbies}
                    onChange={updateInputField}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <h4>Bank Details</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label className="form-label">IBAN</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Bank Name</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label className="form-label">BIC</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" type="text">
                        Account holder name
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col justify-content-end align-items-end d-flex"></div>
        <div className="col align-items-end d-flex">
          <button
            className="btn btn-primary"
            type="button"
            style={{ width: 100 + "%", marginRight: 5 + "px" }}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            type="button"
            style={{ width: 100 + "%" }}
            onClick={handleProfileUpdate}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

const ROOT_URL = "http://localhost:4040/api";
import axios from "axios";

export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(loginPayload),
    url: `${ROOT_URL}/signin`,
  };

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await axios(requestOptions)

    if (response.data.user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      
    }

    dispatch({ type: "LOGIN_ERROR", error: response.data });
    console.log(response)
    
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error.response });
    console.log(error.response);
  }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}

export async function updateProfile(dispatch, profilePayload) {
  console.log(profilePayload);
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(profilePayload),
    url: `${ROOT_URL}/profiles/${profilePayload._id}`,
  };
  // dispatch({
  //   type: "UPDATE_PROFILE",
  // });
  let response = await axios(requestOptions);
  if (response.data.user) {
    dispatch({ type: "PROFILE_UPDATE_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    return response.data;
  }

  dispatch({ type: "PROFILE_UPDATE_ERROR", error: response.data.errors[0] });
  console.log(data.errors[0]);
  return;
}

export async function uploadPic(dispatch, user_id, picturePayload) {
  const formData = new FormData();
  formData.append("profileImage", picturePayload);
  const requestOptions = {
    method: "POST",
    data: formData,
    url: `${ROOT_URL}/profiles/${user_id}/upload`,
  };
  try {
    const response = await axios(requestOptions);
    dispatch({
      type: "UPLOAD_PIC",
      payload: response.data,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export async function propertyView(dispatch, property_id) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    url: `${ROOT_URL}/properties/${property_id}`,
  };

  let response = await axios(requestOptions);

  if (response.data) {
    dispatch({ type: "PROPERTY_VIEW", payload: response.data });
    return response.data;
  }

  return;
}
export async function addReview(dispatch, property_id) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    url: `${ROOT_URL}/properties/${property_id}`,
  };

  let response = await axios(requestOptions);
  if (response.data) {
    dispatch({ type: "ADD_REVIEW", payload: response.data });
    return response.data;
  }

  return;
}
export async function addBooking (dispatch, bookingRequest){
  dispatch({ type: "BOOKING", payload: bookingRequest });
}


export async function requestBooking (dispatch, bookingRequest){
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: bookingRequest,
    url: `${ROOT_URL}/booking`,
  };

  let response = await axios(requestOptions);
  if (response.data) {
    dispatch({ type: "BOOKING_COMPLETED", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data.guest));
    return response.data;
  }
}

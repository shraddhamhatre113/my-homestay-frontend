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
    let response = await axios(requestOptions);

    if (response.data.user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      return response.data;
    }

    dispatch({ type: "LOGIN_ERROR", error: response.data.errors[0] });
    console.log(response.data.errors[0]);
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
    console.log(error);
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

export async function 
uploadPic(dispatch, user_id, picturePayload) {
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

import React, { useState, useReducer } from "react";

let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).auth_token
  : "";

export const initialState = {
  user: "" || user,
  loading: false,
  errorMessage: null,
  authenticated: false,
  updateObject: "",
  property: {
    address: {
      location: {
        coordinates: {},
      },
    },
    review_scores: {},
    amenities: [],
    images: [],
  },
  booking: {
    property: {},
    host_id: "",
    start_date: "",
    end_date: "",
    adults: 0,
    child: 0,
    infant: 0,
  },
};

export const ProfileReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        loading: false,
        authenticated: true,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
        authenticated: false,
      };

    case "LOGIN_ERROR":
      console.log(action.error);
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error.data,
      };
    case "UPDATE_PROFILE":
      return {
        ...initialState,
        loading: true,
      };
    case "PROFILE_UPDATE_SUCCESS":
      return {
        ...initialState,
        loading: false,
        user: action.payload.user,
      };

    case "PROFILE_UPDATE_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    case "UPLOAD_PIC":
      return {
        ...initialState,
        loading: false,
        user: action.payload,
      };
    case "PROPERTY_VIEW":
      console.log(action.payload);
      return {
        ...initialState,
        loading: false,
        property: action.payload,
      };
      case "BOOKING":
        return{
            ...initialState,
            loading: false,
            booking: action.payload,
        }
    case 'BOOKING_STARTED':
        return{
            ...initialState,
            loading: true
        }
    case 'BOOKING_COMPLETED':
        return {
            ...initialState,
            loading:false,
            booking:initialState.booking,
            user: action.payload.guest
        }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

import React, { useState, useReducer } from 'react';

let user = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).user
    : '';
let token = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).auth_token
    : '';

export const initialState = {
    user: '' || user,
    token: '' || token,
    loading: false,
    errorMessage: null,
    updateObject:'',
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            return {
                ...initialState,
                loading: true,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...initialState,
                user: action.payload.user,
                token: action.payload.auth_token,
                loading: false,
            };
        case 'LOGOUT':
            return {
                ...initialState,
                user: '',
                token: '',
            };

        case 'LOGIN_ERROR':
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error,
            };
        case 'UPDATE_PROFILE':
            return {
                ...initialState,
                loading: true,
            };
        case 'PROFILE_UPDATE_SUCCESS':
            return {
                ...initialState,
                loading: false,
                user: action.payload.user,
            };

        case 'PROFILE_UPDATE_ERROR':
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error,
            };

        case 'UPLOAD_PIC':
            console.log(action.payload)
            return {
                ...initialState,
                loading: false,
                user:action.payload
                
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};
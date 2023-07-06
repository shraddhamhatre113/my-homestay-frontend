import React, { useState, useReducer } from 'react';

let user = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).user
    : '';
let token = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).auth_token
    : '';
    let property= localStorage.getItem('property')
    ?JSON.parse(localStorage.getItem('property')): '';

export const initialState = {
    user: '' || user,
    loading: false,
    errorMessage: null,
    updateObject:'',
    property:'' || property,
};

export const ProfileReducer = (initialState, action) => {
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
            return {
                ...initialState,
                loading: false,
                user:action.payload
                
            };
            case 'PROPERTY_VIEW':
                console.log(action.payload)
                return {
                    ...initialState,
                    loading: false,
                    property:action.payload
                    
                };
    
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};
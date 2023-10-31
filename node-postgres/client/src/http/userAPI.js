import React, {useState} from "react";
import {getMerchant} from "../App.js";
import {guestInstance, authInstance } from "./index";
import jwtDecode from 'jwt-decode'


export const loginmodal = async (email, password) => {
    try {
        const response = await guestInstance.post('user/loginmodal', {email, password})
        console.log('response = ', response)
            .then(function (response) {
                console.log('response = ', response)
            })

        // const token = response.data.token
        // const user = jwtDecode(token)
        // localStorage.setItem('token', token)
        // return user
    } catch (e) {
        alert(e.response.data.message)
        console.log('из компонента юзерапи', e.response.data.message)
        return false
    }
}

export const logout = () => {
    localStorage.removeItem('token')
}

export const check = async () => {
    let userToken, userData
    try {
        userToken = localStorage.getItem('token')
        // если в хранилище нет действительного токена
        if (!userToken) {
            return false
        }
        // токен есть, надо проверить его подлинность
        const response = await authInstance.get('user/check')
        userToken = response.data.token
        userData = jwtDecode(userToken)
        localStorage.setItem('token', userToken)
        return userData
    } catch (e) {
        localStorage.removeItem('token')
        return false
    }
}



// export function getMerchant() {
//     fetch('http://localhost:3001')
//         .then(response => {
//             return response.text();
//         })
//         .then(data => {
//             setMerchants(data);
//         });
// }

// export function createMerchant() {
//     let name = prompt('Enter merchant name');
//     let email = prompt('Enter merchant email');
//     fetch('http://localhost:3001/merchants', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({name, email}),
//     })
//         .then(response => {
//             return response.text();
//         })
//         .then(data => {
//             alert(data);
//             getMerchant();
//         });
// }
// export function deleteMerchant() {
//     let id = prompt('Enter merchant id');
//     fetch(`http://localhost:3001/merchants/${id}`, {
//         method: 'DELETE',
//     })
//         .then(response => {
//             return response.text();
//         })
//         .then(data => {
//             alert(data);
//             getMerchant();
//         })
//     // .catch(err => console.log(err));
// }
//
// export function updateMerchant() {
//     let index = prompt('Enter merchant index');
//     let name = prompt('Enter merchant name');
//     let email = prompt('Enter merchant email');
//     fetch(`http://localhost:3001/merchants/${index}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({index, name, email}),
//     })
//         .then(response => {
//             return response.text();
//         })
//         .then(data => {
//             alert(data);
//             getMerchant();
//         })
// }
import React, {useState} from "react";
import {getMerchant} from "../App.js";



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
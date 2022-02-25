import React from "react";
// import $ from 'jquery';
import click from "./game"
// in a module
$('#item'); // <= works
jQuery('#item'); // <= also works
// $ is automatically set to the exports of module "jquery"
// global.jQuery = $;
// global.$ = $;

// import loader from './loader';



const button = document.getElementById('button')
button.addEventListener('click', function () {
    click()
})





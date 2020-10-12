// import _ from 'lodash'

// import './style.css'
// import Icon from './icon.png'
// import Data from './data.xml'
// import toml from './data.toml';
// import yaml from './data.yaml';
// import json from './data.json5';

// console.log(toml.title); // output `TOML Example`
// console.log(toml.owner.name); // output `Tom Preston-Werner`

// console.log(yaml.title); // output `YAML Example`
// console.log(yaml.owner.name); // output `Tom Preston-Werner`

// console.log(json.title); // output `JSON5 Example`
// console.log(json.owner.name); // output `Tom Preston-Werner`
// import printMe from './print.js'

// function component() {
   function getComponent() {
    // const element = document.createElement('div')
    // const btn = document.createElement('button');

     // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    
    // element.classList.add('hello')
    
    
    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;

    // element.appendChild(btn);
//**************************************************************************** */

    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
        const element = document.createElement('div');
   
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   
        return element;
   
      }).catch(error => 'An error occurred while loading the component');
     
//****************************************************************************** */    
   // Add the image to our existing div.
//    const myIcon = new Image()
//    myIcon.src = Icon

//    element.appendChild(myIcon)

//    console.log(Data);

    // return element
}

// document.body.appendChild(component())
getComponent().then(component => {
    document.body.appendChild(component);
  })
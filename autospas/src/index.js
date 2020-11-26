import 'bootstrap'
import '../src/bootstrap-4.5.3-dist/css/bootstrap.css'
import Main from './Main'
// import HTML from './html/main.html'
import './styles/styles.css'
// import MainLogo from './assets/logo.jpg'

console.log('Index.JS загружен - из файла index.js')

Math.E

// console.log('html', HTML)

// menu.onclick =  function myFunction() {
//   var x = document.getElementById('myTopnav');

//   if (x.className === "topnav"){
//       x.className += " responsive";
//   } else{
//       x.className = "topnav"
//   }
// }

menu.onclick = function myFunction() {
  var x = document.getElementById('myTopnav')

  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

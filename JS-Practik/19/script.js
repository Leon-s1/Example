function myFunction () {
  let x = document.getElementById('myTopnav');
  if (x.className === "topnave") {
    x.className += " responsive";
  } else {
    x.className = "topnave";
  }
}

// function test(){
//   var element = document.getElementById('block-1');
//   var link = document.createElement('a');
//   var br = document.createElement('br');
//
//   link.innerHTML = 'Go to Google';
//   link.href = 'https://google.com';
//
//   element.appendChild(br);
//   element.appendChild(link);
// }
//
function test(){
    var element = document.getElementById('block-1');
    document.body.removeChild(element);
}

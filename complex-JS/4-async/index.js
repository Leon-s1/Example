console.log('Start')

console.log('Start2')

function timeout2sec() {
  console.log('timeout2sec');
}

window.setTimeout(function() {
  console.log('Inside timeout, after 2000 sec')
}, 5000)

setTimeout(timeout2sec, 2000)



 console.log('End');

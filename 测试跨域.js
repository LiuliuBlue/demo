var xhr = new XMLHttpRequest()
xhr.open('GET', 'http://test.com:8761/producer/get')
xhr.send(null)
xhr.onload = function (e) {
  var xhr = e.target
  console.log(xhr.responseText)
}

var xhr = new XMLHttpRequest()
xhr.open('GET', 'http://192.168.1.100:8080/test/users')
xhr.send(null)
xhr.onload = function (e) {
  var xhr = e.target
  console.log(xhr.responseText)
}

function Ele (id) {
  this.ele = document.getElementById(id)
}

Ele.prototype.html = function (val) {
  const elem = this.ele
  if (val) {
    elem.innerHTML = val
    return this
  } else {
    return elem.innerHTML
  }
}

Ele.prototype.on = function (type, fn) {
  var elem = this.ele
  elem.addEventListener(type, fn)
  return this
}

var div1 = new Ele('')
div1.html('<p>23333</p>').on('click', function () {
  console.log(1)
}).html('<p>1</p>')

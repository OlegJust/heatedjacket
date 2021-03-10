!(function (a) {
  'use strict'
  'function' == typeof define && define.amd
    ? define(['jquery'], a)
    : 'undefined' != typeof exports
    ? (module.exports = a(require('jquery')))
    : a(jQuery)
})(function (a) {
    (a.fn.slick = function () {
      var f,
        g,
        a = this,
        c = arguments[0],
        d = Array.prototype.slice.call(arguments, 1),
        e = a.length
      for (f = 0; e > f; f++)
        if (
          ('object' == typeof c || 'undefined' == typeof c
            ? (a[f].slick = new b(a[f], c))
            : (g = a[f].slick[c].apply(a[f].slick, d)),
          'undefined' != typeof g)
        )
          return g
      return a
    })
})

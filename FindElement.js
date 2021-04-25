// looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {

    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i]
        }
    }
    return
}
  
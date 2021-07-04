function bubbleSort(array) {
    var n = array.length
    var a = array
    var b

    // use a do...while loop so that we check the order at least once
    do {
        b = false // no swaps have occured this iteration
        for (var i=0; i<n-1; i++) {
            if (a[i]>a[i+1]) {
                // perform the swap
                var x = a[i]
                a[i] = a[i+1]
                a[i+1] = x
                b = true // a swap has occured
            }
        }
        n -- //uppermost element is in correct place
    } while (b) // keep going until no swaps in an iteration
  
    return array;
  }
  
console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))

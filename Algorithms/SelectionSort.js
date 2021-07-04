function selectionSort(array) {

    const n = array.length
    var a = array
    var smallest
  
    // loop where all elements left of current are already sorted
    for(var start=0; start<n; start++) {
  
      // find location of smallest element in remaining array
      smallest = start
      for (var i=start; i<n; i++) {
        if (a[smallest]>a[i+1]) {
          smallest = i+1 // update if smaller found
        }
      }
  
      // swap it with the current position if different
      if (smallest != start){
        var x = a[start]
        a[start]=a[smallest]
        a[smallest]=x
      }
    }
  
    return array;
  }
  
  
  console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
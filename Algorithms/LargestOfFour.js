function largestInArray(arr) {
    var max = arr[0]
    
    for (var i=1; i<arr.length; i++) {
        if (arr[i]>max){
            max = arr[i]
        }
    }
    return max
}
  
function largestOfFour(arr) {
    return arr.map(subarr => largestInArray(subarr))
}

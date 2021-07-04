// sums all in range

function sumAll(arr) {
    var sum = 0
    if (arr[0]<arr[1]) {
        for (var i=arr[0]; i<=arr[1]; i++){
            sum += i
        }
    } else {
        for (var i=arr[1]; i<=arr[0]; i++) {
        sum += i
        }
    }
    return sum;
}

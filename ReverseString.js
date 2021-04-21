function reverseString(str) {
    var ans = ""
    for (var i=0; i< str.length; i++) {
        ans += str[str.length-1 - i]
    }
    return ans
}

// reverseString("hello");

function findLongestWordLength(str) {
    var words = str.split(' ')
    var longest = 0
    
    for (var i = 0; i < words.length; i++) {
        if (words[i].length>longest){
            longest = words[i].length
        }
    }
  
    return longest;
}

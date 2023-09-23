// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// My solution:
function generateHashtag (str){
    let hashtag = str.split(" ").reduce(function(final,word){
      if(word === "") return final
      final += word[0].toUpperCase() + word.slice(1)
      return final
    },["#"])
    //conditions
    if(hashtag.length > 140 || str.length === 0 || hashtag.length === 1) return false
    return hashtag
  }
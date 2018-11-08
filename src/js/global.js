
// function that counts the frequency of a word in text box
function countLetters () {
    // clears whatever is in 
    document.getElementById('lettersDiv').innerHTML = ''
    // array to keep track of frequency of each letter
    const letterCounts = {};
    // grabs the text that is in the text box and assigns it to typedText
    let typedText = document.getElementById("textInput").value;
    // This changes all the letter to lower case
    typedText = typedText.toLowerCase();
    // This gets rid of all the characters except letters, spaces, and apostrophes.
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    // for loop that counts frequency of each letter
    for (let i=0; i < typedText.length; i++) {
        let currentLetter = typedText[i]
        // if statement that increments count of each letter for every occurence in text
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }
    // displays a header for letter frequencies
    display("Letter Frequencies", "lettersDiv", "h3")
    // for..in loop to send counts of each letter to display function to send to page
    for (let letter in letterCounts) {
        let str
        if (letter===' ') str = 'Spaces'
        else if (letter==='\'') str = 'Apostrophes'
        else str = letter.toUpperCase()
        display('"' + str + "\": " + letterCounts[letter] + ", ","lettersDiv","span")
    }
}

// function that counts frequency of each word in text box
function countWords () {
    // clears whatever is in 
    document.getElementById('wordsDiv').innerHTML = ''
    // array to keep track of frequency of each letter
    const wordCounts = {};
    // grabs the text that is in the text box and assigns it to typedText
    let typedText = document.getElementById("textInput").value;
    // This changes all the letter to lower case
    typedText = typedText.toLowerCase();
    // This gets rid of all the characters except letters, spaces, and apostrophes.
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    // splits typedText into individual words
    const words = typedText.split(" ")
    // loops through const words and adds frequency of each to wordCounts
    for (let word in words) {
        if (wordCounts[words[word]] === undefined) {
            wordCounts[words[word]] = 1;
        } else {
            wordCounts[words[word]]++;
        }
    }
    // displays a header for letter frequencies
    display("Word Frequencies", "wordsDiv", "h3")
    // for..in loop to send counts of each letter to display function to send to page
    for (let word in wordCounts) {
        display('"' + word + "\": " + wordCounts[word] + ", ","wordsDiv","span")
    }
}

// function to display text to page
function display (value, div, element) {
    const span = document.createElement(element);
    const textContent = document.createTextNode(value);
    span.appendChild(textContent);
    document.getElementById(div).appendChild(span);
}

// adds an onclick event listener to countButton button that calls countLetters and countWords functions
document.getElementById("countButton").addEventListener("click", function () {
    countLetters ();
    countWords ();
})
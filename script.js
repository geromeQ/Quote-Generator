let quotes = [
    "Life is what happens when you're busy making other plans.", "If life were predictable it would cease to be life, and be without flavor.", "“When you reach the end of your rope, tie a knot in it and hang on", "Always remember that you are absolutely unique. Just like everyone else.", "The way to get started is to quit talking and begin doing."
];

let authors = [
    "John Lennon","Elanor Roosevelt","Franklin D. Roosevelt","Margaret Mead","Walt Disney"
];

function generateQuote() {
    let random = Math.round(Math.random() * 4);
    let selectQ = ""
    let selectA = ""
    switch(random) {
        case 0:
            selectQ = quotes[0]
            selectA = authors[0]
            document.getElementById('quote').innerHTML = selectQ;
            document.getElementById('author').innerHTML = selectA;
            break;
            case 1:
            selectQ = quotes[1]
            selectA = authors[1]
            document.getElementById('quote').innerHTML = selectQ;
            document.getElementById('author').innerHTML = selectA;
            case 2:
            selectQ = quotes[2]
            selectA = authors[2]
            document.getElementById('quote').innerHTML = selectQ;
            document.getElementById('author').innerHTML = selectA;
            case 3:
            selectQ = quotes[3]
            selectA = authors[3]
            document.getElementById('quote').innerHTML = selectQ;
            document.getElementById('author').innerHTML = selectA;
            case 4:
            selectQ = quotes[4]
            selectA = authors[4]
            document.getElementById('quote').innerHTML = selectQ;
            document.getElementById('author').innerHTML = selectA;
            
    }
}
function startingQuote() {
    document.getElementById('quote').innerHTML = quotes[0];
    document.getElementById('author').innerHTML = authors[0];

}
startingQuote();
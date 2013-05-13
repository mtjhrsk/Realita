const SIMPLE_REPLACE_PATTERN = "„$1“$2";

//to find word boundaries for non-ascii (accented) characters
const NON_WORD_CHAR_PATTERN = /([,\.\s<:\-\?\!\)])/;

// Array of patterns to 'quotify'.
// Array of arrays in the format [REGEX_STRING, REPLACE_PATTERN]
var patterns = [
    [/(prosperit\w*)/],
    [/(ľavicov\.*?\svlád\w*)/],
    [/(prác\w*)/],
    [/(hospodársk\w* rast\w*)/],
    [/(ekonomick\.*?\srast\w*)/],
    [/(kríz\w*)/],
    [/(úspe(ch|š).*?)/, "„$1“$3"],
    [/(pe[nň]i?az.*?)/],
    [/(predražen.*?)/],
    [/(zadarmo)/],
    [/(z[ľl]i?av\w*)/],
    [/(nezamestnan.*?)/],
    [/(refor\w*?m.*?)/],
    [/(škrt\w*)/],
    [/(expert\w*)/],
    [/(odborní.*?)/],
    [/(analyti\w*)/],
    [/(slovensk.*?)(republik\w*)/, "$1„$2“"],
    [/európsk(\w*)\s(prezident\w*)/, "európsk$1 „$2“$3"],
    [/(smer.*)(sociáln\w* demokrac\w*)/, "$1„$2“$3"],
    [/(prezident\w*)(.*?)(gašparovič\w*)/, "„$1“$2$3$4"]
];


function realitify(lies){

    //copy the string content, so the original is not manipulated
    var result = lies.concat("");

    for (var i = 0; i < patterns.length; i++){

        //take the pattern from array and concat it with custom non-word char pattern
        var pattern = new RegExp(patterns[i][0].source + NON_WORD_CHAR_PATTERN.source, "gi");
             console.log(pattern);
        //if replace pattern is not defined, use the default
        var replacePattern = patterns[i][1] == null ? SIMPLE_REPLACE_PATTERN : patterns[i][1];

        //replace it
        result = result.replace(pattern, replacePattern);
    }

   return result;
}

document.body.innerHTML = realitify(document.body.innerHTML);

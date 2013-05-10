const SIMPLE_REPLACE_PATTERN = "„$1“";

// Array of patterns to 'quotify'.
// Array of arrays in the format [REGEX_STRING, REPLACE_PATTERN]
// Uses XRegExp library - the patterns are actually strings (backslashes need to be ecaped)
// Uses XRegExp unicode addon - \\p{L} = any unicode word character (unlike js \w = [A-Za-z])
var patterns = [
    ["(prosperit\\p{L}*)"],
    ["(ľavicov\\p{L}* vlád\\{L}*)"],
    ["(prác\\p{L}*)"],
    ["(hospodársk\\p{L}* rast\\p{L}*)"],
    ["(ekonomick\\p{L}* rast\\p{L}*)"],
    ["(kríz\\p{L}*)"],
    ["(úspe(ch|š)\\p{L}*)"],
    ["(pe(n|ň)i?az\\p{L}*)"],
    ["(predražen\\p{L}*)"],
    ["(zadarmo)"],
    ["(nezamestnan\\p{L}*)"],
    ["(refor\\w?m\\p{L}*)"],
    ["(škrt\\p{L}*)"],
    ["(expert\\p{L}*)"],
    ["(odborní\\p{L}*)"],
    ["(analyti\\p{L}*)"],
    ["(slovensk.*?)(republik\\p{L}*)", "$1„$2“"],
    ["(európsk\\p{L}*)\\s(prezident\\p{L}*)", "$1 „$2“"],
    ["(smer.*)(sociáln\\p{L}* demokrac\\p{L}*)", "$1„$2“"],
    ["(prezident\\p{L}*)(.*?)(gašparovič\\p{L}*)", "„$1“$2$3"]
];


function realitify(lies){

    //copy the string content, so the original is not manipulated
    var result = lies.concat("");

    for (var i = 0; i < patterns.length; i++){

        //create new XRegExp pattern from the string
        var pattern = new XRegExp(patterns[i][0], "gi");

        //if replace pattern is not defined, use the default
        var replacePattern = patterns[i][1] == null ? SIMPLE_REPLACE_PATTERN : patterns[i][1];

        //replace it
        result = XRegExp.replace(result, pattern, replacePattern);
    }

   return result;
}

document.body.innerHTML = realitify(document.body.innerHTML);



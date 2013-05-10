const SIMPLE_REPLACE_PATTERN = "„$1“";

// Array of patterns to 'quotify'.
// Array of arrays in the format [REGEX_STRING, REPLACE_PATTERN]
// Uses XRegExp library - the patterns are actually strings (backslashes need to be ecaped)
// Uses XRegExp unicode addon - \\p{L} = any unicode word character (unlike js \w = [A-Za-z])
var patterns = [
    ["((P|p)rosperit\\p{L}*)"],
    ["((Ľ|ľ)avicov\\p{L}* vlád\\{L}*)"],
    ["((P|p)rác\\p{L}*)"],
    ["((P|p)rác\\p{L}*)"],
    ["((H|h)ospodársk\\p{L}* rast\\p{L}*)"],
    ["((E|e)konomick\\p{L}* rast\\p{L}*)"],
    ["((K|k)ríz\\p{L}*)"],
    ["((Ú|ú)spe(ch|š)\\p{L}*)"],
    ["((P|p)e(n|ň)i?az\\p{L}*)"],
    ["((P|p)redražen\\p{L}*)"],
    ["((Z|z)adarmo)"],
    ["((N|n)ezamestnan\\p{L}*)"],
    ["((R|r)efor\\w?m\\p{L}*)"],
    ["((Š|š)krt\\p{L}*)"],
    ["((E|e)xpert\\p{L}*)"],
    ["((O|o)dborní\\p{L}*)"],
    ["(Slovensk.*?)(republik\\p{L}*)", "$1„$2“"],
    ["((E|e)urópsk.*)(prezident\\p{L}*)", "$1„$3“"],
    ["((S|s)mer.*)(sociáln\\p{L}* demokrac\\p{L}*)", "$1„$3“"]
];


for (var i = 0; i < patterns.length; i++){

    //create new XRegExp pattern from the string
    var pattern = new XRegExp(patterns[i][0], "g");

    var replacePattern = patterns[i][1] == null ? SIMPLE_REPLACE_PATTERN : patterns[i][1];

    //replace it
    document.body.innerHTML = XRegExp.replace(document.body.innerHTML, pattern, replacePattern);
}


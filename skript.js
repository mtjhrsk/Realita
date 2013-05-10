const SIMPLE_REPLACE_PATTERN = "„$1“";

// Array of patterns to 'quotify'.
// Array of arrays in the format [REGEX_STRING, REPLACE_PATTERN]
// Uses XRegExp library - the patterns are actually strings (backslashes need to be ecaped)
// Uses XRegExp unicode addon - \\p{L} = any unicode word character (unlike js \w = [A-Za-z])
var patterns = [
    ["((P|p)rosperit\\p{L}*)", SIMPLE_REPLACE_PATTERN ],
    ["((Ľ|ľ)avicov\\p{L}* vlád\\{L}*)", SIMPLE_REPLACE_PATTERN ],
    ["((P|p)rác\\p{L}*)", SIMPLE_REPLACE_PATTERN ],
    ["((P|p)rác\\p{L}*)", SIMPLE_REPLACE_PATTERN ],
    ["((H|h)ospodársk\\p{L}* rast\\p{L}*)", SIMPLE_REPLACE_PATTERN ],
    ["((E|e)konomick\\p{L}* rast\\p{L}*)", SIMPLE_REPLACE_PATTERN ],
    ["((K|k)ríz\\p{L}*)", SIMPLE_REPLACE_PATTERN ],
    ["((Ú|ú)spe(ch|š)\\p{L}*)", SIMPLE_REPLACE_PATTERN ],
    ["((P|p)e(n|ň)i?az\\p{L}*)", SIMPLE_REPLACE_PATTERN ],
    ["((P|p)redražen\\p{L}*)", SIMPLE_REPLACE_PATTERN ],
    ["((Z|z)adarmo)", SIMPLE_REPLACE_PATTERN],
    ["((N|n)ezamestnan\\p{L}*)", SIMPLE_REPLACE_PATTERN],
    ["((R|r)efor\\w?m\\p{L}*)", SIMPLE_REPLACE_PATTERN],
    ["((Š|š)krt\\p{L}*)", SIMPLE_REPLACE_PATTERN],
    ["((E|e)xpert\\p{L}*)", SIMPLE_REPLACE_PATTERN],
    ["((O|o)dborní\\p{L}*)", SIMPLE_REPLACE_PATTERN],
    ["(Slovensk.*?)(republik\\p{L}*)", "$1„$2“"],
    ["((E|e)urópsk.*)(prezident\\p{L}*)", "$1„$3“"],
    ["((S|s)mer.*)(sociáln\\p{L}* demokrac\\p{L}*)", "$1„$3“"]
];


for (var i = 0; i < patterns.length; i++){

    //create new XRegExp pattern from the string
    var pattern = new XRegExp(patterns[k][0], "g");

    //replace it
    document.body.innerHTML = XRegExp.replace(document.body.innerHTML, pattern, patterns[k][1]);
}


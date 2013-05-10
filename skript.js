var douvozovek = new Array("ľavicová vláda", "ľavicové vlády", "ľavicovej vláde", "ľavicovú vládu", "ľavicovou vládou", "hospodársky rast", "hospodárskeho rastu", "hospodárskemu rastu", "hospodárskym rastom", "ekonomický rast", "ekonomického rastu", "ekonomickému rastu", "ekonomickým rastom", "práca", "práce", "prácami", "kríza", "krízou", "krízach", "úspech", "úspechu", "úspechom", "úspešný", "úspešná", "úspešní", "úspešných", "peniaze", "peňazí", "peniazom", "peniazoch", "peniazmi", "predražené", "predraženú", "predražený", "predraženými", "zadarmo", "zadarmo", "nezamestnaný", "nezamestnaní", "nezamestnaná ","nezamestnaných","reformy","reforiem","reformám","reformách","reformami","škrty","škrtov","škrtom","škrtoch","prosperita","prosperity", "prosperite", "prosperitou", "Ľavicová vláda", "Ľavicové vlády", "Ľavicovej vláde", "Ľavicovú vládu", "Hospodársky rast", "Hospodárskeho rastu", "Hospodárskemu rastu", "Hospodárskym rastom", "Ekonomický rast", "Ekonomického rastu", "ekonomickému rastu", "Ekonomickým rastom", "Práca", "Prácu", "Prácou"," Kríza ", "Krízu", "krízou", "Úspech", "Úspechu", "Úspechom", "Úspešný", "Úspešná", "Úspešní", "Úspešných", "Peniaze", "peňazí", "Peniazom", "peniazmi", "peniazmi", "Predražené", "predražené ","predražený","predraženým","Zadarmo","Zadarmo","Nezamestnaní","Nezamestnaný","nezamestnaná","Nezamestnané"," reforma"," reforma"," reformou","reformu", "reforme", "reformy", "reformu", "reforme", "reformy", "reforiem", "Reformám", "reformách", "reformy", "škrty", "škrtov", "škrtom", "škrtoch"," Expert","experta","expert"," experti","expert","experta","expertovi","expertom","experti","Experti");

for (var j = 0; j < douvozovek.length; j++)
{
document.body.innerHTML = document.body.innerHTML.replace(douvozovek[j], "„" + douvozovek[j] + "“");
}

document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Slovenská republika", "g"), "Slovenská „republika“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Slovenskej republiky", "g"), "Slovenskej „republiky“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Slovenskej republike", "g"), "Slovenskej „republike“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Slovenskou republikou", "g"), "Slovenskou „republikou“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("európsky prezident", "g"), "európsky „prezident“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("európskeho prezidenta", "g"), "európskeho „prezidenta“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("európskemu prezidentovi", "g"), "európskemu „prezidentovi“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("európskym prezidentom", "g"), "európskym „prezidentom“");

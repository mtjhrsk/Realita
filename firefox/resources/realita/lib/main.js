var data = require("self").data;
var pageMod = require("page-mod");
pageMod.PageMod({
  include: ["*.sme.sk", "*.aktuality.sk", "*.hnonline.sk", "*.etrend.sk", "*.topky.sk", "*.aktualne.sk", "*.pravda.sk"],
  contentScriptFile: [
      data.url('xregexp-min.js'),
      data.url('unicode-base.js'),
      data.url('skript.js')
      ]      
});
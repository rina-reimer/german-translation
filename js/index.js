//This function will be called when user click changing language
function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
}

$(document).ready(function(){
  $( "Something" ).appendTo( document.body );
  //This is id of HTML element (English) with attribute lng-tag
  $("#enTranslator").click(function(){
    translate('en', 'lng-tag');
    $( "<button class='en'>Translate to English!</button>" ).appendTo( document.body );
  });
  //This is id of HTML element (Khmer) with attribute lng-tag
  $("#deTranslator").click(function(){
    translate('de', 'lng-tag');
    $( "<button class='de'>Translate to Deutsch!</button>" ).appendTo( document.body );
  });
});
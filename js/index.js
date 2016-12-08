//Method 1

//$('#add5').click(function () {
//  var resultval = parseInt($('#result').text());
//  var newresult = resultval + 5;
//  $('#result').text(newresult.toString());
//});

//$('#add10').click(function () {
//  var resultval = parseInt($('#result').text());
//  var newresult = resultval + 10;
//  $('#result').text(newresult.toString());
//});

//$('#zero').click(function () {
//  var resultval = parseInt($('#result').text());
//  var newresult = resultval + 0;
//  $('#result').text(newresult.toString());
//});

//$('#sub1').click(function () {
//  var resultval = parseInt($('#result').text());
//  var newresult = resultval - 1;
//  $('#result').text(newresult.toString());
//});

//Refactored
function math(buttid){
  var buttval = parseInt($(buttid).text());
  var resultval = parseInt($('#result').text());
  var newresult = resultval + buttval;
  $('#result').text(newresult.toString());
}

$('#sub1').click(function () {
  math('#sub1');
});

$('#zero').click(function () {
  math('#zero');
});

$('#add5').click(function () {
  math('#add5');
});

$('#add10').click(function () {
  math('#add10');
});

const numDivs = 36;
const maxHits = 10;
let missPoint = 0;
let hits = 0;
let firstHitTime = 0;

function round() {

  $('.count-hits').text(hits);
  $('.count-miss').text(missPoint);

  $('.target').removeClass('target');
  $('.miss').removeClass('miss'); 

  let divSelector = randomDivId();
  $(divSelector).addClass('target');


  if (hits === 1){firstHitTime = getTimestamp();}
  if (hits === maxHits) {endGame();}
}

function endGame() {
  $('.game-field').hide();
  $("#button-start").hide();
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  $("#total-miss").text(missPoint);
  $("#win-message").removeClass("d-none");
}

function handleClick(event) {

  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    round();
  }  else { 

    $(event.target).addClass('miss');
    $('.count-miss').text(missPoint + 1);
    missPoint = missPoint + 1;
    
   } 
}

function init() {
  round();

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
};


$("#button-start").click(function() {
  init()
});

(function() {
  var quotes = [
'God gave us the gift of life; it is up to us to give ourselves the gift of living well. ',
'There are two great days in a person\'s life - the day we are born and the day we discover why.',
'Let us never know what old age is. Let us know the happiness time brings, not count the years.',
'Today you are you! That is truer than true! There is no one alive who is you-er than you!',
'The more you praise and celebrate your life, the more there is in life to celebrate.',
'A birthday is just another day where you go to work and people give you love. Age is just a state of mind, and you are as old as you think you are. You have to count your blessings and be happy.',
'The way I see it, you should live everyday like its your birthday.',
'Don\'t just count your years, make your years count.',

  ];
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML =
    '<p>' + quote + '</p>';
})();
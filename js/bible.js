(function() {
  var quotes = [
' For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11',
' A woman giving birth to a child has pain because her time has come; but when her baby is born she forgets the anguish because of her joy that a child is born into the world.John 16:21',
'For through wisdom your days will be many, and years will be added to your life. - Proverbs 9:11',
'You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand. - Psalm 16:11',
'God gave us the gift of life; it is up to us to give ourselves the gift of living well. - Voltaire',
'22 Because of the LORD’s great love we are not consumed, for his compassions never fail. 23 They are new every morning; great is your faithfulness. - Lamentations 3:22-23'
      
  ];
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("bible").innerHTML =
    '<p>' + quote + '</p>';
})();
var quotes = [
	{quote: "To raise new questions, new possibilities, to regard old problems from a new angle, requires creative imagination and marks real advance in science.", person: "Albert Einstein"}, 
	{quote: "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.", person: "Albert Einstein"}, 
	{quote: "All science requires mathematics. The knowledge of mathematical things is almost innate in us. This is the easiest of sciences, a fact which is obvious in that no one's brain rejects it; for laymen and people who are utterly illiterate know how to count and reckon.", person: "Roger Bacon"}, 
	{quote: "Science is organized knowledge. Wisdom is organized life.", person: "Immanual Kant"}, 
	{quote: "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world. Science is the highest personification of the nation because that nation will remain the first which carries the furthest the works of thought and intelligence.", person: "Louis Pasteur"}, 
	{quote: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.", person: "Issac Asimov"}, 
	{quote: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.", person: "Edwin Powell Hubble"}, 
	{quote: "There is a single light of science, and to brighten it anywhere is to brighten it everywhere.", person: "Issac Asimov"}, 
	{quote: "Everything is theoretically impossible, until it is done.", person: "Robert A. Heinlein"}, 
	{quote: "Science is a way of thinking much more than it is a body of knowledge.", person: "Carl Sagan"}, 
	{quote: "Scientific advancement should aim to affirm and to improve human life.", person: "Nathan Deal"}, 
	{quote: "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...", person: "Issac Asimov"}, 
	{quote: "The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage.", person: "Mark Russel"}, 
	{quote: "Nothing has such power to broaden the mind as the ability to investigate systematically and truly all that comes under thy observation in life.", person: "Marcus Aurelius"}, 
	{quote: "Most people say that it is the intellect which makes a great scientist. They are wrong: it is character.", person: "Albert Einstein"}, 
	{quote: "Scientists have become the bearers of the torch of discovery in our quest for knowledge.", person: "Stephen Hawking"}, 
	{quote: "The distance between insanity and genius is measured only by success.", person: "Bruce Feirstein"}, 
	{quote: "Every great advance in science has issued from a new audacity of imagination.", person: "John Dewey"}, 
	{quote: "Science is organized knowledge.", person: "Herbert Spencer"}, 
	{quote: "The difference between science and the fuzzy subjects is that science requires reasoning while those other subjects merely require scholarship.", person: "Robert A. Heinlein"}, 
	{quote: "Aerodynamically, the bumble bee shouldn't be able to fly, but the bumble bee doesn't know it so it goes on flying anyway.", person: "Mary Kay Ash"}, 
	{quote: "There was no 'before' the beginning of our universe, because once upon a time there was no time.", person: "John D. Barrow"}, 
	{quote: "Science never solves a problem without creating ten more.", person: "George Bernard Shaw"}, 
	{quote: "Science is the great antidote to the poison of enthusiasm and superstition.", person: "Adam Smith"}, 
	{quote: "No amount of experimentation can ever prove me right; a single experiment can prove me wrong.", person: "Albert Einstein"}, 
	{quote: "Science does not know its debt to imagination.", person: "Ralph Waldo Emerson"}, 
	{quote: "There are no shortcuts in evolution.", person: "Louis D. Brandeis"}, 
	{quote: "We are born at a given moment, in a given place and, like vintage years of wine, we have the qualities of the year and of the season of which we are born. Astrology does not lay claim to anything more.", person: "Carl Yung"}
];

function generateQuote() {
	randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	if (randomQuote.person === "Albert Einstein" && randomQuote.quote.length + randomQuote.person.length > 95) {
		generateQuote();
	} else if (randomQuote.quote.length + randomQuote.person.length > 97) {
		generateQuote();
	} else {
		$('.quote').text(randomQuote.quote);
		$('.person').text(randomQuote.person);
		said = randomQuote.quote.split(' ').join('%20');
		speaker = randomQuote.person.split(' ').join('%20');
	}
}

$(document).ready(function() {
	$('.btn-tweet').hide();
	$('.btn-quote').on('click', function() {
		generateQuote();
		if (speaker === 'Albert Einstein') {
			$('.twitter').attr('href', 'https://twitter.com/intent/tweet?text=%23Albert Einstein%20said,%20"' + said + '"%20%23science%20https://goo.gl/MOxWg1');
		} else {
			$('.twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + speaker + '%20said,%20"' + said + '"%20%23science%20https://goo.gl/MOxWg1');
		}
		$('.btn-tweet').show();
	});
});

(function() {
  if (window.__twitterIntentHandler) return;
  var intentRegex = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,
      windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
      width = 550,
      height = 420,
      winHeight = screen.height,
      winWidth = screen.width;
 
  function handleIntent(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        m, left, top;
 
    while (target && target.nodeName.toLowerCase() !== 'a') {
      target = target.parentNode;
    }
 
    if (target && target.nodeName.toLowerCase() === 'a' && target.href) {
      m = target.href.match(intentRegex);
      if (m) {
        left = Math.round((winWidth / 2) - (width / 2));
        top = 0;
 
        if (winHeight > height) {
          top = Math.round((winHeight / 2) - (height / 2));
        }
 
        window.open(target.href, 'intent', windowOptions + ',width=' + width +
                                           ',height=' + height + ',left=' + left + ',top=' + top);
        e.returnValue = false;
        e.preventDefault && e.preventDefault();
      }
    }
  }
 
  if (document.addEventListener) {
    document.addEventListener('click', handleIntent, false);
  } else if (document.attachEvent) {
    document.attachEvent('onclick', handleIntent);
  }
  window.__twitterIntentHandler = true;
}());
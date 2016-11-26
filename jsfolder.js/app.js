// your code here!
//1. total word function of submitted text

function totalWordCount(word) {

  var  = {};
  for (var i = 0; i <= words.length; i++) {
if (words[i] in totalWordCount[word[i]]++;
}
  else {
totalWordCount[words[i]]=1;
}
}
  var currentMaxKey = Object.keys(totalWordCount)[0];
  var currentMaxCount = totalWordCount[currentMaxKey];

  for (var word in totalWordCount) {
  if (totalWordCount[word] > currentMaxCount) {
  currentMaxKey = word;
  currenMaxCount = totalWordCount[word];
  }
}
	
console.log(word);

return currentMaxKey;
}

//2. unique word count of submitted text


function uniqueWordCount(word) {

   var  = {};
  for (var i = 0; i <= words.length; i++) {
if (words[i] on uniqueWordCount[word[i]]++;
}
  else {
uniqueWordCount[words[i]]=1;
}
}
  var currentMaxKey = Object.keys(totalWordCount)[0];
  var currentMaxCount = uniqueWordCount[currentMaxKey];

  for (var word in uniqueWordCount) {
  if (uniqueWordCount[word] > currentMaxCount) {
  currentMaxKey = word;
  currenMaxCount = uniqueWordCount[word];
  }
}
	
console.log(word);

return currentMaxKey;
}
}


//3. Average word length in characters of submitted text

function averageWordLength() {

var totalLength = tokens.join("").length;
  return (totalLength / tokens.length).toFixed(2);
}

}

//4. Averag sentance length in characters of submitted text

function averageSentanceLength(text){

  var numSentances = text.match(/[1?]+g)?text.match(/[.!?]+/g).length : 1;
  var wordcount = tokenizeText(text).length;
  return (wordCount / numSentances).toFixed(2);
  
}






//program should print each of these metrics in approriate area in results section
function reportOnText(text) {
  // tokenize our text then compute our data points

  var tokens = tokenizeText(text);
  var numDistinctWords = countDistinctWords(tokens);
  var numTotalWords = tokens.length;
  var averageWordLength = getAverageWordLength(tokens);
  var averageWordsPerSentence = getAverageWordsPerSentence(text);

  // take our data and display it in the dom
  var textReport = $('.js-text-report');
  textReport.find('.js-word-count').text(numTotalWords);
  textReport.find('.js-unique-word-count').text(numDistinctWords);
  textReport.find('.js-average-word-length').text(
    averageWordLength + " characters");
  textReport.find('.js-average-sentence-length').text(
    averageWordsPerSentence + " words");
  textReport.removeClass('hidden');
}


// Watch for and handle form submissions 
function watchFormSubmission() { cosole.log('textarea');
	$('.js-text-form').submit(function(event) {
	 event.preventDefault(); 
// get the text the user submitted 
var userText = $(this).find(textarea).val();console.log('hello');
 }); 
}
// equivalent to $(document).ready(function() {...}) 
$(function() { 
		watchFormSubmission(); 
  });

$(document).ready(function() {
  alert("hello world");
  console.log("hello world");
}






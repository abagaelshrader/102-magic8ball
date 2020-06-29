$ (document).ready(function(){

	var magic8Ball = {};
  /*- array of the potential list of answers -*/
	magic8Ball.magic8ballAnswers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes- definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
	$("#answer").hide(); /*hide the answer when the page finishes loading*/

  /* ----- askQuestion function ----- */
	magic8Ball.askQuestion = function(question) {
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png"); /*shows 8ball image*/
		var randomNumber = 	Math.random(); /*creates a random number between 0 and 1*/
		var randomNumberArray = randomNumber * this.magic8ballAnswers.length; /*creates a new variable that chooses a random number based on the length of the array - multiples the random number by the length of the array */
		var randomIndex = Math.floor (randomNumberArray); /*round the number down - because we start counting at 0 */
		var answer = this.magic8ballAnswers[randomIndex]; /*use the random number to index a random answer */
    $("#answer").text(answer);
		console.log(question);
		console.log(answer);
	};
	var onClick = function() {
		var question = prompt("Ask a YES or NO question please.");
			magic8Ball.askQuestion(question);
			$("#answer").hide();
      $("#8ball").effect("shake");
      $("#answer").fadeIn(4000);
			$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
	};

/*//wait half a second before showing prompt
   setTimeout(
       function() {
           //show prompt
           var question = prompt("Ask a yes or no question");
           magic8Ball.askQuestion(question);
       }, 500);*/

	$("#questionButton").click(onClick);

});

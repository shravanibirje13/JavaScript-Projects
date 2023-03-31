		function generateQuote() {
			var quotes = [
				"Be the change you wish to see in the world. - Mahatma Gandhi",
				"The only way to do great work is to love what you do. - Steve Jobs",
				"Believe you can and you're halfway there. - Theodore Roosevelt",
				"Stay hungry, stay foolish. - Steve Jobs",
				"If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
				"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
				"You miss 100% of the shots you don’t take. - Wayne Gretzky",
				"Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
				"Whether you think you can, or you think you can't, you're right. - Henry Ford",
				"Strive not to be a success, but rather to be of value. - Albert Einstein"

			];
			var randomNumber = Math.floor(Math.random() * quotes.length);
			document.getElementById("quote").innerHTML = quotes[randomNumber];
		}

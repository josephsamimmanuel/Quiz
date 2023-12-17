# Quiz
Creating a quiz app using JavaScript involves designing the HTML structure for the quiz questions, implementing JavaScript to handle user interactions and scoring, and providing feedback. Below is a basic example to get you started:
Creating a quiz app using JavaScript involves designing the HTML structure for the quiz questions, implementing JavaScript to handle user interactions and scoring, and providing feedback. Below is a basic example to get you started:

1. **HTML Structure:**
   Set up the HTML structure for your quiz. Each question can be a separate `div` or any other suitable container.

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Quiz App</title>
       <!-- Add any necessary stylesheets or scripts here -->
   </head>
   <body>
       <div id="quiz-container">
           <div id="question1" class="question">
               <h2>Question 1: What is the capital of France?</h2>
               <input type="radio" name="q1" value="paris"> Paris<br>
               <input type="radio" name="q1" value="berlin"> Berlin<br>
               <input type="radio" name="q1" value="rome"> Rome<br>
               <input type="radio" name="q1" value="madrid"> Madrid<br>
           </div>

           <!-- Add more questions here -->

           <button onclick="submitQuiz()">Submit Quiz</button>
       </div>

       <div id="result-container">
           <h2>Your Results</h2>
           <p id="score"></p>
       </div>

       <!-- Add any additional content or scripts here -->
   </body>
   </html>
   ```

2. **JavaScript Logic:**
   Implement JavaScript to handle quiz submission, calculate scores, and provide feedback.

   ```javascript
   // Sample quiz data
   var quizData = [
       {
           question: "What is the capital of France?",
           correctAnswer: "paris"
       },
       // Add more questions here
   ];

   var score = 0;

   function submitQuiz() {
       // Iterate through each question and check the selected answer
       for (var i = 0; i < quizData.length; i++) {
           var selectedAnswer = document.querySelector('input[name="q' + (i + 1) + '"]:checked');

           if (selectedAnswer) {
               if (selectedAnswer.value === quizData[i].correctAnswer) {
                   score++;
               }
           }
       }

       // Display the score
       displayResult();
   }

   function displayResult() {
       var resultContainer = document.getElementById('result-container');
       var scoreElement = document.getElementById('score');

       // Calculate the percentage score
       var percentage = (score / quizData.length) * 100;

       // Display the score
       scoreElement.textContent = "Your score: " + percentage.toFixed(2) + "%";
       resultContainer.style.display = 'block';

       // You can add additional logic to display specific messages based on the score range
   }
   ```

3. **Styles (Optional):**
   Add CSS styles to make your quiz visually appealing.

   ```css
   body {
       font-family: Arial, sans-serif;
   }

   #quiz-container {
       max-width: 600px;
       margin: 20px auto;
   }

   .question {
       margin-bottom: 20px;
   }

   #result-container {
       display: none;
       max-width: 400px;
       margin: 20px auto;
   }
   ```

This is a simple example to get you started. Depending on your requirements, you might want to enhance the quiz app with features like a timer, different question types, and a more interactive user interface. Additionally, you could store and retrieve quiz data from a server for a dynamic quiz experience.

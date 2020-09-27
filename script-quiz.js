(function(){
    function buildQuiz(){
    
      const output = [];
  
    
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
        
          const answers = [];
  
        
          for(letter in currentQuestion.answers){
  
          
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
        
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
    
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
    
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
    
      let numCorrect = 0;
  
    
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      
        if(userAnswer === currentQuestion.correctAnswer){
        
          numCorrect++;
  
        
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
      
        else{
        
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
    
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What was the first satellite launched into space?",
        answers: {
          a: "Discovery 1",
          b: "Explorer 1",
          c: "Sputnik 1"
        },
        correctAnswer: "c"
      },
      {
        question: "How many satellites will Starlink launch (To begin with)?",
        answers: {
          a: "1200",
          b: "12000",
          c: "120000"
        },
        correctAnswer: "b"
      },
      {
        question: "How many solar panels will be mounted on each satellite?",
        answers: {
          a: "One (1)",
          b: "Two (2)",
          c: "Three (3)",
          d: "Four (4)"
        },
        correctAnswer: "a"
      },
      {
        question: "What kind of service will they provide ?",
        answers: {
          a: "Internet",
          b: "GPS",
          c: "Weather moneting",
          d: "Telephone network"
        },
        correctAnswer: "a"
      }
    ];
  
  
    buildQuiz();
  
  
    submitButton.addEventListener('click', showResults);
  })();
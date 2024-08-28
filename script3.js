document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    const questionDisplay = document.getElementById('questionDisplay');
    const answerInput = document.getElementById('answerInput');
    const navButtons = document.querySelectorAll('.navButton');
    let currentQuestionIndex = 0;

    const assessmentData = {
        title: "Sample Assessment",
        instructions: "Please answer all the questions to the best of your ability.",
        timeLimit: 600, // In seconds (e.g., 600 seconds = 10 minutes)
        questions: [
            {
                id: 1,
                text: "What is the capital of France?",
                type: "multiple-choice",
                options: ["Paris", "London", "Berlin", "Madrid"],
                correctAnswer: "Paris",
                feedback: "The capital of France is Paris."
            },
            {
                id: 2,
                text: "Solve the equation: 2x + 3 = 7",
                type: "short-answer",
                correctAnswer: "2",
                feedback: "The correct answer is 2."
            },
            {
                id: 3,
                text: "Describe the process of photosynthesis.",
                type: "essay",
                correctAnswer: "",
                feedback: "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with carbon dioxide and water."
            }
        ],
        immediateFeedback: true
    };

    // Initialize the assessment
    document.getElementById('assessmentTitle').textContent = assessmentData.title;
    document.getElementById('assessmentInstructions').textContent = assessmentData.instructions;

    // Timer function
    function startTimer(duration) {
        let timeRemaining = duration;
        const timerInterval = setInterval(() => {
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            timerElement.textContent = Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds};
            timeRemaining--;

            if (timeRemaining < 0) {
                clearInterval(timerInterval);
                submitAssessment();
            }
        }, 1000);
    }

    startTimer(assessmentData.timeLimit);

    // Display the first question
    function displayQuestion(index) {
        const question = assessmentData.questions[index];
        questionDisplay.innerHTML = <h3>${question.text}</h3>;
        answerInput.innerHTML = '';

        if (question.type === 'multiple-choice') {
            question.options.forEach(option => {
                const label = document.createElement('label');
                label.innerHTML = <input type="radio" name="answer" value="${option}"> ${option};
                answerInput.appendChild(label);
                answerInput.appendChild(document.createElement('br'));
            });
        } else if (question.type === 'short-answer') {
            answerInput.innerHTML = '<input type="text" name="answer">';
        } else if (question.type === 'essay') {
            answerInput.innerHTML = '<textarea name="answer" rows="5"></textarea>';
        }
    }

    // Handle question navigation
    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentQuestionIndex = index;
            displayQuestion(currentQuestionIndex);
            document.querySelector('.navButton.active')?.classList.remove('active');
            button.classList.add('active');
        });
    });

    // Initial display of the first question
    navButtons[0].classList.add('active');
    displayQuestion(currentQuestionIndex);

    // Save Progress (currently just a placeholder)
    document.getElementById('saveProgress').addEventListener('click', () => {
        alert('Progress saved! (Not really, this is just a placeholder.)');
    });

    // Submit Assessment
    document.getElementById('submitAssessment').addEventListener('click', () => {
        submitAssessment();
    });

    function submitAssessment() {
        alert('Assessment submitted!');
        if (assessmentData.immediateFeedback) {
            displayFeedback();
        }
    }

    // Display feedback (if immediate feedback is enabled)
    function displayFeedback() {
        const question = assessmentData.questions[currentQuestionIndex];
        const feedbackElement = document.createElement('div');
        feedbackElement.innerHTML = <h4>Feedback:</h4><p>${question.feedback}</p>;
        document.getElementById('feedbackDisplay').appendChild(feedbackElement);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const questionList = document.getElementById('questionList');
    const addQuestionButton = document.getElementById('addQuestion');
    const searchInput = document.getElementById('searchQuestions');
    let questions = [];

    // Sample questions data (you'd fetch this from your server in a real app)
    questions = [
        { id: 1, text: 'What is the capital of France?', type: 'multiple-choice', difficulty: 'easy', subject: 'Geography', tags: ['capital', 'Europe'] },
        { id: 2, text: 'Solve the equation: 2x + 3 = 7', type: 'short-answer', difficulty: 'medium', subject: 'Mathematics', tags: ['algebra', 'equations'] }
    ];

    // Function to render the question list
    function renderQuestionList(questionsToRender) {
        questionList.innerHTML = '';
        questionsToRender.forEach((question) => {
            const questionItem = document.createElement('div');
            questionItem.classList.add('question-item');

            questionItem.innerHTML = `
                <div class="question-text">${question.text}</div>
                <div class="question-details">
                    <span>Type: ${question.type}</span>
                    <span>Difficulty: ${question.difficulty}</span>
                    <span>Subject: ${question.subject}</span>
                </div>
                <div class="question-actions">
                    <button class="edit-question" data-id="${question.id}">Edit</button>
                    <button class="delete-question" data-id="${question.id}">Delete</button>
                </div>
            `;
            questionList.appendChild(questionItem);
        });
    }

    // Filter and search questions
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredQuestions = questions.filter((question) => {
            return (
                question.text.toLowerCase().includes(searchTerm) ||
                question.subject.toLowerCase().includes(searchTerm) ||
                question.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        });
        renderQuestionList(filteredQuestions);
    });

    // Add new question
    addQuestionButton.addEventListener('click', () => {
        // Logic to open the question creation modal or page
        alert('Question Creation Tool coming soon!');
    });

    // Edit or delete question
    questionList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-question')) {
            const questionId = e.target.dataset.id;
            // Logic to open the edit modal or page with the specific question's data
            alert(Edit Question ID: ${questionId});
        } else if (e.target.classList.contains('delete-question')) {
            const questionId = e.target.dataset.id;
            // Logic to delete the question
            questions = questions.filter(q => q.id != questionId);
            renderQuestionList(questions);
            alert(Question ID: ${questionId} deleted!);
        }
    });

    // Initial render of the question list
    renderQuestionList(questions);
});
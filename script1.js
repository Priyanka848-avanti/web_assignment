document.addEventListener('DOMContentLoaded', () => {
    const assessmentForm = document.getElementById('assessmentForm');
    const previewButton = document.getElementById('previewAssessment');
    const saveDraftButton = document.getElementById('saveDraft');
    const publishButton = document.getElementById('publishAssessment');
    const questions = [];

    // Add new question
    document.getElementById('addQuestion').addEventListener('click', () => {
        const questionCreationDiv = document.getElementById('questionCreation');
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-group');

        questionDiv.innerHTML = `
            <div class="form-group">
                <label for="question">Question:</label>
                <input type="text" name="question" required>
            </div>
            <div class="form-group">
                <label for="questionType">Question Type:</label>
                <select name="questionType" required>
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="short-answer">Short Answer</option>
                    <option value="essay">Essay</option>
                    <option value="true-false">True/False</option>
                </select>
            </div>
            <div class="form-group options-group" style="display: none;">
                <label>Options:</label>
                <input type="text" name="option1" placeholder="Option 1">
                <input type="text" name="option2" placeholder="Option 2">
                <button type="button" class="add-option">Add Option</button>
            </div>
        `;

        questionCreationDiv.appendChild(questionDiv);

        // Show options input if question type is multiple-choice
        const questionTypeSelect = questionDiv.querySelector('[name="questionType"]');
        questionTypeSelect.addEventListener('change', (event) => {
            const optionsGroup = questionDiv.querySelector('.options-group');
            if (event.target.value === 'multiple-choice') {
                optionsGroup.style.display = 'block';
            } else {
                optionsGroup.style.display = 'none';
            }
        });

        // Add options for multiple-choice questions
        questionDiv.querySelector('.add-option').addEventListener('click', () => {
            const optionsGroup = questionDiv.querySelector('.options-group');
            const newOptionInput = document.createElement('input');
            newOptionInput.type = 'text';
            newOptionInput.name = option${optionsGroup.querySelectorAll('input').length + 1};
            newOptionInput.placeholder = Option ${optionsGroup.querySelectorAll('input').length + 1};
            optionsGroup.insertBefore(newOptionInput, optionsGroup.lastElementChild);
        });
    });

    // Save assessment as draft
    saveDraftButton.addEventListener('click', (e) => {
        e.preventDefault();
        saveAssessment('draft');
    });

    // Publish assessment
    publishButton.addEventListener('click', (e) => {
        e.preventDefault();
        saveAssessment('published');
    });

    // Save assessment function
    function saveAssessment(status) {
        const formData = new FormData(assessmentForm);
        const data = Object.fromEntries(formData.entries());
        data.status = status;

        // Collect questions
        const questionGroups = document.querySelectorAll('.question-group');
        questionGroups.forEach((group) => {
            const questionData = {
                question: group.querySelector('[name="question"]').value,
                type: group.querySelector('[name="questionType"]').value,
                options: []
            };

            if (questionData.type === 'multiple-choice') {
                group.querySelectorAll('.options-group input').forEach(option => {
                    if (option.value) questionData.options.push(option.value);
                });
            }

            questions.push(questionData);
        });

        data.questions = questions;

        fetch('/api/assessments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert(Assessment ${status === 'draft' ? 'saved as draft' : 'published'}!);
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
    }

    // Preview assessment
    previewButton.addEventListener('click', () => {
        alert('Preview assessment functionality coming soon!');
    });
});
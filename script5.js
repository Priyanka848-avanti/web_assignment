document.addEventListener('DOMContentLoaded', () => {
    const submissionList = document.getElementById('submissionList');
    const questionGrading = document.getElementById('questionGrading');
    const feedbackText = document.getElementById('feedbackText');
    const submitGradesButton = document.getElementById('submitGrades');
    const bulkGradeButton = document.getElementById('bulkGrade');
    const regradeButton = document.getElementById('regrade');
    const returnToStudentButton = document.getElementById('returnToStudent');

    // Sample data for submissions and questions
    const submissionsData = [
        { id: 1, name: "John Doe", status: "Ungraded" },
        { id: 2, name: "Jane Smith", status: "Ungraded" }
    ];

    const questionsData = [
        { id: 1, text: "Describe the process of photosynthesis.", type: "essay" },
        { id: 2, text: "What is the capital of France?", type: "multiple-choice" }
    ];

    // Populate student submissions list
    function populateSubmissions() {
        submissionList.innerHTML = '';
        submissionsData.forEach(submission => {
            const listItem = document.createElement('li');
            listItem.innerHTML = ${submission.name} - Status: ${submission.status} <button data-id="${submission.id}" class="gradeButton">Grade</button>;
            submissionList.appendChild(listItem);
        });
    }

    // Populate question grading section
    function populateQuestionGrading() {
        questionGrading.innerHTML = '';
        questionsData.forEach(question => {
            const questionDiv = document.createElement('div');
            questionDiv.innerHTML = <h4>${question.text}</h4>;
            if (question.type === 'essay') {
                questionDiv.innerHTML += <textarea data-id="${question.id}" rows="4" placeholder="Enter grade and feedback..."></textarea>;
            } else {
                questionDiv.innerHTML += <p>Grading for multiple-choice questions is automated.</p>;
            }
            questionGrading.appendChild(questionDiv);
        });
    }

    populateSubmissions();
    populateQuestionGrading();

    // Handle grading button click
    submissionList.addEventListener('click', (event) => {
        if (event.target.classList.contains('gradeButton')) {
            const studentId = event.target.dataset.id;
            alert(Grading for student ID ${studentId} selected.);
            // Load student submission details for grading
        }
    });

    // Submit Grades button logic
    submitGradesButton.addEventListener('click', () => {
        alert('Grades submitted successfully!');
        // Logic to submit grades and feedback
    });

    // Bulk Grade button logic
    bulkGradeButton.addEventListener('click', () => {
        alert('Bulk grading functionality coming soon!');
        // Logic for bulk grading
    });

    // Regrade button logic
    regradeButton.addEventListener('click', () => {
        alert('Regrade functionality coming soon!');
        // Logic to regrade submissions
    });

    // Return to Student button logic
    returnToStudentButton.addEventListener('click', () => {
        alert('Returning assessment to student.');
        // Logic to return the assessment with feedback
    });
});
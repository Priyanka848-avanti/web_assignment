document.addEventListener('DOMContentLoaded', () => {
    // Example: Fetch and render assessments
    const assessments = [
        { title: 'Quiz 1', type: 'quiz', date: '2024-08-20', popularity: 150, completion: 95 },
        { title: 'Assignment 1', type: 'assignment', date: '2024-08-21', popularity: 120, completion: 85 },
        { title: 'Survey 1', type: 'survey', date: '2024-08-19', popularity: 200, completion: 90 },
    ];

    const renderAssessments = () => {
        const myAssessmentsDiv = document.getElementById('myAssessments');
        myAssessmentsDiv.innerHTML = assessments.map(assessment => `
            <div class="assessment-item">
                <h3>${assessment.title}</h3>
                <p>Type: ${assessment.type}</p>
                <p>Date: ${assessment.date}</p>
                <p>Popularity: ${assessment.popularity}</p>
                <p>Completion Rate: ${assessment.completion}%</p>
            </div>
        `).join('');
    };

    // Initial rendering
    renderAssessments();

    // Event listeners for filters and sorting
    document.getElementById('filterType').addEventListener('change', (event) => {
        // Apply filter logic here
        // renderAssessments();
    });

    document.getElementById('sortOrder').addEventListener('change', (event) => {
        // Apply sorting logic here
        // renderAssessments();
    });

    document.getElementById('createNewAssessment').addEventListener('click', () => {
        window.location.href = '/create-assessment'; // Redirect to assessment creation page
    });
});
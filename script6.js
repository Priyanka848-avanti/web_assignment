// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Mock data
    const overallPerformanceData = {
        average_score: 87,
        score_distribution: { "80-90": 15, "90-100": 20, "70-80": 5 }
    };

    const questionAnalysisData = {
        average_time_spent: 120,
        correct_rate: 0.85
    };

    const studentTrendsData = [
        { assessment_id: 101, score: 85 },
        { assessment_id: 102, score: 90 },
        { assessment_id: 103, score: 88 }
    ];

    const feedbackData = {
        common_mistakes: { 1: 5, 2: 3, 3: 2 }
    };

    const comparisonData = {
        assessment_comparison: { "101": 85, "102": 90, "103": 88 }
    };

    // Overall Performance
    document.getElementById('average-score').innerText = Average Score: ${overallPerformanceData.average_score};
    const scoreDistributionCtx = document.getElementById('score-distribution').getContext('2d');
    new Chart(scoreDistributionCtx, {
        type: 'bar',
        data: {
            labels: Object.keys(overallPerformanceData.score_distribution),
            datasets: [{
                label: 'Score Distribution',
                data: Object.values(overallPerformanceData.score_distribution),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Question Level Analysis
    document.getElementById('average-time-spent').innerText = Average Time Spent: ${questionAnalysisData.average_time_spent} seconds;
    document.getElementById('correct-rate').innerText = Correct Response Rate: ${(questionAnalysisData.correct_rate * 100).toFixed(2)}%;

    // Student Performance Trends
    const trendsList = document.getElementById('trends-list');
    studentTrendsData.forEach(trend => {
        const listItem = document.createElement('li');
        listItem.innerText = Assessment ${trend.assessment_id}: Score ${trend.score};
        trendsList.appendChild(listItem);
    });

    // Feedback and Improvement Areas
    const mistakesList = document.getElementById('common-mistakes');
    Object.entries(feedbackData.common_mistakes).forEach(([question_id, count]) => {
        const listItem = document.createElement('li');
        listItem.innerText = Question ${question_id}: ${count} mistakes;
        mistakesList.appendChild(listItem);
    });

    // Comparison Tools
    const comparisonCtx = document.getElementById('assessment-comparison').getContext('2d');
    new Chart(comparisonCtx, {
        type: 'bar',
        data: {
            labels: Object.keys(comparisonData.assessment_comparison),
            datasets: [{
                label: 'Assessment Comparison',
                data: Object.values(comparisonData.assessment_comparison),
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
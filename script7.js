document.addEventListener('DOMContentLoaded', () => {
    const visibilitySelect = document.getElementById('visibility');
    const accessListInput = document.getElementById('accessList');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const attemptsInput = document.getElementById('attempts');
    const feedbackTimingSelect = document.getElementById('feedbackTimingSelect');
    const gradeDisplaySelect = document.getElementById('gradeDisplaySelect');
    const notifyStartCheckbox = document.getElementById('notifyStart');
    const notifyCompletionCheckbox = document.getElementById('notifyCompletion');
    const notifyGradingCheckbox = document.getElementById('notifyGrading');
    const saveSettingsButton = document.getElementById('saveSettings');

    // Handle Save Settings button click
    saveSettingsButton.addEventListener('click', () => {
        const settings = {
            visibility: visibilitySelect.value,
            accessList: accessListInput.value,
            startDate: startDateInput.value,
            endDate: endDateInput.value,
            attempts: attemptsInput.value,
            feedbackTiming: feedbackTimingSelect.value,
            gradeDisplay: gradeDisplaySelect.value,
            notifications: {
                notifyStart: notifyStartCheckbox.checked,
                notifyCompletion: notifyCompletionCheckbox.checked,
                notifyGrading: notifyGradingCheckbox.checked
            }
        };

        console.log('Settings Saved:', settings);
        alert('Settings have been saved successfully!');
        // Here you would typically send the settings to the server or save them in local storage
    });
});
// File: js/editor.js

let startTime, totalTime = 0;
let isTracking = false;

function updateWordCount() {
    const text = document.getElementById('content').value;
    const wordCount = text.trim().split(/\s+/).length;
    document.getElementById('wordCount').textContent = `Words: ${wordCount}`;
}

function startTracking() {
    if (!isTracking) {
        isTracking = true;
        startTime = new Date();
        updateTimer();
    }
}

function stopTracking() {
    if (isTracking) {
        isTracking = false;
        totalTime += (new Date() - startTime) / 1000;
    }
}

function updateTimer() {
    if (isTracking) {
        const currentTime = Math.floor(totalTime + (new Date() - startTime) / 1000);
        document.getElementById('timeSpent').textContent = `Time: ${currentTime}s`;
        setTimeout(updateTimer, 1000);
    }
}

function publishPost() {
    // This function will be implemented in the next step
    console.log('Publishing post...');
}

document.getElementById('content').addEventListener('input', function() {
    updateWordCount();
    startTracking();
});

document.getElementById('publishBtn').addEventListener('click', function() {
    stopTracking();
    publishPost();
});

// Initialize
updateWordCount();
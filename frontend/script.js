// Visitor Counter Logic
function updateVisitorCounter() {
    let count = localStorage.getItem('page_view_count');
    if (!count) {
        count = 0;
    }
    count++;
    localStorage.setItem('page_view_count', count);
    document.getElementById('visitor-counter').textContent = "Visitor count: " + count;
}

// Call function when page loads
window.onload = updateVisitorCounter;

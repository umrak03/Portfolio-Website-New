// Project Details Popup
function showDetails(project) {
    const detailsDiv = document.getElementById('project-details');
    let html = '';

    if (project === 'voting') {
        html = `
            <h3>Fingerprint Voting System</h3>
            <ul>
                <li>Built with C#.NET and SQL Server.</li>
                <li>Prevents duplicate/unauthorized votes using fingerprint scanning.</li>
                <li>Features: Front-end design, database connectivity, voter data management.</li>
            </ul>
        `;
    } else if (project === 'storage') {
        html = `
            <h3>Storage Management Platform</h3>
            <ul>
                <li>Role-based access control and real-time inventory tracking.</li>
                <li>Features: Add/update items, stock level monitoring, reporting.</li>
            </ul>
        `;
    }

    detailsDiv.innerHTML = html;
    detailsDiv.style.display = 'block';
}

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
});
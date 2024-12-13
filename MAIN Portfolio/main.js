// Select all project cards
const projectCards = document.querySelectorAll('.project-Cards');

// Add click event listener to each card
projectCards.forEach(card => {
    card.addEventListener("click", function() {
        const targetUrl = card.getAttribute('data-href');  // Get the URL from the data-href attribute
        window.location.href = targetUrl;  // Redirect to the specified HTML page
    });
});


  // Add this script before the closing </body> tag
    // Select the .right-div element
    const rightDivElement = document.querySelector('.right-div');

    // Add event listener for click event
    rightDivElement.addEventListener('click', function() {
        // Toggle the class 'clicked' on click
        rightDivElement.classList.toggle('clicked');
    });


function showResponse(answer) {
    const responseMessage = document.getElementById('responseMessage');
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    
    if (answer === 'yes') {
        responseMessage.textContent = "Yay! 💕 I'm so happy you said yes! 😄 Let's make this Valentine's Day special!";
        
        // Trigger Confetti
        triggerConfetti();
    } else {
        
        // Apply animation to the "No" button when clicked
        noButton.classList.add('movingNoButton');
        
        // After animation, make it slide away
        setTimeout(function () {
            noButton.classList.remove('movingNoButton');
            noButton.classList.add('slideAwayNoButton');
            noButton.classList.add('slideBackNoButton');
        }, 500); // Wait for the initial move before sliding it away
    }
    
    // Disable the buttons after answering
    yesButton.disabled = false;
    noButton.disabled = false;
}

function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.style.display = 'block';
    
    // Create confetti pieces
    for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confettiPiece');
        
        // Set random positions and animations
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.animationDelay = Math.random() * 2 + 's';
        
        confettiContainer.appendChild(confettiPiece);
    }

    // Hide confetti after animation
    setTimeout(function () {
        confettiContainer.style.display = 'none';
        confettiContainer.innerHTML = ''; // Clear the confetti after use
    }, 3000); // Remove confetti after 3 seconds
}

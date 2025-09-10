
let globalCounter = 0;

// Function with parameters and return value
function calculateCircleArea(radius) {
    // Local variable - only accessible within this function
    const pi = Math.PI;
    return pi * radius * radius;
}

// Function demonstrating scope
function demonstrateScope() {
    // This variable has local scope
    let localCounter = 0;
    localCounter++;
    globalCounter++;
    
    console.log("Local counter:", localCounter);
    console.log("Global counter:", globalCounter);
    
    // Nested function demonstrating closure
    function innerFunction() {
        let innerVariable = "I'm inside innerFunction";
        console.log("Accessing global from inner function:", globalCounter);
        console.log("Inner variable:", innerVariable);
        // Note: We can't access localCounter here if we use 'let' in the inner function
    }
    
    innerFunction();
}

// Reusable text formatting function
function formatText(elementId, style) {
    const element = document.getElementById(elementId);
    
    if (!element) {
        console.error("Element not found:", elementId);
        return false; // Return value indicating failure
    }
    
    switch(style) {
        case 'highlight':
            element.classList.toggle('highlight');
            break;
        case 'uppercase':
            element.style.textTransform = element.style.textTransform === 'uppercase' ? 'none' : 'uppercase';
            break;
        case 'bold':
            element.style.fontWeight = element.style.fontWeight === 'bold' ? 'normal' : 'bold';
            break;
        default:
            console.warn("Unknown style:", style);
            return false;
    }
    
    return true; // Return value indicating success
}

// Part 3: Combined CSS & JavaScript

// Function to toggle animation class
function toggleAnimation(elementId, className) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle(className);
    }
}

// Function to trigger modal animation
function toggleModal(modalId, show) {
    const modal = document.getElementById(modalId);
    if (modal) {
        if (show) {
            modal.classList.add('visible');
        } else {
            modal.classList.remove('visible');
        }
    }
}

// Function to animate progress bar
function animateProgressBar(progressBarId, duration) {
    const progressBar = document.getElementById(progressBarId);
    if (!progressBar) return;
    
    let width = 0;
    progressBar.style.width = '0%';
    
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, duration / 100);
}

// DOM Content Loaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Part 2: JavaScript Function Demonstrations
    
    // Calculate area button
    document.getElementById('calculate-btn').addEventListener('click', function() {
        const radius = parseFloat(prompt("Enter the radius of the circle:"));
        
        if (!isNaN(radius)) {
            const area = calculateCircleArea(radius);
            document.getElementById('calculation-result').textContent = 
                `Area of circle with radius ${radius} is ${area.toFixed(2)}`;
        } else {
            alert("Please enter a valid number");
        }
    });
    
    // Scope demonstration button
    document.getElementById('scope-demo-btn').addEventListener('click', function() {
        demonstrateScope();
        document.getElementById('scope-result').textContent = 
            `Scope demo executed. Global counter is now: ${globalCounter}. Check console for details.`;
    });
    
    // Format text button
    document.getElementById('format-btn').addEventListener('click', function() {
        const success = formatText('format-text', 'highlight');
        if (success) {
            console.log("Text formatting applied successfully");
        }
    });
    
    // Part 3: Combined CSS & JavaScript Demonstrations
    
    // Animate box button
    document.getElementById('animate-box-btn').addEventListener('click', function() {
        toggleAnimation('js-animated-box', 'pause-animation');
        this.textContent = this.textContent === 'Animate Box' ? 'Resume Animation' : 'Animate Box';
    });
    
    // Flip card button
    document.getElementById('flip-card-btn').addEventListener('click', function() {
        toggleAnimation('flip-card', 'flipped');
    });
    
    // Modal buttons
    document.getElementById('open-modal-btn').addEventListener('click', function() {
        toggleModal('demo-modal', true);
    });
    
    document.getElementById('close-modal-btn').addEventListener('click', function() {
        toggleModal('demo-modal', false);
    });
    
    // Close modal if clicked outside content
    document.getElementById('demo-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            toggleModal('demo-modal', false);
        }
    });
    
    // Progress bar buttons
    document.getElementById('start-progress-btn').addEventListener('click', function() {
        animateProgressBar('animated-progress', 3000);
    });
    
    document.getElementById('reset-progress-btn').addEventListener('click', function() {
        document.getElementById('animated-progress').style.width = '0%';
    });
});

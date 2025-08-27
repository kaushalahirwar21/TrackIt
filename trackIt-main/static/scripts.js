document.getElementById('studentButton').addEventListener('click', () => {
  document.getElementById('students').style.display = 'block';
  document.getElementById('teachers').style.display = 'none';
});

document.getElementById('teacherButton').addEventListener('click', () => {
  document.getElementById('teachers').style.display = 'block';
  document.getElementById('students').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
  // Apply page transition effect
  document.body.classList.add('page-loaded');
  
  // Add animation to form inputs
  const formInputs = document.querySelectorAll('input, select');
  formInputs.forEach(input => {
    // Add floating label functionality
    if (input.parentElement.classList.contains('form-floating')) {
      input.setAttribute('placeholder', ' ');
    }
    
    // Add focus animation
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
  });
  
  // Button hover effect
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
      this.classList.add('hover');
    });
    
    button.addEventListener('mouseout', function() {
      this.classList.remove('hover');
    });
  });
  
  // Table row hover effect
  const tableRows = document.querySelectorAll('tbody tr');
  tableRows.forEach(row => {
    row.addEventListener('mouseover', function() {
      this.style.transform = 'translateX(5px)';
    });
    
    row.addEventListener('mouseout', function() {
      this.style.transform = 'translateX(0)';
    });
  });
  
  // Original functionality
  if (document.getElementById('studentButton')) {
    document.getElementById('studentButton').addEventListener('click', () => {
      document.getElementById('students').style.display = 'block';
      document.getElementById('teachers').style.display = 'none';
    });
  }

  if (document.getElementById('teacherButton')) {
    document.getElementById('teacherButton').addEventListener('click', () => {
      document.getElementById('teachers').style.display = 'block';
      document.getElementById('students').style.display = 'none';
    });
  }
  
  // Add form submission loading indicator
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function() {
      const submitButton = this.querySelector('button[type="submit"]');
      if (submitButton) {
        // Save original button text
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.innerHTML = '<div class="spinner-small"></div> Processing...';
        submitButton.disabled = true;
        
        // For demonstration purposes - reset button after 2 seconds 
        // In real application, this would be handled in the response callback
        setTimeout(() => {
          submitButton.innerHTML = originalText;
          submitButton.disabled = false;
        }, 2000);
      }
    });
  });
});
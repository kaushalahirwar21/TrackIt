document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById('name').value,
    rollNumber: document.getElementById('rollNumber').value,
    course: document.getElementById('course').value,
    mobileNumber: document.getElementById('mobileNumber').value,
    fees: getFees(document.getElementById('course').value)
  };

  fetch('http://localhost:5000/save_student', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data => alert(data.message))
  .catch(err => console.error(err));
});

function getFees(course) {
  switch (course) {
    case 'C': return 2000;
    case 'C++': return 3000;
    case 'Python': return 40000;
    case 'JavaScript': return 50000;
  }
}

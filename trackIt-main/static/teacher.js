function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      document.getElementById('login').style.display = 'none';
      document.getElementById('studentDetails').style.display = 'block';
      fetch('http://localhost:5000/students')
        .then(res => res.json())
        .then(students => {
          const list = document.getElementById('studentList');
          list.innerHTML = '';
          students.forEach(s => {
            const li = document.createElement('li');
            li.textContent = `${s.name} (${s.roll_number}) - ${s.course} - ₹${s.fees}`;
            list.appendChild(li);
          });
        });
    } else {
      alert("Invalid login");
    }
  });

  return false;
}

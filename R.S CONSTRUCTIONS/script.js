const scriptURL = 'https://script.google.com/macros/s/AKfycbwrSUd8x35F351HYe1tIl8n7T--rUin05Fz5yLodLx11oZwFfxngecUmofojeQJ0Sec/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Thank you for contacting us! We will get back to you soon.');
      document.getElementById('contact-form').reset();
    } else {
      alert('Please fill out all fields.');
    }
  });

  

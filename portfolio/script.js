const scriptURL = 'https://script.google.com/macros/s/AKfycbw52sAI2PjT2BU5gwMEHHeR3gwtTi7gubiF7yi_m50GZEKc6GzTEnf_FoLYl4rpOZ2d/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert("Thank you for reaching out, " + name + ". Your message has been sent!");
      document.getElementById("contact-form").reset();
    } else {
      alert("Please fill in all the fields.");
    }
  });
  
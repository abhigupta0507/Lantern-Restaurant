window.onload = function () {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm("service_yrvt4re", "template_canjdlq", this).then(
          () => {
            alert('Message Sent!!');
          },
          (error) => {
            alert('Failed to send message due to',error);
          }
        );
      });
  };
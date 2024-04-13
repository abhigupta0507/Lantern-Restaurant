window.onload = function () {
    document
      .getElementById("reserve-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm("service_yrvt4re", "template_ugu7e5d", this).then(
          () => {
            alert('Table Booked!!');
          },
          (error) => {
            alert('Failed to Book due to',error);
          }
        );
      });
  };
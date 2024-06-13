let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;
  const offset = -slideIndex * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
  slideIndex += direction;
  showSlide(slideIndex);
}

showSlide(slideIndex);

document.querySelectorAll(".card button").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Thank you for signing up!");
  });
});

document.querySelectorAll(".faq-tag").forEach(function (faq) {
  faq.addEventListener("click", function () {
    faq.classList.toggle("active");
  });
});

function handleFormSubmission() {
  emailjs.init("wZm83g8b4W-PGdkln");

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const templateParams = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value,
    };

    emailjs
      .send("service_qgd5a1l", "template_6k2qq5b", templateParams)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Mensagem enviada com sucesso!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Houve um erro ao enviar a mensagem. Tente novamente.");
      });
  });
}

const form = document.querySelector("form"),
  result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = Object.fromEntries(new FormData(form).entries());
  let value = (data.total / (data.days * 4 * data.hours)) +
    (data.holidays * data.days * data.hours);

  result.innerHTML = `O valor por hora do seu freelance será de <strong>R$${value.toFixed(2)}</strong>`;
  result.classList.add("is-active");
})
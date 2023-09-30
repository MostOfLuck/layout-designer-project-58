
document.addEventListener("DOMContentLoaded", function () {
  const card1 = document.querySelector(".card1");

  card1.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Был клик");

    const ikeaSection = document.querySelector(".ikea-effect"); // Используйте класс секции, а не ID

    if (ikeaSection) { // Проверка на существование секции
      ikeaSection.scrollIntoView({ behavior: "smooth", block: "start" }); // Прокручиваем к началу секции
    }
  });
});

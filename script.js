document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 150, density: { enable: true, value_area: 800 } },
      color: { value: ["#52d772", "#f27a9b"] },
      shape: { type: "polygon" },
      opacity: { value: 0.8, random: true },
      size: { value: 3, random: true },
      move: { enable: true, speed: 3, direction: "right", out_mode: "out" },
    },
  });

  new Typed("#texto", {
    strings: ["Bem-vindo!", "Meu nome é Julia, sou desenvolvedora Front-end."],
    typeSpeed: 65,
    backSpeed: 25,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    showCursor: false,
  });

  const firstSquare = document.querySelector(".square.one");
  const lastSquare = document.querySelector(".square.nine");

  setInterval(() => {
    firstSquare.classList.toggle("pink-border");
    lastSquare.classList.toggle("green-border");
  }, 2000);

  const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const elements = document.querySelectorAll(".hidden");

  elements.forEach((element) => myObserver.observe(element));

  const arrowRigth = document.querySelector(".seta-direita");
  const arrowLeft = document.querySelector(".seta-esquerda");

  let pagOne = document.querySelector(".pag-one");
  let pagTwo = document.querySelector(".pag-two");
  let pagThree = document.querySelector(".pag-three");
  let pagFour = document.querySelector(".pag-four");

  arrowRigth.addEventListener("click", () => {
    if (!pagOne.classList.contains("pag-escondida")) {
      pagOne.classList.add("pag-escondida");
      pagTwo.classList.remove("pag-escondida");
    } else if (!pagTwo.classList.contains("pag-escondida")) {
      pagTwo.classList.add("pag-escondida");
      pagThree.classList.remove("pag-escondida");
    } else if (!pagThree.classList.contains("pag-escondida")) {
      pagThree.classList.add("pag-escondida");
      pagFour.classList.remove("pag-escondida");
      arrowRigth.classList.add("seta-direita-show");
    }

    arrowLeft.classList.add("seta-esquerda-ativa");
  });

  arrowLeft.addEventListener("click", () => {
    if (!pagFour.classList.contains("pag-escondida")) {
      pagFour.classList.add("pag-escondida");
      pagThree.classList.remove("pag-escondida");
      arrowRigth.classList.remove("seta-direita-show");
    } else if (!pagThree.classList.contains("pag-escondida")) {
      pagThree.classList.add("pag-escondida");
      pagTwo.classList.remove("pag-escondida");
    } else if (!pagTwo.classList.contains("pag-escondida")) {
      pagTwo.classList.add("pag-escondida");
      pagOne.classList.remove("pag-escondida");
      arrowLeft.classList.remove("seta-esquerda-ativa");
    }
  });

  const menuBtn = document.querySelector("#menu-btn");
  const navMenu = document.querySelector(".nav-list");

  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
});

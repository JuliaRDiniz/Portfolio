document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
particles: {
    number: { value: 180, density: { enable: true, value_area: 800 } },
    color: { value: ["#52d772", "#f27a9b", "#ffffff"] },
    shape: { type: "circle" },
    opacity: { 
      value: 1, 
      random: true, 
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: { value: 2.5, random: true },
    line_linked: { enable: false },
    move: { enable: true, speed: 0.5, direction: "top", out_mode: "out" }
  }
  });

new Typed("#texto", {
  strings: ["Olá, meu nome é Julia Diniz. <br>Sou QA com background em desenvolvimento."],
  typeSpeed: 50,
  startDelay: 500,
  loop: false,
  showCursor: false,
});

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
  let pagFive = document.querySelector(".pag-five");

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
    }else if (!pagFour.classList.contains("pag-escondida")) {
      pagFour.classList.add("pag-escondida");
      pagFive.classList.remove("pag-escondida");
      arrowRigth.classList.add("seta-direita-show");
    }

    arrowLeft.classList.add("seta-esquerda-ativa");
  });

  arrowLeft.addEventListener("click", () => {
  if (!pagFive.classList.contains("pag-escondida")) {
    pagFive.classList.add("pag-escondida");
    pagFour.classList.remove("pag-escondida");
    arrowRigth.classList.remove("seta-direita-show");
  } else if (!pagFour.classList.contains("pag-escondida")) {
    pagFour.classList.add("pag-escondida");
    pagThree.classList.remove("pag-escondida");
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

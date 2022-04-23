window.addEventListener("DOMContentLoaded", () => {
  // LOADER START
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = 0;

    setTimeout(function () {
      loader.style.display = "none";
    }, 500);
  }, 1000);

  // LOADER END

  const menuBtn = document.querySelector(".iconning_menu"),
    body = document.querySelector("body"),
    header = document.querySelector(".header"),
    btnX = document.querySelector(".x_btn"),
    menu = document.querySelector(".data_menu"),
    bigCar = document.querySelector(".section_block-right"),
    listMenu = document.querySelectorAll(".data_menu li");

  //open menu start++++++++++++++++++++++++++
  menuBtn.addEventListener("click", showBlock);
  function showBlock() {
    menu.style.transform = "translateX(0)";
    menu.style.transition = "0.5s";
    body.style.overflow = "hidden";
    header.style.background = "rgb(169 169 169 / 53%)";
    header.style.height = "100%";

    // Menu list in clicking be close start*****************
    listMenu.forEach((itemes) => {
      itemes.addEventListener("click", hideBlock);
    });
    // Menu list in clicking be close end
    // window click close menu start--------------------
    header.addEventListener("click", (e) => {
      if (e.target === header) {
        hideBlock();
      }
    });
  }
  //open menu end+++++++++++++++++++++++++++++

  //close menu start****************************
  btnX.addEventListener("click", hideBlock);
  function hideBlock() {
    menu.style.transform = "translateX(100%)";
    menu.style.transition = "0.5s";
    body.style.overflow = "";
    header.style.background = "";
    header.style.height = "";
  }
  //close menu end*******************************

  // Track drive setTimeOut start

  function driveCar() {
    bigCar.style.transform = "translateX(0%)";
    bigCar.style.transition = "1s";
    clearInterval(modalTimer);
  }
  let modalTimer = setTimeout(driveCar, 1500);

  // MODAL
  const allModalBtn = document.querySelector(".section_block-left-btn"),
    modal = document.querySelector(".modal"),
    modalClose = document.querySelector("[data-close]");

  allModalBtn.addEventListener("click", openModal);

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimer);
  }

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // const modalTimer = setTimeout(openModal, 5000);

  function showMyModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showMyModalByScroll);
    }
  }
  window.addEventListener("scroll", showMyModalByScroll);
  // MODAL END
});

// window resize menu start "It's not worked"
// $(window).resize(function () {
//   if ($(window).width() < 600) {
//     $(".data_menu").remove();
//   }
// });
// window resize menu end

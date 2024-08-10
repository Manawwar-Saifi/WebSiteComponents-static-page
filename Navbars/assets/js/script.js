$(document).ready(function () {
    let menu = document.querySelector("#sidebar .menu");
  
    $(menu).click(function () {
      $("#nav-icon4").toggleClass("open");
    });
  });
  
  function navBarWithSideAnimation() {
    let menu = document.querySelector("#sidebar .menu");
    let closeBtn = document.querySelector("#close-button-sidebar");
    let sidebar = document.querySelector("#sidebar");
    let hiddenDiv = document.querySelector("#hide-div-menu");
    let logoImage = document.querySelector("#header-section #logo-img");
    let hideDivMenu = document.querySelector("#hide-div-menu .menuList");
  
    menu.addEventListener("click", () => {
      hiddenDiv.classList.toggle("hide-div-menu");
  
      sidebar.classList.toggle("border-sider");
    });
  }
  
  navBarWithSideAnimation();







  
function logoAndSidebarAnimation() {
    let tildeLogo = document.querySelector(".tilde-logo");
    let menuItem = document.querySelectorAll("#sidebar .menu #nav-icon4 span");
    let sidebar = document.querySelector("#sidebar");
    let headerSectionImg = document.querySelector("#header-section img");
  
    menuItem.forEach((item) => {
  
  
      gsap.to(item, {
        backgroundColor: "white",
        duration: 1,
        scrollTrigger: {
          scroller: "body",
          trigger: '.about-section',
          scrub: true,
          start: "top 0%",
          end:"bottom 0%",
        },
      });
  
  
  
      gsap.to(sidebar, {
        backgroundColor: "#885220",
        color:"white",
        duration: 1,
        scrollTrigger: {
          scroller: "body",
          trigger: '.about-section',
          scrub: true,
          start: "top -15%",
          end:"bottom 0%",
        },
      });
  
  
  
  
  
      gsap.to(tildeLogo, {
        opacity:1,
        duration: 1,
        scrollTrigger: {
          scroller: "body",
          trigger: '.about-section',
          scrub: true,
          start: "top 20%",
          end:"bottom 0%",
        },
      });
  
  
  
      gsap.to(headerSectionImg, {
        opacity:0,
        duration: 1,
        scrollTrigger: {
          scroller: "body",
          trigger: '.about-section',
          scrub: true,
          start: "top 20%",
          end:"bottom 0%",
        },
      });
  
  
  
  
  
  
  
    });
  
  
  }
  logoAndSidebarAnimation();
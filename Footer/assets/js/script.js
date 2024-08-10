gsap.registerPlugin(ScrollTrigger);











// Phone Nav
function phoneNav() {
  let menu = document.querySelector("#nav i");
  let cross = document.querySelector("#full i");

  let tl = gsap.timeline();

  tl.to("#full", {
    right: "0",
    duration: 0.5,
  });

  tl.from("#full h4", {
    x: 150,
    duration: 0.5,
    stagger: 0.1,
    opacity: 0,
  });

  tl.from("#full i", {
    opacity: 0,
  });

  tl.pause();

  menu.addEventListener("click", function () {
    tl.play();
  });
  cross.addEventListener("click", function () {
    tl.reverse();
  });
}
// phoneNav()

// Cursor
function cursor() {
  var main = document.querySelector("body");
  var cursor = document.querySelector("#cursor");
  main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.clientX - 10,
      y: dets.clientY - 10,
      ease: "back.out",
      duration: 0.6,
    });
  });
}
cursor();







function hoverOnWork() {
  let box = document.querySelectorAll("#work a");
  let boxes = Array.from(box);
  let cursor = document.querySelector("#cursor");

  boxes.map((item) => {
    item.addEventListener("mouseenter", () => {
      cursor.innerHTML = "view";
      gsap.to(cursor, {
        border: "1px solid white",
        width: "100px",
        height: "100px",
        backgroundColor: "black",
        color: "white",
        fontSize: "1.8rem",
        duration: 0.5,
        mixBlendMode: "normal",
      });
    });

    item.addEventListener("mouseleave", () => {
      cursor.innerHTML = "";
      gsap.to(cursor, {
        width: "20px",
        height: "20px",
        backgroundColor: "white",
        duration: 0.5,
        border: "none",
        mixBlendMode: "",
      });
    });
  });
}

hoverOnWork();










// Footer
function footer() {
  var cursor = document.querySelector("#cursor");
  let footer1 = document.querySelector("#footermain");

  footer1.addEventListener("mouseenter", function (dets) {
    gsap.to(cursor, {
      x: dets.clientX - 10,
      y: dets.clientY - 10,
      ease: "back.out",
      duration: 0.6,
      background: "white",
      width: "30px",
      height: "30px",
    });
  });
  footer1.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor, {
      duration: 0.3,
      width: "20px",
      height: "20px",
      border: "none",
    });
  });
}

footer();








function GreenBox() {
  var cursor = document.querySelector("#cursor");
  let li = document.querySelectorAll(".greenBox .ul-li li");
  let greenBox = document.querySelector("#thirdPage .greenBox");
  let heading = document.querySelector(".greenBox h2");

  greenBox.addEventListener("mouseenter", () => {
    
    gsap.to(cursor, {
      duration:.4,
      backgroundColor: "black",
      color: "white",
      fontSize: "1.2rem",
      mixBlendMode: "normal",
      width: "70px",
      height: "70px",
      innerHTML:"view",
    });
    gsap.to(heading, {
      color: "black",
      duration: 0.5,
      y: 15,
    });
    gsap.to(li, {
      ease: "power2.inOut",
      visibility: "visible",
      x: 90,
      y: 10,
      duration: 0.5,
      opacity: 1,
      textAlign: "left",
      stagger: 0.1,
    });
    gsap.to(greenBox, {
      backgroundColor: "#ffc5c5",
      duration: 1,
      opacity: 1,
      ease: "power2.inOut",
    });
  });

  greenBox.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      innerHTML:"",
      width: "20px",
      height: "20px",
      ease: "power2.inOut",
      mixBlendMode: "difference",
      backgroundColor:""
    });
    gsap.to(heading, {
      color: "#797979",
      duration: 0.5,
      y: -10,
    });
    gsap.to(greenBox, {
      backgroundColor: "#f0f0f0",
      delay: 0.2,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(li, {
      ease: "power2.inOut",
      opacity: 0,
      visibility: "hidden",
      duration: 0.8,
      x: 20,
      stagger: 0.1,
    });
  });
}

function BlueBox() {
  var cursor = document.querySelector("#cursor");
  let li = document.querySelectorAll("#thirdPage .blueBox .ul-li li");
  let blueBox = document.querySelector("#thirdPage .blueBox");
  let heading = document.querySelector(".blueBox h2");

  blueBox.addEventListener("mouseenter", () => {
  
    gsap.to(cursor, {
      duration:.4,
      backgroundColor: "black",
      color: "white",
      fontSize: "1.2rem",
      mixBlendMode: "normal",
      width: "70px",
      height: "70px",
      innerHTML:"view",
    });
    gsap.to(heading, {
      color: "black",
      duration: 0.5,
      y: 15,
    });
    gsap.to(li, {
      visibility: "visible",
      x: 90,
      y: 10,
      duration: 0.5,
      opacity: 1,
      textAlign: "left",
      stagger: 0.1,
    });
    gsap.to(blueBox, {
      backgroundColor: "#ffebd8",
      duration: 1,
      opacity: 1,
    });
  });

  blueBox.addEventListener("mouseleave", () => {
    
    gsap.to(cursor, {
      backgroundColor: "",
      duration:.3,
      innerHTML:"",
      width: "20px",
      height: "20px",
      mixBlendMode: "difference",
      
    });
    gsap.to(heading, {
      color: "#797979",
      duration: 0.5,
      y: -10,
    });
    gsap.to(blueBox, {
      backgroundColor: "#f0f0f0",
      delay: 0.2,
      duration: 1,
    });
    gsap.to(li, {
      opacity: 0,
      visibility: "hidden",
      duration: 0.8,
      x: 20,
      stagger: 0.1,
    });
  });
}

function RedBox() {
  var cursor = document.querySelector("#cursor");
  let li = document.querySelectorAll(".redBox .ul-li li");
  let heading = document.querySelector(".redBox h2");
  let redBox = document.querySelector("#thirdPage .redBox");

  redBox.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      duration:.4,
      backgroundColor: "black",
      color: "white",
      fontSize: "1.2rem",
      mixBlendMode: "normal",
      width: "70px",
      height: "70px",
      innerHTML:"view",
    });
    gsap.to(heading, {
      color: "black",
      duration: 0.5,
      y: 15,
    });
    gsap.to(li, {
      visibility: "visible",
      x: 90,
      y: 10,
      duration: 0.5,
      opacity: 1,
      textAlign: "left",
      stagger: 0.1,
    });
    gsap.to(redBox, {
      backgroundColor: "#c7dca7",
      duration: 1,
      opacity: 1,
    });
  });

  redBox.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      backgroundColor: "",
      width: "20px",
      height: "20px",
      mixBlendMode: "difference",
      innerHTML:"",
    });
    gsap.to(heading, {
      color: "#797979",
      ease: "power2.inOut",
      duration: 0.5,
      y: -10,
    });
    gsap.to(redBox, {
      backgroundColor: "#f0f0f0",
      delay: 0.2,
      duration: 0.5,
    });
    gsap.to(li, {
      ease: "power2.inOut",
      opacity: 0,
      visibility: "hidden",
      duration: 0.8,
      x: 20,
      stagger: 0.1,
    });
  });
}

BlueBox();
GreenBox();
RedBox();








function marquee1() {
  var swiper = new Swiper(".marquee1", {
    spaceBetween: 0,
    slidesPerView: 3,
    centeredSlides: true,
    speed: 4000,
    autoplay: {
      delay: 0,
      reverseDirection: true,
    },
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,

    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },

  });
}
marquee1();

function marquee2() {
  var swiper = new Swiper(".marquee2", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 4000,
    autoplay: {
      delay: 0,
    },
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,
  });
}
marquee2();









function navCloseDiv() {
  let closeIcon = document.querySelector(
    "#firstPage #navHead #right .img-div i"
  );
  let mainDiv = document.querySelector("#firstPage #right .bluediv");
  let menu = document.querySelector("#firstPage #right .menu-icon");
  let commonDivs = document.querySelectorAll(".bluediv2 .bluediv-2-com");
  let cursor = document.querySelector("#cursor")

  // console.log(commonDivs,"::commonDivs")
  mainDiv.style.transform = "translateY(-140%)";
  commonDivs[0].style.transform = "translateY(-110%)";
  commonDivs[1].style.transform = "translateY(-110%)";

  closeIcon.addEventListener("click", () => {
    gsap.to(cursor,{
      // height:"25px",
      // width:"25px",
      display:"flex"
    })

    gsap.to(mainDiv, {
      transform: "translateY(-140%)",
      duration: 0.7,
    });
    gsap.to(commonDivs, {
      transform: "translateY(-100%)",
      duration: 0.5,
      stagger: 0.5,
      backgroundColor: "black",
    });
  });

  menu.addEventListener("click", () => {
    gsap.to(mainDiv, {
      display: "block",
      transform: "translateY(0%)",
      duration: 0.7,
    });

    gsap.to(commonDivs, {
      transform: "translateY(0%)",
      duration: 0.5,
      stagger: 0.2,
    });



    gsap.to(cursor,{
      width:"25px",
      height:"25px",
    })
  });
}

navCloseDiv();



// hover on the menu
function hoverOnMenu() {
  let menu = document.querySelector("#firstPage #right .menu-icon");
  var cursor = document.querySelector("#cursor");
  menu.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      backgroundColor: "",
      width: "0px",
      height: "0px",
      duration: 0.5,
      ease: "back.out",
    });
    gsap.to(menu, {
      backgroundColor: "#74b6e3",
      duration: 0.5,
      color: "black",
      padding: "0.5rem 1rem",
      ease: "back.out",
      color:"white",
    });
  });
  menu.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      backgroundColor: "",
      width: "20px",
      height: "20px",
      duration: 1,
    });
    gsap.to(menu, {
      backgroundColor: "",
      duration: 1,
      color: "black",
      padding: "0",
      ease: "back.out",
    });
  });
}


hoverOnMenu();







// whole open menu mouse /Move

function hidingCursorOnOpenMenu() {
  var cursor = document.querySelector("#cursor");
  let mainDiv = document.querySelector("#firstPage #right .bluediv");
  let closeMenuIcon = document.querySelector(
    "#firstPage #navHead .bluediv .img-div i"
  );

  mainDiv.addEventListener("mousemove", (dets) => {
    gsap.to(closeMenuIcon, {
      x: dets.clientX - 50,
      y: dets.clientY - 50,
      ease: "elastic.inOut  ",
      duration: 1,
    });
  });
  mainDiv.addEventListener("mousemove", (dets) => {

   


    gsap.to(closeMenuIcon, {
      x: dets.clientX - 50,
      y: dets.clientY - 50,
      ease: "elastic.inOut  ",
      duration: 1,
    });
  });
 
}

if(screen.width > 375 && screen.width<1024){
  console.log(null)
}
else{
  hidingCursorOnOpenMenu();
}







function leftDivInBlueDiv2() {
  let leftBlue2 = document.querySelector(
    "#firstPage #navHead .bluediv .bluediv2 "
  );
  let li = document.querySelectorAll(
    "#firstPage #navHead .bluediv .bluediv2 .left li"
  );
  let closeMenuIcon = document.querySelector(
    "#firstPage #navHead .bluediv .img-div i"
  );
  var cursor = document.querySelector("#cursor");
  

  //hidden menu hover on li


  li.forEach((item)=>{
    item.addEventListener("mouseenter",()=>{
      gsap.to(cursor,{
        width:"10px",
        height:"10px",

      })
    })
    item.addEventListener("mouseleave",()=>{
      gsap.to(cursor,{
        width:"",
        height:""
      })
    })
  })





  leftBlue2.addEventListener("mouseenter", (dets) => {
  
    gsap.to(closeMenuIcon, {
      backgroundColor:"black",
      fontSize:".1rem",
      duration: .3,
      backgroundColor:"white",
      x: dets.clientX - 50,
      y: dets.clientY - 50,
      ease: "elastic.inOut  ",
      display:"none"
      
    });

    gsap.to(cursor,{
      display:"flex"
    })
   
  });

  leftBlue2.addEventListener("mouseleave", (dets) => {
    
    gsap.to(cursor,{
      display:"none"
    })

 
    gsap.to(closeMenuIcon, {
      backgroundColor:"",
      
      duration: .3,
      fontSize:"2rem",
      backgroundColor:"#74b6e3",
      x: dets.clientX - 70,
      y: dets.clientY - 70,
      display:"flex"

    });

    

  });
}





function rightDivInBlueDiv2() {

  let closeMenuIcon = document.querySelector(
    "#firstPage #navHead .bluediv .img-div i"
  );
  let cursor = document.querySelector(
    "#cursor"
  );
  let rightBlue2 = document.querySelector(
    "#firstPage #navHead .bluediv .bluediv2"
  );
  let li = document.querySelectorAll(
    "#firstPage #navHead .bluediv .bluediv2 .right li"
  );

  li.forEach((item)=>{


    item.addEventListener("mouseenter",()=>{
      gsap.to(item,{
        paddingLeft:"2rem",
        duration:.3
      })
      gsap.to(closeMenuIcon,{
        display:"none"
      })
      gsap.to(cursor,{
        width:"10px",
        height:"10px",

      })
    })
    item.addEventListener("mouseleave",()=>{
      gsap.to(cursor,{
        width:"",
        height:""
      })
      gsap.to(item,{
        duration:.3,
        padding:""

      })
    })
  })


  
  rightBlue2.addEventListener("mouseenter", (dets) => {
   
    
    gsap.to(closeMenuIcon, {
     
      duration: .3,
       display:"none",
      fontSize:".1rem",
      backgroundColor:"white",
      x: dets.clientX - 50,
      y: dets.clientY - 50,
      ease: "elastic.inOut  ",
      backgroundColor:"black"
     
      
    });

    gsap.to(cursor,{
      display:"flex",
      width:"20px",
      height:"20px"
    })
  });

  rightBlue2.addEventListener("mouseleave", (dets) => {
    gsap.to(cursor,{
      display:"none"
    })

 
    gsap.to(closeMenuIcon, {
      backgroundColor:"",
      duration: .3,
      fontSize:"2rem",
      backgroundColor:"#74b6e3",
      x: dets.clientX - 70,
      y: dets.clientY - 70,
      display:"flex"

    });
  });




}


if(screen.width > 375 && screen.width<1024){
  console.log(null)
}
else
{
  leftDivInBlueDiv2();
  rightDivInBlueDiv2();
}


  //hidden menu hover on li




function onFooterAnimation()
{
  
  gsap.to('#footermain #footerFisrt,#footermain #footerSecond',{
    transform:'translateY(0%)',
    duration:2,
    scrollTrigger:{
      scroller:"body",
      trigger:"#footermain",
      scrub:5,
      start:"bottom 10%",
      end:"top 00%"

    }

  })

}


 

onFooterAnimation()





// work scroll effect


function WorkScroll()
{ 

//   let workDiv = document.querySelector('#work');
  let elem = document.querySelector('.containerBox'); 

  gsap.to(elem, {
    // transform: 'translateX(-70%)',
    x:-1500,
    duration:2,
    ease: "bounce.in-out",
    
    scrollTrigger:{
        Trigger:'#work .boxes', // start the animation when ".box" enters the viewport (once)
        start: 'top -200%', // when the top of the trigger hits the top of the viewport
        end: '+=475%',
        scrub:2.5,
    },
        
  });


}


if(screen.width > 375 && screen.width<700){
  console.log(null)
}

else{ 
  WorkScroll();
}

// hoverOnTheBlog

function BlogHover()
{
  let divs = document.querySelectorAll('#blogSec .mainBlogDiv')
  var cursor = document.querySelector("#cursor");
  
  divs.forEach((item)=>{
    item.addEventListener("mouseover",()=>{

      gsap.to(cursor,{
        duration:.3,
        width:"35px",
        height:"35px",
      })

    })
    item.addEventListener("mouseleave",()=>{

      gsap.to(cursor,{
        duration:0.3,
        width:"20px",
        height:"20px",
        
      })

    })
  })


}

BlogHover()




$(window).on("resize", function () {
  location.reload();
});

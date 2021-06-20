window.addEventListener("load" , () =>{
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-section").classList.add("active");
  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(() =>{
    document.querySelector(".page-loader").style.display="none";
  },600)
});


const navToggler= document.querySelector(".nav-toggler");
navToggler.addEventListener("click" , ()=>{
  hidesection();
  togglenavbar();
  document.body.classList.toggle("hide-scrolling");
});
function hidesection(){
  document.querySelector("section.active").classList.toggle("fade-out");
}

function togglenavbar(){
  document.querySelector(".header").classList.toggle("active");
}

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
  if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target= e.target.getAttribute("data-target");
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("view-project-btn")){
    toggleportfoliopopup();
    document.querySelector(".portfolio-popup").scrollTo(0,0);
    portfolioitemdetails(e.target.parentElement);
  }
  });

function toggleportfoliopopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
  }
document.querySelector(".pp-close").addEventListener("click", toggleportfoliopopup)

document.addEventListener("click" , (e) =>{
  if(e.target.classList.contains("pp-inner")){
    toggleportfoliopopup();
  }
});

function portfolioitemdetails(portfolioItem){
  document.querySelector(".pp-thumbnail img").src=
  portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

  document.querySelector(".pp-header h3").innerHTML=
  portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML=
  portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

// achievement popup
document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("view-project-btnac")){
    toggleacpopup();
    document.querySelector(".achieve-popup").scrollTo(0,0);
    acitemdetails(e.target.parentElement);
  }
  });

function toggleacpopup(){

    document.querySelector(".achieve-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
  }
document.querySelector(".ac-close").addEventListener("click", toggleacpopup)

document.addEventListener("click" , (e) =>{
  if(e.target.classList.contains("ac-inner")){
    toggleacpopup();
  }
});

function acitemdetails(acItem){
  document.querySelector(".ac-thumbnail img").src=
  acItem.querySelector(".ac-item-thumbnail img").src;

  document.querySelector(".ac-header h3").innerHTML=
  acItem.querySelector(".ac-item-title").innerHTML;

  document.querySelector(".ac-body").innerHTML=
  acItem.querySelector(".ac-item-details").innerHTML;
}

document.addEventListener("click" , (e) =>{
  if(e.target.classList.contains("link-item") && e.target.hash !== ""){
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
    if(e.target.classList.contains("nav-item")){
      togglenavbar();
    }
    else{
      hidesection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() =>{
      document.querySelector("section.active").classList.remove("active","fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0,0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    },500);
  }
});

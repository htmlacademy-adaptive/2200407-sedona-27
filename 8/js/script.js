let navMain=document.querySelector(".navigation"),navToggle=document.querySelector(".navigation__button-toggle");navMain.classList.remove("navigation--nojs"),navToggle.addEventListener("click",(function(){navMain.classList.contains("navigation--closed")?(navMain.classList.remove("navigation--closed"),navMain.classList.add("navigation--opened")):(navMain.classList.add("navigation--closed"),navMain.classList.remove("navigation--opened"))}));
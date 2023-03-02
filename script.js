var tablinks = document.getElementsByClassName("tab-links");
   var tabcontents = document.getElementsByClassName("tab-contents");

   function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
   }


   var sidemeu = document.getElementById("sideMenu");

   function openMenu(){
       sidemeu.style.right = "0";
   }

   function closeMenu(){
       sidemeu.style.right = "-600px"
   }

   var typed = new Typed(".auto-type",{
    strings: ["","Digital Marketing", "Shopify", "Social Media Marketing"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
   })
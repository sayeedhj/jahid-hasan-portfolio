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
    strings: ["","Digital Marketing", "Shopify Dropshipping", "Social Media Marketing"],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true
   })



   const scriptURL = 'https://script.google.com/macros/s/AKfycbyA7SjKAom-XkynnRKLTEvBOr-OdGnEFhiRUKrHINLThO9TPdRY1rEVUmsCaZPPT_Y1WQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  
  })
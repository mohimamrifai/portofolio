const gantiSwitch = document.getElementById('switch')
const portofolio_ats = document.getElementById('portofolio-ats')
const portofolio_web = document.getElementById('portofolio-web')


gantiSwitch.addEventListener('click', () => {
    portofolio_ats.classList.toggle('non-active')
    portofolio_web.classList.toggle('non-active')
})


function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

// Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
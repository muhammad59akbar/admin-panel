// const notification = document.querySelector('.bell-dropdown')

// notification.addEventListener('click', function(activenotif){
//     if(activenotif.target.classList.contains('dropdown-notification') && !activenotif.target.classList.contains('visible-notification')) {
//         notification.querySelector('.visible-notification').classList.remove('visible-notification');
//         event.target.classList.add('.visible-notification')

//     }

//     console.log(activenotif)
// })

// notification
const notification = document.querySelector(".bell-dropdown");
const activenav = document.querySelector(".dropdown-notification");

notification.addEventListener("click", function () {
  activenav.classList.toggle("visible-notification");
});

// sidebar
const menuBar = document.querySelector("#main-content nav .bx.bx-menu");
const sidebar = document.getElementById("sidebar");

menuBar.addEventListener("click", function () {
  sidebar.classList.toggle("hide");
  console.log(menuBar);
});

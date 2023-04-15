const burger = document.querySelector('.burger');
const darkburger = document.querySelector('.darkburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    burger.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('activemobile');
    })
    darkburger.addEventListener('click', function() {
      this.classList.toggle('activedark');
      mobileMenu.classList.toggle('activemobile');
    })

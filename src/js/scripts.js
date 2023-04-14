const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    burger.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('activemobile');
    })
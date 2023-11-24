function toggleNavbar () {
  const hamburger = document.querySelector('.hamburger');
    const slideMenu = document.querySelector('.slide-menu');
    const slideMenuLinks = document.querySelectorAll('.slide-menu-links li a');
    const closeSlideMenu = document.querySelector('.close');
    const cartButton = document.querySelector('.cart');
    const slideMenuCart = document.querySelector('.slide-menu-cart');
  
    hamburger.addEventListener('click', () => {
      slideMenu.style.width = '100%';
      slideMenuLinks.forEach(link => link.addEventListener('click', closeMenuOnClick));
      cartButton.style.display = 'none';
      slideMenuCart.style.display = 'flex'; // Show the cart button in the sliding menu
    });
  
    closeSlideMenu.addEventListener('click', closeSlideMenuHandler);
  
    function closeSlideMenuHandler() {
      slideMenu.style.width = '0';
      slideMenuLinks.forEach(link => link.removeEventListener('click', closeMenuOnClick));
      cartButton.style.display = 'flex';
      slideMenuCart.style.display = 'none'; // Hide the cart button when the sliding menu is closed
    }
  
    function closeMenuOnClick() {
      closeSlideMenuHandler();
      window.location.href = this.getAttribute('href');
    }
}



document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const productItems = document.querySelectorAll('.product-item');
    const newsItems = document.querySelectorAll('.news-item');
    const scrollButton = document.querySelector('.scroll-button');
    const emailInput = document.getElementById('email');
    const joinButton = document.querySelector('.join-btn');
    const socialIcons = document.querySelectorAll('.social-icon');
  
    // Smooth Scroll for Logo Click
    const logoLink = document.querySelector('.logo a');
    if (logoLink) {
      logoLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  
    // Function to toggle the navigation menu
    function toggleMenu() {
      navLinks.classList.toggle('active');
    }
  
    // Toggle menu when hamburger icon is clicked
    hamburger.addEventListener('click', toggleMenu);
  
    // Optional: Close the menu if the user clicks anywhere outside the navbar
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.navbar') && !event.target.closest('.hamburger')) {
        navLinks.classList.remove('active');
      }
    });
  
    // Product Items Hover Effect (Example, replace with actual content logic)
    productItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#f0f0f0';
      });
      item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'white';
      });
    });
  
    // News Item Click Event - Toggle detailed content
    newsItems.forEach(item => {
      item.addEventListener('click', () => {
        const content = item.querySelector('.news-content');
        content.classList.toggle('expanded');
        const expanded = content.classList.contains('expanded');
        const text = expanded ? 'Show Less' : 'Read More';
        item.querySelector('.read-more-text').textContent = text;
      });
    });
  
    // Intersection Observer for Lazy Loading Images
    const images = document.querySelectorAll('.news-item img');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;  // Load the image using data-src attribute
          observer.unobserve(img);
        }
      });
    }, { threshold: 0.5 }); // Start loading when 50% of the image is visible
  
    images.forEach(image => {
      observer.observe(image);
    });
  
    // Smooth Scroll for Arrow Click
    if (scrollButton) {
      scrollButton.addEventListener('click', () => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      });
    }
  
    // Email Subscription Validation
    joinButton.addEventListener('click', function() {
      const emailValue = emailInput.value.trim();
      if (emailValue === '') {
        alert('Please enter a valid email address.');
      } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
        alert('Please enter a valid email address.');
      } else {
        alert('Thank you for subscribing!');
        emailInput.value = ''; // Clear input after submission
      }
    });
  
    // Social Icon Hover Effect
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
      });
      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
      });
    });
  });
  
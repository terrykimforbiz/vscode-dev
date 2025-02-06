document.addEventListener('DOMContentLoaded', function () {
  const tools = document.querySelectorAll('.tool');

  // Tool click event
  tools.forEach(tool => {
      tool.addEventListener('click', () => {
          alert(`You clicked on ${tool.querySelector('h3').textContent}`);
      });
  });

  // Smooth scrolling functionality
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Automatic rolling scroll for categories
  let currentCategoryIndex = 0;
  const categories = document.querySelectorAll('.category');
  setInterval(() => {
      if (categories.length > 0) {
          currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
          window.scrollTo({
              top: categories[currentCategoryIndex].offsetTop,
              behavior: 'smooth'
          });
      }
  }, 5000); // Scroll every 5 seconds
});
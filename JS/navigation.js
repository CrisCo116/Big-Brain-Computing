// Get references to your navbar links and page containers
const navbarLinks = document.querySelectorAll('.navbar a');
const pages = document.querySelectorAll('.page');

// Add click event listeners to navbar links
navbarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Remove the "active" class from all pages
    pages.forEach((page) => {
      page.classList.remove('active');
    });

    // Determine the target page based on the link's href attribute
    const targetPageId = link.getAttribute('href').substr(1);
    const targetPage = document.getElementById(targetPageId);

    // Add the "active" class to the target page to make it visible
    targetPage.classList.add('active');
  });
});

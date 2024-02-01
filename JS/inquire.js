document.getElementById('showFormButton').addEventListener('click', function() {
    var formContainer = document.getElementById('hiddenFormContainer');
    formContainer.classList.toggle('hidden');
    if (!formContainer.classList.contains('hidden')) {
      window.scrollTo(0, formContainer.offsetTop); // Scroll to the form if it's shown
    }
  });
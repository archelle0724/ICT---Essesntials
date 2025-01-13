window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.parallax-bg');
    parallax.forEach(function(element) {
      let offset = window.pageYOffset;
      element.style.transform = 'translateY(' + offset * 0.5 + 'px)';
    });
  });


 
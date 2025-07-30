AOS.init({
    duration: 1000, // animation duration (1000ms = 1 second)
    once: true      // animation happens only once when scrolling
  });

 
  // Get the button
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Show the button when the user scrolls down 20px
  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  // When the user clicks the button, scroll to the top
  scrollTopBtn.addEventListener("click", function(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  
  

  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = "block";
      scrollTopBtn.style.animation = "bounceIn 0.6s"; // Trigger the bounce when showing
    } else {
      scrollTopBtn.style.display = "none";
      scrollTopBtn.style.animation = "none"; // Reset animation when hidden
    }
  };

  scrollTopBtn.addEventListener("click", function(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });



  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = "block";
      scrollTopBtn.style.animation = "bounceIn 0.6s, pulse 2s infinite 0.6s"; 
      // First it bounces in, then after 0.6s, it starts pulsing forever
    } else {
      scrollTopBtn.style.display = "none";
      scrollTopBtn.style.animation = "none"; // Remove animations when button hides
    }
  };

  scrollTopBtn.addEventListener("click", function(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


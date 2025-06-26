
document.addEventListener("DOMContentLoaded", function() {
    // Show the first ad after 2 seconds
    setTimeout(function() {
      document.getElementById("popupAd1").classList.add("show");
    }, 2000);

    // Show the second ad 2 seconds after the first ad appears
    setTimeout(function() {
      document.getElementById("popupAd2").classList.add("show");
    }, 4000);

    // Show the third ad 2 seconds after the second ad appears
    setTimeout(function() {
      document.getElementById("popupAd3").classList.add("show");
    }, 6000);

    // Close button functionality for all ads
    document.getElementById("closeBtn1").addEventListener("click", function() {
      document.getElementById("popupAd1").classList.remove("show");
    });
    document.getElementById("closeBtn2").addEventListener("click", function() {
      document.getElementById("popupAd2").classList.remove("show");
    });
    document.getElementById("closeBtn3").addEventListener("click", function() {
      document.getElementById("popupAd3").classList.remove("show");
    });
  });


window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
        navbar.classList.remove('navbar-transparent');
        
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.add('navbar-transparent');
    }
    });


    // start pop up function
    $(document).ready(function() {
        setTimeout(function() {
            $('#adPopup').fadeIn();
            $('#adOverlay').fadeIn();
            $('body').addClass('no-scroll');
        }, 1000);

        $('#closeBtn').click(function() {
            $('#adPopup').fadeOut();
            $('#adOverlay').fadeOut();
            $('body').removeClass('no-scroll');
        });
    });


    

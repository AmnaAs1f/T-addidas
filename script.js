
//live-stream-banner
var xicon = document.querySelector('.live-stream-banner .xicon');
xicon.addEventListener('click' , function(){
  var banner = document.querySelector('.live-stream-banner');
  banner.style.display = 'none';
});

//THUMBNAIL SLIDER

$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows:false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      
    ]
  });

// FOooter Form
  

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const successMessage = document.getElementById('success-message');

    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(message) {
        message.style.display = 'none';
    });

    var isValid = true;

    // Name validation
    var name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    var email = document.getElementById('email').value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Country validation
    var country = document.getElementById('country').value;
    if (country === '') {
        document.getElementById('countryError').style.display = 'block';
        isValid = false;
    }

    // State validation
    var state = document.getElementById('state').value;
    if (state === '') {
        document.getElementById('stateError').style.display = 'block';
        isValid = false;
    }

    // Message validation
    var message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        successMessage.classList.add('active');
        document.getElementById('contactForm').reset();
        
        // Hide the success message after 5 seconds
        setTimeout(function() {
            successMessage.classList.remove('active');
        }, 5000);
    }
});



// Hero Section Slider

let currentSlideIndex = 0;
const slidesContainer = document.querySelector('.slider');
const slides = document.querySelectorAll('.hero');
const dots = document.querySelectorAll('.dot');

const showSlide = (index) => {
    slidesContainer.style.transform = `translateX(-${100 * index}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
};

const nextSlide = () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
};

const prevSlide = () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
};

const currentSlide = (index) => {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
};

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);


// Video popup
function openVideo(videoId) {
    const videoPopup = document.getElementById("videoPopup");
    const videoIframe = document.getElementById("videoIframe");
    videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    videoPopup.classList.add("active");
}

function closeVideo() {
    const videoPopup = document.getElementById("videoPopup");
    const videoIframe = document.getElementById("videoIframe");
    videoIframe.src = "";
    videoPopup.classList.remove("active");
}

// Mobile Navigation Menu

document.getElementById('menuToggle').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');

  const icon = this.querySelector('i');
  if (mobileMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
  } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
  }
});


document.getElementById('closeSidebar').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');

    const menuToggleIcon = document.getElementById('menuToggle').querySelector('i');
    menuToggleIcon.classList.remove('fa-times');
    menuToggleIcon.classList.add('fa-bars');
});







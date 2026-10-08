// Mobile Navbar Toggle
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  });
}

window.onscroll = () => {
  if (menuBtn) {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
  }
};

// Function yo guhitamo no kuyungurura (Filter) amashusho muri Portfolio
function filterPortfolio(category) {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  // Guhindura ikituza kiri active kuri buttons za Portfolio
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-filter') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Guhisha cyangwa kugaragaza amashusho ukurikije ikiciro
  galleryItems.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}

// Portfolio Image Filtering y'ama-buttons ya Portfolio
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-filter');
    filterPortfolio(category);
  });
});

// Link zo mu gice cya About zihita zungurura Portfolio
const aboutCategoryBtns = document.querySelectorAll('.about-category-btn');
aboutCategoryBtns.forEach(link => {
  link.addEventListener('click', () => {
    const targetCategory = link.getAttribute('data-category');
    if (targetCategory) {
      filterPortfolio(targetCategory);
    }
  });
});

// Lightbox Effect
const lightbox = document.querySelector('#lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').getAttribute('src');
    lightboxImg.setAttribute('src', imgSrc);
    lightbox.classList.add('active');
  });
});

if (closeLightbox) {
  closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.classList.remove('active');
    }
  });
}

// --------------------------------------------------------
// EMAILJS INTEGRATION (Simbuza neza na Keys zawe muri EmailJS)
// --------------------------------------------------------
(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // Public Key yawe
})();

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function() {
        alert('Ubutumwa bwawe bwoherejwe neza!');
        contactForm.reset();
      }, function(error) {
        alert('Biyangire kohereza: ' + JSON.stringify(error));
      });
  });
}
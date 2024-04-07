let navbar = document.querySelector('.header .navbar');
let mybutton = document.getElementById("myBtn"); // Asigură-te că ID-ul este același cu cel din HTML.
let searchForm = document.querySelector('.search-form'); 

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
};

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
};


document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
};

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
};

// Funcție pentru deschiderea pop-up-ului de contact
function openPopup() {
    document.getElementById('contact-popup').style.display = 'flex';
}

// Funcție pentru închiderea pop-up-ului de contact
function closePopup() {
    document.getElementById('contact-popup').style.display = 'none';
}

// Funcție pentru resetarea formularului
function resetForm() {
    document.getElementById('contact-form').reset();
}

// Event listener pentru butonul de deschidere a pop-up-ului
document.getElementById('contact-btn').addEventListener('click', openPopup);

// Event listener pentru butonul de închidere a pop-up-ului
document.querySelector('.close-btn').addEventListener('click', () => {
    closePopup();
    resetForm(); // Resetează formularul la închiderea pop-up-ului
});

// Validarea și trimiterea formularului de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obține valorile din formular
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Expresie regulată pentru validarea email-ului
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifică dacă câmpurile sunt completate corect
    if(name.trim() === '') {
        alert('Te rog să introduci numele.');
    } else if(!emailRegex.test(email)) {
        alert('Te rog să introduci o adresă de email validă.');
    } else if(message.trim() === '') {
        alert('Te rog să introduci mesajul.');
    } else {
        // Dacă formularul este completat corect, afișează un mesaj de succes
        alert('Formularul a fost trimis cu succes!');
        closePopup(); // Închide pop-up-ul după trimiterea formularului
        resetForm(); // Resetează formularul după trimiterea cu succes
    }
});


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
    navbar.classList.remove('active');
  }
}

window.onscroll = scrollFunction;

function topFunction() {
  document.body.scrollTop = 0; // Pentru Safari
  document.documentElement.scrollTop = 0; // Pentru Chrome, Firefox, IE și Opera
}

window.onload = () =>{
  if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
  }else{
      document.querySelector('.header').classList.remove('active');
  }
};


var swiper = new Swiper(".home-slider", {
    loop:true, 
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".blogs-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".clients-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

//```javascript
const techData = {
    "back-end": [
        { name: "Node.js", img: "https://placehold.co/50x50", alt: "Node.js logo" },
        { name: "Python", img: "https://placehold.co/50x50", alt: "Python logo" },
        { name: "Java", img: "https://placehold.co/50x50", alt: "Java logo" },
        { name: "Ruby", img: "https://placehold.co/50x50", alt: "Ruby logo" }
    ],
    "front-end": [
        { name: "React", img: "https://placehold.co/50x50", alt: "React logo" },
        { name: "Angular", img: "https://placehold.co/50x50", alt: "Angular logo" },
        { name: "Vue.js", img: "https://placehold.co/50x50", alt: "Vue.js logo" },
        { name: "Svelte", img: "https://placehold.co/50x50", alt: "Svelte logo" }
    ],
    "cms": [
        { name: "Wordpress", img: "https://placehold.co/50x50", alt: "Wordpress logo" },
        { name: "Joomla", img: "https://placehold.co/50x50", alt: "Joomla logo" },
        { name: "Drupal", img: "https://placehold.co/50x50", alt: "Drupal logo" },
        { name: "Magento", img: "https://placehold.co/50x50", alt: "Magento logo" }
    ],
    "mobile-app": [
        { name: "Flutter", img: "https://placehold.co/50x50", alt: "Flutter logo" },
        { name: "React Native", img: "https://placehold.co/50x50", alt: "React Native logo" },
        { name: "Swift", img: "https://placehold.co/50x50", alt: "Swift logo" },
        { name: "Kotlin", img: "https://placehold.co/50x50", alt: "Kotlin logo" }
    ],
    "digital-marketing": [
        { name: "Shopify", img: "https://storage.googleapis.com/a1aa/image/6zGu_haoAfP6_E18POVtWezWQuquJRkW8YX4thjd4RM.jpg", alt: "Shopify logo" },
        { name: "Magento", img: "https://storage.googleapis.com/a1aa/image/gzHfZr1yccYGbILzXR_3FOWt8rllEVViNoZWymAL0fU.jpg", alt: "Magento logo" },
        { name: "Wordpress", img: "https://storage.googleapis.com/a1aa/image/oTHvMd4Oea-iYLP1JhM-r5-3a6zI4-3TTvKrbhuvbc0.jpg", alt: "Wordpress logo" },
        { name: "Joomla", img: "https://storage.googleapis.com/a1aa/image/b1sG4JzGRPPIpt9JSHpSOmTYf-21gqQ5i9eXLdgTZrk.jpg", alt: "Joomla logo" },
        { name: "Drupal", img: "https://storage.googleapis.com/a1aa/image/DE6dk--iTnVFsbYy9Zp9HkxDf30Ybrz-CisW5DnFezY.jpg", alt: "Drupal logo" },
        { name: "Wix", img: "https://storage.googleapis.com/a1aa/image/hG5ueCHLghYNmpmg5iS0XWWveIB3GycfWHzTeiwnYKE.jpg", alt: "Wix logo" },
        { name: "Big Commerce", img: "https://storage.googleapis.com/a1aa/image/_I3zpmpFqiB6ziGRGFXCTbpVI57-42js0S719NkG2Fo.jpg", alt: "Big Commerce logo" },
        { name: "Woo Commerce", img: "https://storage.googleapis.com/a1aa/image/kcS-OoP2loBXpf1D0AcNn6fmrIJkelvGLf2mgvzK6ME.jpg", alt: "Woo Commerce logo" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-link');
    const techGrid = document.getElementById('tech-grid');

    function loadTechItems(tab) {
        techGrid.innerHTML = '';
        techData[tab].forEach(item => {
            const techItem = document.createElement('div');
            techItem.className = 'tech-item';
            techItem.innerHTML = `
                <img src="${item.img}" alt="${item.alt}" />
                <p>${item.name}</p>
            `;
            techGrid.appendChild(techItem);
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelector('.tab-link.active').classList.remove('active');
            tab.classList.add('active');
            loadTechItems(tab.getAttribute('data-tab'));
        });
    });

    // Load default tab
    loadTechItems('digital-marketing');
});
// js-section-four-closed

// let currentIndex = 0;

// function moveSlide(direction) {
//     const slides = document.querySelector('.slides');
//     const totalSlides = document.querySelectorAll('.slide').length;

//     currentIndex += direction;

//     // Loop back to the start or end
//     if (currentIndex < 0) {
//         currentIndex = totalSlides - 1;
//     } else if (currentIndex >= totalSlides) {
//         currentIndex = 0;
//     }

//     // Calculate the offset
//     const offset = -currentIndex * (100 / (totalSlides > 4 ? 4 : totalSlides));
//     slides.style.transform = `translateX(${offset}%)`;
// }


// let currentIndex = 0;
// const slidesContainer = document.querySelector('.slides');
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// // Clone the first few slides to create a seamless loop
// for (let i = 0; i < 4; i++) {
//     const clone = slides[i].cloneNode(true);
//     slidesContainer.appendChild(clone);
// }

// function moveSlide(direction) {
//     const totalClonedSlides = slides.length * 2; // Total slides including clones
//     currentIndex += direction;

//     // Loop back to the start or end
//     if (currentIndex < 0) {
//         currentIndex = totalSlides - 1; // Go to the last original slide
//     } else if (currentIndex >= totalClonedSlides) {
//         currentIndex = totalSlides; // Go to the first cloned slide
//         slidesContainer.style.transition = 'none'; // Disable transition for instant jump
//         slidesContainer.style.transform = `translateX(-${currentIndex * (100 / (totalSlides > 4 ? 4 : totalSlides))}%)`;
//         setTimeout(() => {
//             currentIndex = 0; // Reset to the first original slide
//             slidesContainer.style.transition = 'transform 0.5s ease'; // Re-enable transition
//             slidesContainer.style.transform = `translateX(0%)`;
//         }, 50); // Small timeout to allow the transition to reset
//         return;
//     }

//     // Calculate the offset
//     const offset = -currentIndex * (100 / (totalSlides > 4 ? 4 : totalSlides));
//     slidesContainer.style.transform = `translateX(${offset}%)`;
// }

let currentIndex = 0;
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Clone the first few slides to create a seamless loop
for (let i = 0; i < 4; i++) {
    const clone = slides[i].cloneNode(true);
    slidesContainer.appendChild(clone);
}

function getVisibleSlides() {
    if (window.innerWidth >= 1024) {
        return 4; // 4 slides on laptop view
    } else if (window.innerWidth >= 768) {
        return 2; // 2 slides on tablet view
    } else {
        return 1; // 1 slide on mobile view
    }
}

function moveSlide(direction) {
    const visibleSlides = getVisibleSlides();
    const totalClonedSlides = totalSlides * 2; // Total slides including clones
    currentIndex += direction;

    // Loop back to the start or end
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Go to the last original slide
    } else if (currentIndex >= totalClonedSlides) {
        currentIndex = totalSlides; // Go to the first cloned slide
        slidesContainer.style.transition = 'none'; // Disable transition for instant jump
        slidesContainer.style.transform = `translateX(-${currentIndex * (100 / visibleSlides)}%)`;
        setTimeout(() => {
            currentIndex = 0; // Reset to the first original slide
            slidesContainer.style.transition = 'transform 0.5s ease'; // Re-enable transition
            slidesContainer.style.transform = `translateX(0%)`;
        }, 50); // Small timeout to allow the transition to reset
        return;
    }

    // Calculate the offset
    const offset = -currentIndex * (100 / visibleSlides);
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Add event listeners for window resize to adjust the visible slides
window.addEventListener('resize', () => {
    // Reset the current index to 0 when the window is resized
    currentIndex = 0;
    slidesContainer.style.transition = 'none'; // Disable transition for instant jump
    slidesContainer.style.transform = `translateX(0%)`;
    setTimeout(() => {
        slidesContainer.style.transition = 'transform 0.5s ease'; // Re-enable transition
    }, 50);
});

/////////////////////////////////////////////////
  //////
  const items = document.querySelectorAll('.accordion button');

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
  
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
  
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  
  items.forEach((item) => item.addEventListener('click', toggleAccordion));
// tabs js closed



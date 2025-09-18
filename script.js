



function accordions() {
    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach((accordion, index) => {
        const header = accordion.querySelector(".accordion__header");
        const content = accordion.querySelector(".accordion__content");
        const icon = accordion.querySelector("#accordion-icon");

        header.addEventListener("click", () => {
            const isOpen = content.style.height === `${content.scrollHeight}px`;

            accordions.forEach((a, i) => {
                const c = a.querySelector(".accordion__content");
                const ic = a.querySelector("#accordion-icon");
                c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
                // ic.classList.toggle("ri-add-line", i !== index || !isOpen);
                ic.classList.toggle("ri-subtract-fill", i === index && !isOpen);
            });
        });
    });
}
accordions()

const lenis = new Lenis()
lenis.on('scroll', (e) => {
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

gsap.set(".coffee-subscription-container", { scale: 0.9 })
gsap.set(".coffee-subscription-container", { margin: 0 })
let leftOffset = window.innerWidth <= 1024 ? 80 : 140;

let timeln = gsap.timeline({
    scrollTrigger: {
        trigger: ".coffee-subscription-container",
        pin: true,
        pinSpacing: true,
        start: `left-=${leftOffset}px left`,
        end: "+=1150",
        scrub: 1,
    //    markers: true,
        onEnter: () => {
            gsap.to(".coffee-subscription-container", {
                opacity: 1,
                scale: 1,
                ease: "power2.out",
                duration: 0.5
            });
        },
        onLeave: () => {
            gsap.to(".coffee-subscription-container", {
                opacity: 1,
                scale: 0.9,
                ease: "power2.out",
                duration: 1
            });
        },
        onLeaveBack: () => {
            gsap.to(".coffee-subscription-container", {
                opacity: 1,
                scale: 1,
                ease: "power2.out",
                duration: 0.5
            });
        },
        onEnterBack: () => {
            gsap.to(".coffee-subscription-container", {
                opacity: 1,
                scale: 1,
                ease: "power2.out",
                duration: 0.5
            });
        }
    }
});










// timeln.from('#spaparty', {
//     xPercent: -250,
//     opacity: 1,
//     duration: 4,
//     ease: "power2.out" // Adăugăm o tranziție lină
// }, 'a');




timeln.from('#relaxare', {
    opacity: 0,
    duration: 4,
    ease: "power2.out" // Adăugăm o tranziție lină
}, "-=0.3");


timeln.from('.card-1', {
    xPercent: 170,
    opacity: 1,
    duration: 4,
    
    ease: "power2.out" // Adăugăm o tranziție lină
});

timeln.from('.card-2', {
    xPercent: 150,
    opacity: 0,
    duration: 4,

    ease: "power2.out" // Adăugăm o tranziție lină
});
timeln.from('.card-3', {
    xPercent: 175,
    opacity: 0,
    duration: 4,

    ease: "power2.out" // Adăugăm o tranziție lină
});




var cards = document.querySelectorAll('.card-b17');
cards.forEach((card, index) => {
    gsap.to(card, {
        scale: 1.5,
        // filter: "blur(1px)",
        scrollTrigger: {
            trigger: card,
            start: "top 20%",
            end: "top 50%",
            scrub: 1,
        },
        ease: "linear"
    });
});


const { innerHeight } = window
gsap.to(".card1", {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
        trigger: ".card1",
        start: "top 15%",
        end: "bottom 15%",
        // markers: true,
        scrub: true
    }
})

gsap.to(".card2", {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
        trigger: ".card2",
        start: "top 15%",
        end: "bottom 15%",
        // markers: true,
        scrub: true
    }
})

gsap.to(".card3", {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
        trigger: ".card3",
        start: "top 15%",
        end: "bottom 15%",
        // markers: true,
        scrub: true
    }
})
gsap.to(".card4", {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
        trigger: ".card4",
        start: "top 15%",
        end: "bottom 15%",
        // markers: true,
        scrub: true
    }
})
gsap.to(".card5", {
    scale: 0.9,
    opacity: 0.5,
    scrollTrigger: {
        trigger: ".card5",
        start: "top 15%",
        end: "bottom 15%",
        // markers: true,
        scrub: true
    }
})
// gsap.to(".card6", {
//     scale: 0.7,
//     scrollTrigger: {
//         trigger: ".card6",
//         start: "top 15%",
//         end: "bottom 15%",
//         // markers: true,
//         scrub: true
//     }
// })


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.hamburger');
    const menu = document.querySelector('.button_');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuToggle.textContent = menu.classList.contains('active') ? `✕` : '☰';
    });
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menu.classList.remove('active');
            menuToggle.textContent = '☰';
        }
    });
});



const iphone = document.querySelector('.iphone')
const widgets = document.querySelector('.widgets')
const animation = document.querySelector('#animation')
const elements = document.querySelector('.elements')
gsap.set(iphone, { opacity: 0 })
gsap.set(widgets, { opacity: 0, scale: 0 })
// gsap.set(elements, { opacity: 0 })

function iPhoneAnimation() {
    const tl = gsap.timeline({ defaults: { duration: 1 } })
    tl
        .to(animation, { x: 0, y: -100, opacity: 0 })
        .to(iphone, { x: 0,y:-50, opacity: 1 })
        .to(iphone, { rotation: 0, scale: 0.9 })
        .to(elements, { opacity: 1 })
    return tl
}

function widgetAnimation() {
    const tl = gsap.timeline()
    tl.to(widgets, { duration: 0, opacity: 1 })
    return tl
}

const animations = [
    {
        selector: '#one',
        duration: 3,
        scale: 0.6,
        x: 140,
        y: 160,
        ease: Power4.easeOut
    },
    {
        selector: '#trei',
        duration: 3,
        scale: 0.6,
        x: -140,
        y: -240,
        ease: Power4.easeOut
    },
    {
        selector: '#doi',
        duration: 3,
        scale: 0.6,
        x: 150,
        y: -160,
        ease: Power4.easeOut
    }
    ,
    {
        selector: '#patru',
        duration: 3,
        scale: 0.3,
        x: -150,
        y: 80,
        ease: Power4.easeOut
    }
    ,
    {
        selector: '#cinci',
        duration: 3,
        scale: 0.6,
        x: 140,
        y: 0,
        ease: Power4.easeOut
    },
    {
        selector: '#sase',
        duration: 3,
        scale: 0.7,
        x: -130,
        y: 150,
        ease: Power4.easeOut
    },
    {
        selector: '#sapte',
        duration: 3,
        scale: 0.5,
        x: -120,
        y: -60,
        ease: Power4.easeOut
    }, {
        selector: '#opt',
        duration: 3,
        scale: 0.2,
        x: 120,
        y: -100,
        ease: Power4.easeOut
    }, {
        selector: '#noua',
        duration: 3,
        scale: 0.2,
        x: -160,
        y: -150,
        ease: Power4.easeOut
    }, {
        selector: '#zece',
        duration: 4,
        scale: 0.2,
        x: 0,
        y: 250,
        ease: Power4.easeOut,
    }, {
        selector: '#uns',
        duration: 4,
        scale: 0.2,
        x: 0,
        y: 210,
        ease: Power4.easeOut,
    }
]

const startTime = 2
const masterTimeline = gsap.timeline();
masterTimeline.add(iPhoneAnimation()).add(widgetAnimation(), startTime)


animations.forEach((animation, index) => {
    const { selector, duration, scale, x, y, ease } = animation;
    const element = document.querySelector(selector)
    masterTimeline.add(
        gsap.to(element, { duration, scale, x, y, ease }),
        startTime + (index % 3) / 2
    )
});
ScrollTrigger.create({
    animation: masterTimeline,
    trigger: ".animation",
    scrub: 1,
    pin: true,
    // markers: true,
    start: '0% 10%',
    end: '50% 0%',
    onEnter: () => {
        gsap.to(".animation", {
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            duration: 0.5
        });
    },
    onLeave: () => {
        gsap.to(".animation", {
            opacity: 0.8,
            scale: 0.80,
            ease: "power2.out",
            duration: 1
        });
    },
    onLeaveBack: () => {
        gsap.to(".animation", {
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            duration: 0.5
        });
    },
    onEnterBack: () => {
        gsap.to(".animation", {
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            duration: 0.5
        });
    }
})


let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section2',
            start: '0% 30%',
            end: '100% 100%',
            scrub: 1,
            // markers: true
        }
    });

    tl.to(".one-img", {
        x: -300,
        rotate: -20
    }, 'a')
    tl.to(".three-img", {
        x: 300,
        rotate: 20
    }, 'a')
    tl.to(".two-img", {
        x: -500,
        rotate: -30,
        delay: -0.5
    }, 'b')
    tl.to(".four-img", {
        x: 500,
        delay: -0.5,
        rotate: 30
    }, 'b')
    tl.to(".innerText", {
        y: -200,
        opacity: 1,
        delay: -0.4,
    }, 'b')
});




mm.add("(max-width: 799px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section2',
            start: '0% 30%',
            end: '100% 100%',
            scrub: 1,
            // markers: true
        }
    });

    tl.to(".one-img", {
        x: -200,
        rotate: -30
    }, 'a')
    tl.to(".three-img", {
        x: 200,
        rotate: 30
    }, 'a')
    tl.to(".two-img", {
        x: -200,
        rotate: -30,
        delay: -0.5
    }, 'b')
    tl.to(".four-img", {
        x: 200,
        delay: -0.5,
        rotate: 30
    }, 'b')
    tl.to(".innerText", {
        y: -200,
        opacity: 1,
        delay: -0.4,
    }, 'b')
});



var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
      autoplay: {
        delay: 2000,  
        disableOnInteraction: false,  
      },
    mousewheel: false,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.querySelector(".imgBox img");
    const thumbnails = document.querySelectorAll(".more ul li");
    const more_text = document.querySelector('#more_text')
    thumbnails.forEach(img => {
        img.addEventListener("click", function () {
            var images = img.querySelector('img')
            mainImage.src = images.src;
            console.log(images.alt)
            more_text.innerHTML = images.alt
            thumbnails.forEach(thumbnail => thumbnail.classList.remove("active"));
            img.classList.add("active");
        });
    });
});




gsap.registerPlugin(ScrollTrigger);
let paragraph = document.querySelector(".xaw p");
let html = paragraph.innerHTML;
let regex = /(<em>.*?<\/em>|.)/g;
let wrappedHtml = html.replace(regex, (match) => {
  if (match.startsWith("<em>")) {
    let text = match.slice(4, -5); 
    let characters = text.split("");
    let wrappedCharacters = characters.map((character) => {
      if (character === " ") {
        return "&nbsp;";
      } else {
        return `<span class="char">${character}</span>`;
      }
    });
    return `<em>${wrappedCharacters.join("")}</em>`;
  }
  // If the match is a single character, wrap it in a span
  else {
    if (match === " ") {
      return "&nbsp;";
    } else {
      return `<span class="char">${match}</span>`;
    }
  }
});

// Replace the paragraph content with the wrapped HTML
paragraph.innerHTML = wrappedHtml;

// Select all the spans
let spans = gsap.utils.toArray(".xaw p .char");
// Create a scroll-triggered animation
gsap.from(spans, {
  autoAlpha: 0,
  duration: 4,
  ease: "power1.inOut",
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".xaw",
    toggleActions: "play none none none",
    start: "bottom +=800", // when the top of trigger (wrapper) hits top of viewport
    end: "bottom +=600",
    scrub: 1,
    markers: false
  }
});






document.querySelectorAll('.closed-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = document.querySelector('.modal_promo');
    if (modal) {
      modal.style.display = 'none';
    }
  });
});



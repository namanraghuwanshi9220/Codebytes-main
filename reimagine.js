gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
    lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
    multiplier: 1.4, // Effect Multiplier
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 0,
    smartphone: {
        smooth: !0,
        breakpoint: 767
    },
    tablet: {
        smooth: !1,
        breakpoint: 1024
    },
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


function updateSlider() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
    scroll.update(); // Update LocomotiveScroll
}

// Update the slider every 3 seconds
setInterval(updateSlider, 3000)

function page2() {
    gsap.to("#card3", {
        rotation: 0,
        x: 100,
        ease: "power2.in",
        scrollTrigger: {
            trigger: "#page2",
            scroller: ".main",
            start: "top 30%",
            end: "70% 70%",
            scrub: true
            // markers:true
        }
    })
    gsap.to("#card1", {
        rotation: 0,
        x: -100,
        ease: "power2.in",
        scrollTrigger: {
            trigger: "#page2",
            scroller: ".main",
            start: "top 30%",
            end: "70% 70%",
            scrub: true
            // markers:true
        }
    })
    gsap.to("#page2co", {
        y: -150,
        ease: "power2.in",
        scrollTrigger: {
            trigger: "#page2",
            scroller: ".main",
            start: "top 30%",
            end: "70% 70%",
            scrub: true
            // markers:true
        }
    })
    gsap.to("#page2 #hid", {
        opacity: 0,
        ease: "power2.in",
        scrollTrigger: {
            trigger: "#page2",
            scroller: ".main",
            start: "top 30%",
            end: "70% 70%",
            scrub: true
            // markers:true
        }
    })
    gsap.to("#card2", {
        y: 25,
        ease: "power2.in",
        scrollTrigger: {
            trigger: "#page2",
            scroller: ".main",
            start: "top 30%",
            end: "70% 70%",
            scrub: true
            // markers:true
        }
    })



}
page2()

function page3() {
    // Pinning the second slide
    //  ScrollTrigger.create({
    //     trigger: "#page3",
    //     start: "top top",
    //     scroller:".main",
    //     end: "bottom top",
    //     pin: true,
    //     pinSpacing: false
    // });
    gsap.to("#page3", {
        scaleX: 1.3,
        scrollTrigger: {
            trigger: "#page3",
            start: "top top",
            scroller: ".main",
            end: "bottom top",
            pin: true,
            pinSpacing: false
        }
    }
    )

    // Optional: Adding animations to other slides
    gsap.from("#collect", {
        scrollTrigger: {
            trigger: "#page3",
            start: "top bottom",
            scroller: ".main",
            end: "bottom top",
            scrub: true
            // markers: true
        },
        y: 100


    });
    gsap.from(" #divh1 h1, #divp p", {
        y: 200,
        duration: 1,
        ease: "power2.in",
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#page3",
            start: "top top",
            scroller: ".main",
            end: "bottom top",
            // markers: true
        }
    })


}
page3()

function nav() {
    gsap.from("#nav1 img ,#nav2 p,#nav i", {
        y: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.in",
        stagger: 0.2
    })


}
nav()

function page4() {
    var t1 = gsap.timeline(
        {
            scrollTrigger: {
                scroller: ".main",
                trigger: "#page4",
                start: "top 70%",
                // markers: true
            }
        })
    t1.from("#page42 h1,#page42 p", {
        opacity: 0,
        y: 30,
        ease: "power2.in",
        stagger: 0.5
    })
}
page4()
function page5() {
    var t1 = gsap.timeline(
        {
            scrollTrigger: {
                scroller: ".main",
                trigger: "#page5",
                start: "top 70%",
                // markers: true
            }
        })
    t1.from("#page51 h1,#page51 p", {
        opacity: 0,
        y: 30,
        ease: "power2.in",
        stagger: 0.5
    })
}
page5()

function page1() {
    var t1 = gsap.timeline(
        {
            scrollTrigger: {
                scroller: ".main",
                trigger: "#page1",
                start: "top 70%",
                // markers: true
            }
        })
    t1.from("#con h1,#con p", {
        opacity: 0,
        y: 30,
        ease: "power2.in",
        stagger: 0.5
    })
}
page1()

function page6() {
    var t1 = gsap.timeline(
        {
            scrollTrigger: {
                scroller: ".main",
                trigger: "#page6",
                start: "top 70%",
                // markers: true
            }
        })
    t1.from("#page61 h1,#page61 p", {
        opacity: 0,
        y: 20,
        ease: "power2.in",
        stagger: 0.5
    })
}
page6()

function page7() {
    var t1 = gsap.timeline(
        {
            scrollTrigger: {
                scroller: ".main",
                trigger: "#page7",
                start: "top 70%",
                // markers: true
            }
        })
    t1.from("#page7 h1", {
        opacity: 0,
        y: 20,
        ease: "power2.in",
        stagger: 0.5
    })
}
page7()

function page9() {
    var t1 = gsap.timeline(
        {
            scrollTrigger: {
                scroller: ".main",
                trigger: "#page9",
                start: "top 70%",
                // markers: true
            }
        })
    t1.from("#page9 h1 , #page9 p", {
        opacity: 0,
        y: 15,
        ease: "power2.in",
        stagger: 0.5
    })
}
page9()

function page8(){
    var page8 = document.querySelector("#page8")
    var circle8 = document.querySelector("#circle8")
    var page81 = document.querySelector("#page81")
    var col = document.querySelectorAll(".t")
    var newid = Array.from(col);
    console.log(newid)
    var images =[
        "https://plus.unsplash.com/premium_photo-1667239340032-424b4d86e01d?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1596616066331-f23c78f41ee2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1611652951546-7dde1b5f804c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1688137880076-75b1db5d4bbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=1850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
   
   
      newid.forEach((div, index) => {
        div.addEventListener('mouseenter', () => {
            console.log(`Hovering over div ${index + 1}, setting background to ${images[index]}`);
            newid.forEach((div, index) => {
                div.addEventListener('mousemove', () => {
                    console.log(`Hovering over div ${index + 1}, setting background to ${images[index]}`);
                 
                    circle8.style.backgroundPosition = "center";
                    circle8.style.backgroundSize = "cover";
                    
                    circle8.style.boxShadow = "inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 0, 0, 0.7)";
                });
               
                });
                div.addEventListener('mouseleave', () => {
                    console.log(`Leaving div ${index + 1}, removing background`);
                    circle8.classList.remove = images[index]
                });
            });
        })
}

page8()



document.addEventListener('mousemove', (e) => {
    const cursorCircle = document.querySelector('.cursor-circle');

    const pointX = e.clientX;
    const pointY = e.clientY;

    cursorCircle.style.left = `${pointX}px`;
    cursorCircle.style.top = `${pointY}px`;

    moveCursorPoint(pointX, pointY);
});

document.addEventListener('mousedown', () => {
    document.querySelector('.cursor-circle').classList.add('smooth');
});

document.addEventListener('mouseup', () => {
    document.querySelector('.cursor-circle').classList.remove('smooth');
});

document.querySelector('.button').addEventListener('mouseover', () => {
    document.querySelector('.cursor-circle').classList.add('rotating');
    document.querySelector('.cursor-circle').style.borderColor = 'white';
    document.querySelector('.cursor-circle').style.height = '65px';
    document.querySelector('.cursor-circle').style.width = '65px';
});

document.querySelector('.button').addEventListener('mouseout', () => {
    document.querySelector('.cursor-circle').classList.remove('rotating');
    document.querySelector('.cursor-circle').style.borderColor = 'black';
    document.querySelector('.cursor-circle').style.height = '60px';
    document.querySelector('.cursor-circle').style.width = '60px';

});

let cursorPoint = document.querySelector('.cursor-point');
let mouseX = 0, mouseY = 0;
let pointX = 0, pointY = 0;
const delay = 0.3;

function moveCursorPoint(x, y) {
    mouseX = x;
    mouseY = y;
}

function animate() {
    pointX += (mouseX - pointX) * delay;
    pointY += (mouseY - pointY) * delay;

    cursorPoint.style.left = `${pointX}px`;
    cursorPoint.style.top = `${pointY}px`;

    requestAnimationFrame(animate);
}

animate();

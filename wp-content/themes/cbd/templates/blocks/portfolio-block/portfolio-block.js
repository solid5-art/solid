document.addEventListener("DOMContentLoaded", function () {
  function e() {
    gsap.utils.toArray(".work-tiles .swiper").forEach((e) => {
      let t = e.closest(".work-tiles") ? 1.4 : 1.15;
      new Swiper(e, {
        loop: !0,
        slidesPerView: t,
        spaceBetween: 30,
        speed: 400,
        preloadImages: !1,
        observer: !0,
        observeParents: !0,
        observeSlideChildren: !0,
        breakpoints: {
          578: { slidesPerView: 1.8, spaceBetween: "60" },
          1199: {
            slidesPerView: 2.75,
            spaceBetween: "120",
            loop: !1,
            allowTouchMove: !1,
            simulateTouch: !1,
            noSwiping: !0,
          },
        },
        on: {
          afterInit(t) {
            let i = e.querySelector(".swiper-wrapper");
            if (windowWidth > 1199) {
              let r = e.clientWidth;
              t.slides[0].offsetWidth,
                i.scrollWidth,
                gsap.to(i, {
                  scrollTrigger: {
                    trigger: e,
                    scrub: 1,
                    invalidateOnRefresh: !0,
                    pin: !0,
                    pinSpacing: !0,
                    start: () => "center center",
                    end: () => "+=200%",
                  },
                  ease: "none",
                  x: () => -(i.scrollWidth - r),
                });
            }
          },
        },
      });
    });
  }
  document.querySelector(".work-tiles .swiper") &&
    (e(),
    screen.orientation && screen.orientation.addEventListener("change", e),
    window.addEventListener("resize", function () {
      window.innerWidth !== windowWidth && e();
    }));
});

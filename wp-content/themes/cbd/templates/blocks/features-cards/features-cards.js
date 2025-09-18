document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelectorAll(".features-cards");
  gsap.matchMedia(),
    e.forEach((e) => {
      let t = e.querySelector(".cards-wrapper"),
        r = e.querySelector(".cards-outer"),
        l = e.querySelectorAll(".card"),
        c = e.querySelector(".nav"),
        o = l.length,
        i = r.getBoundingClientRect().top + window.scrollY,
        n = r.clientHeight - l[0].clientHeight,
        a = 0,
        u = gsap.timeline({
          scrollTrigger: {
            trigger: t,
            pin: !0,
            start: `top ${document.querySelector("#header").clientHeight}`,
            pinSpacing: !1,
            end: () => `+=${n}`,
            scrub: 0.5,
            invalidateOnRefresh: !0,
            onUpdate({ progress: e }) {
              let t = Math.round(e * (o - 1));
              t !== a &&
                ((a = t),
                c.querySelectorAll("li").forEach((e, t) => {
                  e.classList.toggle("active", t === a);
                }),
                l.forEach((e, t) => {
                  let r = e.querySelector("video");
                  r && (t === a ? r.play() : (r.pause(), (r.currentTime = 0)));
                }));
            },
          },
        });
      l.forEach((e, t) => {
        t < l.length - 1 &&
          u.to(
            e,
            {
              scale: 1 - 0.03 * (l.length - t - 1),
              duration: (l.length - t - 1) * 0.6,
            },
            0.5 * t,
          ),
          t > 0 &&
            u.to(
              e,
              {
                y: () =>
                  `-${Array.from(l)
                    .slice(0, t)
                    .reduce((e, t) => e + t.clientHeight, 0)}px`,
                duration: t,
                ease: "none",
              },
              0,
            );
      }),
        c.querySelectorAll("li a").forEach((e, t) => {
          e.addEventListener("click", function (e) {
            e.preventDefault();
            let r = Array.from(l)
                .slice(0, t)
                .reduce(
                  (e, t) =>
                    e +
                    t.clientHeight +
                    parseInt(window.getComputedStyle(t).marginBottom),
                  0,
                ),
              c = document.querySelector("#header").clientHeight;
            window.Scroller.scrollTo(i - c + r);
          });
        });
    });
});

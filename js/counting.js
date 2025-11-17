window.addEventListener("DOMContentLoaded", () => {
  // Counting Numbers
  const counters = document.querySelectorAll(".count");
  const totalDuration = 2000; // total time for animation (2s)
  const easeOutQuad = (t) => t * (2 - t);

  function startCounters() {
    counters.forEach((counter) => {
      counter.innerText = "0 +"; // reset before starting
      const target = Number(counter.getAttribute("data-target")) || 0;
      let startTime = null;

      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / totalDuration, 1);
        const easedProgress = easeOutQuad(progress);
        const current = Math.floor(target * easedProgress);

        if (progress < 1) {
          counter.innerText = current.toLocaleString() + " +";
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = formatNumber(target) + " +";
        }
      };

      requestAnimationFrame(updateCount);
    });
  }

  // Number formatter (K / L)
  function formatNumber(num) {
    if (num >= 100000) return Math.floor(num / 100000) + "M";
    if (num >= 1000) return Math.floor(num / 1000) + "K";
    return num.toString();
  }

  // Intersection Observer to trigger animation once
  const section = document.querySelector(".counting-numbers");
  let hasAnimated = false;

  if (section) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startCounters();
            hasAnimated = true; // run only once
            observer.unobserve(section); // stop observing
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
  }
});

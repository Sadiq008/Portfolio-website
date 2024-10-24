document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const h1 = document.querySelector(".container > h1");
  const developer = document.querySelector(".name");
  const hr = document.querySelector(".container > hr");
  const jobTitle = document.querySelector(".job-title");
  const accounts = document.querySelectorAll(".account_links a");
  const resume = document.querySelector(".resume");
  const pro_img = document.querySelector(".profile_image > img");
  const links = document.querySelectorAll(".navigation span");

  gsap.registerPlugin(ScrollTrigger);

  const jobText = jobTitle.textContent;
  jobTitle.innerHTML = jobText
    .split("")
    .map((letter) => `<span>${letter}</span>`)
    .join("");

  const text = developer.textContent;
  developer.innerHTML = text
    .split("")
    .map((letter) => `<span>${letter}</span>`)
    .join("");

  const TL = gsap.timeline({});

  TL.to(container, {
    backgroundColor: "rgb(15, 23, 42)",
    duration: 1,
  })
    .from(h1, {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    })
    .from(".name > span", {
      opacity: 0,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      stagger: {
        each: 0.1, // Delay between each letter
        from: "start", // Start animating from the first letter
      },
    })
    .to(hr, {
      display: "relative",
      opacity: 1,
      border: "1px solid white",
      width: "80%",
      duration: 1,
      ease: "power1.inOut",
    })
    .from(".job-title span", {
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
      stagger: {
        each: 0.1, // Delay between each letter
        from: "start", // Start animating from the first letter
      },
    })
    .from(accounts, {
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
      stagger: {
        amount: 0.5, // Total duration for staggering
        each: 0.3, // Delay between each link appearing
        from: "start", // Start animating from the first link
      },
    })
    .from(resume, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power1.inOut",
    })
    .from(links, {
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
      stagger: {
        each: 0.2, // Delay between each link
        from: "start", // Start animating from the first link
      },
    })
    .from(pro_img, {
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    });

  const section2Heading = document.querySelector(".section2 > h1");
  const hr2 = document.querySelector(".section2 > hr");
  const p2 = document.querySelector(".section2 > p");
  const education = document.querySelectorAll(".d1");
  const work = document.querySelectorAll(".d2");
  const hobbies = document.querySelectorAll(".d3");

  const tl2 = gsap.timeline({});
  gsap.registerPlugin(ScrollTrigger);

  tl2
    .from(section2Heading, {
      opacity: 0,
      ease: "power1.inOut",
      y: -200,
      duration: 1,
      scrollTrigger: {
        trigger: section2Heading,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    })
    .from(hr2, {
      y: -100,
      opacity: 0,
      ease: "power1.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: hr2,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
    })
    .from(p2, {
      y: -50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: p2,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    })
    .from(education, {
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: education[0], // Use the first element of education as trigger
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
      },
    })
    .from(work, {
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: work[0], // Use the first element of work as trigger
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    })
    .from(hobbies, {
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: hobbies[0], // Use the first element of hobbies as trigger
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

  const section3Heading = document.querySelector(".section3 > h1");
  const hr3 = document.querySelector(".section3 > hr");
  const projects = document.querySelectorAll(".projects_details > div"); // Select individual project sections

  const tl3 = gsap.timeline({});
  gsap.registerPlugin(ScrollTrigger);

  // Animate the heading
  tl3.from(section3Heading, {
    y: -200,
    opacity: 0,
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: section3Heading,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
    },
  });

  tl3.from(hr3, {
    y: -100,
    duration: 1,
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: hr3,
      start: "top 90%",
      end: "top 50%",
      scrub: true,
    },
  });

  projects.forEach((project) => {
    gsap.from(project, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: project,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });
  });

  const skillHeading = document.querySelector(".section4 > h1");
  const hr4 = document.querySelector(".section4 > hr");
  const skills = document.querySelectorAll(".skill_details > div");

  const tl4 = gsap.timeline({});
  gsap.registerPlugin(ScrollTrigger);

  tl4
    .from(skillHeading, {
      y: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: skillHeading,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    })
    .from(hr4, {
      y: -100,
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: hr4,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
    })
    // GSAP animation with ScrollTrigger
    .from(skills, {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: skills,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });

  const contactHeading = document.querySelector(".section5 > h1");
  const hr5 = document.querySelector(".section5 > hr");
  const contactDetails = document.querySelectorAll(".contact_details > div");

  tl4
    .from(contactHeading, {
      y: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: contactHeading,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    })
    .from(hr5, {
      y: -100,
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: hr5,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
    })
    .from(contactDetails, {
      y: -50,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: contactDetails,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });
});

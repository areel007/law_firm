document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".mobile__menu");
  const hamburger = document.querySelector(".hamburger");
  const close = document.querySelector(".close");
  const header = document.querySelector("header");
  const mobileLinks = document.querySelectorAll("aside a");
  const part1 = document.querySelector(".part_1");
  const part2 = document.querySelector(".part_2");
  const readMore = document.querySelector(".read_more");
  const readLess = document.querySelector(".read_less");

  part2.style.display = "none";

  readMore.addEventListener("click", () => {
    if (part2.style.display === "none") {
      part2.style.display = "block";
      part1.style.display = "none";
    }
  });

  readLess.addEventListener("click", () => {
    if (part1.style.display === "none") {
      part1.style.display = "block";
      part2.style.display = "none";
    }
  });

  const links = Array.from(mobileLinks);

  links.forEach((_link) =>
    _link.addEventListener("click", () => {
      mobileMenu.style.display = "none";
      hamburger.style.display = "block";
      close.style.display = "none";
    })
  );

  // Function to handle resizing
  const handleResize = () => {
    let screenWidth = window.innerWidth;
    if (screenWidth > 768) {
      mobileMenu.style.display = "none";
      hamburger.style.display = "none";
      close.style.display = "none";
    }
    if (close.style.display === "none" && screenWidth < 768) {
      hamburger.style.display = "block";
    }
  };

  const handleScroll = () => {
    let position = window.scrollY;
    if (position > 0) {
      header.style.backgroundColor = "#1f2937";
    } else {
      header.style.backgroundColor = "transparent";
    }
  };

  // Initial handling of screen size
  handleResize();

  //   Initial handling of position
  handleScroll();

  // Event listener for resizing
  window.addEventListener("resize", handleResize);

  //   Event listener for scrolling
  window.addEventListener("scroll", handleScroll);

  //   open mobile menu
  mobileMenu.style.display = "none";
  hamburger.addEventListener("click", () => {
    hamburger.style.display = "none";
    close.style.display = "block";
    mobileMenu.style.display = "block";
  });

  //   close mobile menu
  close.addEventListener("click", () => {
    hamburger.style.display = "block";
    close.style.display = "none";
    mobileMenu.style.display = "none";
  });
});

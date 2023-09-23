const header = document.querySelector(".header");
const nav = document.querySelector(".main-nav");
const mobileNavBtn = document.querySelector(".btn-mobile-nav");
const mainNavList = document.querySelector(".main-nav-list");
//Mobile nav open and  close functionality
mobileNavBtn.addEventListener("click", function (e) {
  header.classList.toggle("nav-open");
});
const allLinks = document.querySelectorAll("a");
const sectionFeatured = document.querySelector(".section-featured");
const sectionHero = document.querySelector(".section-hero");

//closing mobile when clicked on any one of link
mainNavList.addEventListener("click", function (e) {
  if (e.target.classList.contains("main-nav-link")) {
    header.classList.toggle("nav-open");
    const goToSectionName = `section-${e.target.textContent
      .split(" ")
      .shift()
      .toLowerCase()}`;
    document
      .querySelector(`.${goToSectionName}`)
      .scrollIntoView({ behavior: "smooth" });
    console.log(document.querySelector(`.${goToSectionName}`));
  }
});

console.log(allLinks);
Array.from(allLinks).forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    if (link.getAttribute("href") === "#") {
      console.log(link.getAttribute("href"));
      header.scrollIntoView({
        // top: 0,
        behavior: "smooth",
      });
    }

    if (link.getAttribute("href") !== "#") {
      console.log(link.getAttribute("href"));
      document
        .querySelector(link.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    }
  });
});

//////////Implementing sticky nav using observer api

const observer = new IntersectionObserver(
  function (entries, observer) {
    console.log(entries);
    const [entry] = entries;
    if (entry.isIntersecting) {
      console.log("yes");
      header.classList.remove("sticky");
      sectionHero.style.marginTop = "0px";
    } else {
      header.classList.add("sticky");
      sectionHero.style.marginTop = "96px";
      console.log("no");
    }
  },
  {
    root: null,
    threshold: [0],
    rootMargin: "-80px",
  }
);

//attaching observer to featured section
observer.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  // console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

///////
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/

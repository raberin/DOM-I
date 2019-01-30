const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav Selectors
const navBar = document.querySelector('nav');
const navItems = navBar.querySelectorAll('a'); //This is a nodeList (Array like item)
for(let i = 0; i < navItems.length; i++){
  //Using template literals to make changes to nav-item content
  navItems[i].innerHTML = siteContent.nav[`nav-item-${i+1}`];
}

//cta
const titleArea = document.querySelector('.cta-text');

const titleName = titleArea.querySelector('h1');
titleName.innerHTML = siteContent.cta['h1'];

const titleButton = titleArea.querySelector('button');
titleButton.innerHTML = siteContent.cta['button'];

const headerImage = document.getElementById('cta-img');
headerImage.setAttribute('src', siteContent.cta['img-src']);

//main-content
const topContent = document.querySelector('.top-content');
const topContentDiv = topContent.querySelectorAll('.text-content');
topContentDiv[0].querySelector('h4').innerHTML = siteContent['main-content']['features-h4'];
topContentDiv[0].querySelector('p').innerHTML = siteContent['main-content']['features-content'];

topContentDiv[1].querySelector('h4').innerHTML = siteContent['main-content']['about-h4'];
topContentDiv[1].querySelector('p').innerHTML = siteContent['main-content']['about-content'];

const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent["main-content"]['middle-img-src']);



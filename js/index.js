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
  navItems[i].textContent = siteContent.nav[`nav-item-${i+1}`];
  //Change each "a" to green color
  navItems[i].style.color = 'green';
}

//Task 4 Append/Prepend Child
const aTag = document.createElement('a');
aTag.setAttribute('href', '#');
aTag.innerText = 'GitHub';
navBar.appendChild(aTag);

const aTagTwo = document.createElement('a');
aTagTwo.setAttribute('href', '#');
aTagTwo.innerText = 'Facebook';
navBar.prepend(aTagTwo)

//cta
const titleArea = document.querySelector('.cta-text');

const titleName = titleArea.querySelector('h1');
titleName.textContent = siteContent.cta['h1'];

const titleButton = titleArea.querySelector('button');
titleButton.textContent = siteContent.cta['button'];

const headerImage = document.getElementById('cta-img');
headerImage.setAttribute('src', siteContent.cta['img-src']);

//main-content top-content
const topContent = document.querySelector('.top-content');
const topContentDiv = topContent.querySelectorAll('.text-content');
topContentDiv[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
topContentDiv[0].querySelector('p').textContent = siteContent['main-content']['features-content'];

topContentDiv[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
topContentDiv[1].querySelector('p').textContent = siteContent['main-content']['about-content'];

//main-content middle-img
const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent["main-content"]['middle-img-src']);

//main-content bottom-content
const bottomContent = document.querySelector('.bottom-content');
const bottomContentDiv = bottomContent.querySelectorAll('.text-content');
bottomContentDiv[0].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
bottomContentDiv[0].querySelector('p').textContent = siteContent['main-content']['services-content'];

bottomContentDiv[1].querySelector('h4').textContent = siteContent['main-content']['product-h4'];
bottomContentDiv[1].querySelector('p').textContent = siteContent['main-content']['product-content'];

bottomContentDiv[2].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
bottomContentDiv[2].querySelector('p').textContent = siteContent['main-content']['vision-content'];

//contact
const contact = document.querySelector('.contact');
contact.querySelector('h4').textContent = siteContent['contact']['contact-h4'];

const contactParagraph = contact.querySelectorAll('p');
contactParagraph[0].textContent = siteContent['contact']['address'];
contactParagraph[1].textContent = siteContent['contact']['phone'];
contactParagraph[2].textContent = siteContent['contact']['email'];

//footer
const footer = document.querySelector('footer');
footer.querySelector('p').textContent = siteContent['footer']['copyright'];


/*!
* Start Bootstrap - Creative v7.0.2 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    // new SimpleLightbox({
    //     elements: '#portfolio a.portfolio-box'
    // });

});


var xhr = new XMLHttpRequest();

xhr.onload = function () {
	if (xhr.status >= 200 && xhr.status < 300) {
        let response = JSON.parse(xhr.response)
        console.log(response)
    
        let recentPostsBlog = document.getElementById("recent-posts-blog");
        // let recentPostsHome = document.getElementById("recent-posts-home");

        for (let i = 0; i < 3; ++i) {
           let titleItemsBlog = document.createElement("div");
            
           // recent posts

           titleItemsBlog.innerHTML = "<div class='blog-post'><a href='" + response[i].url + "' target='_blank'><h4>" + response[i].title + "</h4><div><em>" + response[i].readable_publish_date + "</em></div><div>" + response[i].description + "</div></a></div>"           


           recentPostsBlog.appendChild(titleItemsBlog);
           }

        }
     };

xhr.open('GET', 'https://dev.to/api/articles?username=haleyelder');
xhr.send()
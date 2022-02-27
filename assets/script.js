var xhr = new XMLHttpRequest();

xhr.onload = function () {
	if (xhr.status >= 200 && xhr.status < 300) {
        let response = JSON.parse(xhr.response)
        console.log(response)
    
        let recentPostsBlog = document.getElementById("recent-posts-blog");
        let recentPostsHome = document.getElementById("recent-posts-home");

        for (let i = 0; i < 6; ++i) {
           let titleItemsBlog = document.createElement("div");
            
           // recent posts
           titleItemsBlog.innerHTML = "<div class='blog-post'><a href='" + response[i].url + "' target='_blank'><h4>" + response[i].title + "</h4><div><em>" + response[i].readable_publish_date + "</em></div><div>" + response[i].description + "</div></a></div>"           

           recentPostsBlog.appendChild(titleItemsBlog);
           }

        }
     };

xhr.open('GET', 'https://dev.to/api/articles?username=haleyelder');
xhr.send()
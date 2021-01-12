var xhr = new XMLHttpRequest();

xhr.onload = function () {
	if (xhr.status >= 200 && xhr.status < 300) {
        let response = JSON.parse(xhr.response)
        console.log(response)
    
        let recentPosts = document.getElementById("recent-posts");
        let recentPostLength = response.length;

       for (var i = 0; i < recentPostLength; ++i) {
           var titleItems = document.createElement("div");
            
           // recent posts
           titleItems.innerHTML = "<div class='blog-post'><a href='" + response[i].url + "' target='_blank'><h4>" + response[i].title + "</h4><div><em>" + response[i].readable_publish_date + "</em></div><div>" + response[i].description + "</div></a></div>"           

           recentPosts.appendChild(titleItems);
           }
        }
     };

xhr.open('GET', 'https://dev.to/api/articles?username=haleyelder');
xhr.send()
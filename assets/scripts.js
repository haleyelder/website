/* WIILL REVISIT LATER.. QUERY ASTRO FOR POSTS */

// async function recentPostsCall() {
//     const response = await fetch(
//       "https://dev.to/api/articles?username=haleyelder"
//     );
//     const posts = await response.json();

//     // fixing later :)
//     const latest1 = `
//     <img src="https://www.comets-studio.com/images/posts/midyear-checkin/skaftafell-view-cover.jpg" class="blog-img"/><h3>Midyear Check In</h3>
//             <p>7/6/24</p>
//             <p>Oh, it's been a busy year...</p>
//             <a href="https://www.comets-studio.com/midyear-checkin" target="_blank">Read More >></a>`;
//     document.getElementById("blog-post1").innerHTML = latest1;
//     // const latest2 = `<h3>${posts[1].title}</h3>
//     //         <p>${posts[1].readable_publish_date}</p>
//     //         <p>${posts[1].description}</p>
//     //         <a href="${posts[1].url}" target="_blank">Read More >></a>`;
//     // document.getElementById("blog-post2").innerHTML = latest2;


//   }

//   const recentPosts = recentPostsCall();


// keeping the below in case i want to revive it!

// // const apiUrl = "assets/test.json";

// const apiUrl = "https://www.comets-studio.com/recent-posts.json";

// fetch(apiUrl, {
//   method: "GET",
//   mode: "no-cors",
//   headers: {
// 		"Access-Control-Allow-Origin":'*',
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error("network error");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     let arr = data.posts;

//     arr.sort(function (a, b) {
//       return new Date(b.data.date) - new Date(a.data.date);
//     });

//     let latestPost = arr[0].data;
//     let latest = `<img src="${latestPost.image}" class="blog-img"/>
// 		<h3>${latestPost.title}</h3>
// 		<p>${new Date(latestPost.date).toLocaleDateString()}</p>
// 		<p><em>${latestPost.description}</em></p>
// 		<a href="https://www.comets-studio.com/${
//       arr[0].slug
//     }" target="_blank">Read More >> </a>`;

//     document.getElementById("blog-post1").innerHTML = latest;
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

async function recentPostsCall() {
  const response = await fetch(
    "https://dev.to/api/articles?username=haleyelder"
  );
  const posts = await response.json();

  // fixing later :)
  const latest1 = `<h3>${posts[0].title}</h3>
          <p>${posts[0].readable_publish_date}</p>
          <p>${posts[0].description}</p>
          <a href="${posts[0].url}" target="_blank">Read More >></a>`;
  document.getElementById("blog-post1").innerHTML = latest1;
  const latest2 = `<h3>${posts[1].title}</h3>
          <p>${posts[1].readable_publish_date}</p>
          <p>${posts[1].description}</p>
          <a href="${posts[1].url}" target="_blank">Read More >></a>`;
  document.getElementById("blog-post2").innerHTML = latest2;


}

const recentPosts = recentPostsCall();

var posts=["2025/09/26/hello-world/","2025/09/26/新篇章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
function displayPosts(posts) {
    const ul=document.getElementById("post-list");
    ul.innerHTML ="";
    posts.forEach(post => {
        const li = document.createElement("li");
        const hi=document.createElement("h1");
        hi.testContent=post.title;
        const p=document.createElement("p");
        p.textContent=post.body;
        li.appendChild(h1);
        li.appendChild(p);
        ul.appendChild(li);
    });
}
async function getPosts(){
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/posts");
        const data=await response.json();
        displayPosts(data);
    }catch(error){
        console.log("Erro fetching posts:",error);
    }
    }
}

let posts = [
    {
        "authors":"Tagesschau",
        "images":"img/img1.jpg",
        "locations":"United Kingdom",
        "descriptions":"Text"

    },
    {
        "authors":"Tagesschau",
        "images":"img/img1.jpg",
        "locations":"United Kingdom",
        "descriptions":"Text"

    },

    {
        "authors":"Tagesschau",
        "images":"img/img1.jpg",
        "locations":"United Kingdom",
        "descriptions":"Text"

    }
]

function show(){
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('postCard').innerHTML +=`<div class="authors">`;
        
    }
}
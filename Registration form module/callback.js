const posts=[
    {title: 'Post One',
     body: 'This is Post One', 
     createdAt: new Date().getTime()
    },
    {title: 'Post Two', 
     body: 'This is Post Two', 
     createdAt: new Date().getTime()
    }
]
function getPost() {
    clearInterval(interval);
    interval = setTimeout( () => {
        posts.forEach((order) => {
            console.log(order.title);
             
        })
    }, 1000);

}

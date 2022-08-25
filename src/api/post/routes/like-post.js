module.exports =  {
    routes: [
        {
            method: "GET",
            path: "/posts/:id/like",
            handler: "api::post.post.likePost",
            config: {
                // some config
            },
        },
    ],
};
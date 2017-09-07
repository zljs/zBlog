module.exports = {
    port: 3000,
    session: {
        secret: 'zBlog',
        key: 'zBlog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/zBlog'
};

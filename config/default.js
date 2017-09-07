module.exports = {
    port: process.env.PORT || 3000,
    session: {
        secret: 'zBlog',
        key: 'zBlog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://zoulei:zoulei1463.%3f@cluster0-shard-00-00-tggul.mongodb.net:27017,cluster0-shard-00-01-tggul.mongodb.net:27017,cluster0-shard-00-02-tggul.mongodb.net:27017/zBlog?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
};

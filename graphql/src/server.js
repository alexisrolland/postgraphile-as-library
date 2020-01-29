const http = require("http");
const { postgraphile } = require("postgraphile");

http.createServer(
    postgraphile(process.env.DATABASE_URL, "public", {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true
    })
).listen(process.env.PORT);

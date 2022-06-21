const all = {
        isDev: process.env.NODE_ENV == "development",
        isTest: process.env.NODE_ENV == "test",
        env: process.env.NODE_ENV,
        PORT: 3001,
        context_path: "vueadmin",
        jwt_secret: "jwttoken", //jwt秘钥
        token_expires: 1000 * 60 * 60 * 2 //token 过期时间
    }
    /* eslint-disable */
const config = Object.assign(
    all,
    require(`./env/${process.env.NODE_ENV}`).default || {}
);
/* eslint-enable */

export default config;
const env = process.env.NODE_ENV || "development";
const config = {
  development: {
    clientEndpoint: "http://localhost/graphql",
    serverEndpoint: "http://nginx/graphql"
  },
  production: {
    clientEndpoint: "http://192.168.55.136/graphql",
    serverEndpoint: "http://192.168.55.136/graphql"
  }
}[env];

export default config;

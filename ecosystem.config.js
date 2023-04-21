module.exports = {
  apps: [
    {
      name: "strapi-ecommerce",
      script: "npm",
      args: "start",
      instances: 1,
      exec_mode: "cluster",
      autorestart: true,
      env: {
        HOST: "0.0.0.0",
        PORT: 1337,
        APP_KEYS: "676u2ghumiQMIb85Ulrgpw==,HQYBaQjCJBpikrONqHwwUA==,W6G8No6WpSCHI7QGReAPwA==,OWwk7OYBZEGMonVA5td6aQ==",
        API_TOKEN_SALT: "Oi5LaibefyCWFW073+IAlg==",
        ADMIN_JWT_SECRET: "IJz213KyiBriPMJSWRaAMg==",
        JWT_SECRET: "wc6q1c3IS+2XSJsI6wX4mg==",
        DATABASE_CLIENT: "mysql",
        DATABASE_HOST: "hasib.dev",
        DATABASE_PORT: 3306,
        DATABASE_NAME: "hasibde2_strapi-ecommerce",
        DATABASE_USERNAME: "hasibde2_admin",
        DATABASE_PASSWORD: "Hasib12345678",
      }
    }
  ]
};

module.exports = {
  apps: [
    {
      name: "strapi-ecommerce",
      script: "npm",
      args: "run develop",
      instances: 1,
      exec_mode: "cluster",
      autorestart: true,
      env: {
        HOST: "0.0.0.0",
        PORT: 1337,
        APP_KEYS: "toBeModified1,toBeModified2",
        API_TOKEN_SALT: "toBeModified",
        ADMIN_JWT_SECRET: "toBeModified",
        JWT_SECRET: "toBeModified",
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

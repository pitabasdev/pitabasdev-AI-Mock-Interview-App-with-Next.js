/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://db_owner:7NMYA8eDsQvp@ep-jolly-sun-a5imscxm.us-east-2.aws.neon.tech/interview?sslmode=require',
    }
  };
/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://content_owner:dbhUKnY4W6DH@ep-plain-lake-a52nvnpn.us-east-2.aws.neon.tech/contentGen?sslmode=require',
    }
  };

  
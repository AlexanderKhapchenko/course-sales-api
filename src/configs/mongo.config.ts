export const getMongoConfig = () => {
  const login = process.env.MONGO_LOGIN;
  const password = process.env.MONGO_PASSWORD;
  const host = process.env.MONGO_HOST;
  const port = process.env.MONGO_PORT;
  const authDatabase = process.env.MONGO_AUTH_DATABASE;

  return `mongodb://${login}:${password}@${host}:${port}/${authDatabase}`;
};

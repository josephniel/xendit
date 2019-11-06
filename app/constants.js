const {
  MONGODB_USERNAME: user,
  MONGODB_PASSWORD: password,
  MONGODB_HOST: host,
  MONGODB_PORT: port,
  MONGODB_DATABASE: database
} = process.env;

export const HOST = '0.0.0.0';
export const PORT = 8080;
export const MONGODB_URI = `mongodb://${user}:${password}@${host}:${port}/${database}`;

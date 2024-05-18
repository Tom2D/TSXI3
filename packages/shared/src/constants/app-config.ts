export const HOSTNAME = "localhost";
export const CLIENT_PORT = 5173; // Also referenced in vite.config.ts and debug configuration
export const SERVER_PORT = 3000;

export const SERVER_AUTHORITY = `http://${HOSTNAME}:${SERVER_PORT}`;
export const CLIENT_AUTHORITY = `http://${HOSTNAME}:${CLIENT_PORT}`;

export const devmode = import.meta.env.MODE == 'development';
export const url = devmode ? 'http://localhost:3001' : location.origin;

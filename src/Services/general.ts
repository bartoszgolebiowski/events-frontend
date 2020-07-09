export const IP = process.env.API_SERVER;

export const checkStatus = (errorMessage: string) => (res: Response) => {
  if (res.status < 500) {
    return res;
  }
  throw `${errorMessage}`;
};

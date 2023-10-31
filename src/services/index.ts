export async function verifyToken(token = ''): Promise<boolean> {
  return new Promise((resolve, reject) => {
    if (token === 'admin') {
      resolve(true);
    }
    reject(false);
  });
}

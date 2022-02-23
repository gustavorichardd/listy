const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateRandomKey() {
  let result = '';
  const charactersLength = char.length;
  for (let i = 0; i < 8; i++) {
    result += char.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export default generateRandomKey
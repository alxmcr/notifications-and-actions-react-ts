import { redirect } from 'react-router-dom';

export const protectedLoader = () => {
  const isValid: boolean = true;

  if (!isValid) {
    return redirect('/');
  }

  return null;
};

import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';

import Auth from '../components/Auth';
import { login } from '../data/auth.server';
import { isValidEmail, isValidPassword } from '../util/validation.server';

function LoginRoute() {
  return <Auth mode="login" />;
}

export default LoginRoute;

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  if (
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    !isValidEmail(email) ||
    !isValidPassword(password)
  ) {
    return json({ message: 'Invalid credentials entered.' }, { status: 400 });
  }

  return login({ email, password });
}

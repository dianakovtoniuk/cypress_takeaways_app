import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';

import Auth from '../components/Auth';
import { signup } from '../data/auth.server';
import { isValidEmail, isValidPassword } from '../util/validation.server';

function SignupRoute() {
  return <Auth mode="signup" />;
}

export default SignupRoute;

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

  return signup({ email, password });
}

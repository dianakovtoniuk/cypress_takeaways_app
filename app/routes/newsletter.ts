import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';

import { addNewsletterContact } from '../data/newsletter.server';
import { BadRequestErrorResponse } from '../util/errors';

export async function action({ request }: ActionArgs) {
  if (request.method !== 'POST') {
    return new BadRequestErrorResponse('HTTP method not allowed.');
  }

  const body = await request.formData();
  const email = body.get('email');

  try {
    if (typeof email !== 'string') {
      throw new Error('Invalid email address.');
    }
    await addNewsletterContact(email);
  } catch (error) {
    return json(
      { message: error instanceof Error ? error.message : 'Something went wrong' },
      {
        status: 400,
        statusText: 'Failed to create contact',
      }
    );
  }
  return json(
    { status: 201 }, // this is required because useFetcher does not expose the response object
    {
      status: 201,
      statusText: 'Added newsletter contact.',
    }
  );
}

export function loader() {
  throw new BadRequestErrorResponse('HTTP method not allowed.');
}

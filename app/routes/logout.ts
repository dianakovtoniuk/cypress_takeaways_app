import type { ActionArgs } from '@remix-run/node';

import { destroyUserSession } from '~/data/auth.server';
import { BadRequestErrorResponse } from '../util/errors';

export function action({ request }: ActionArgs) {
  if (request.method !== 'POST') {
    throw new BadRequestErrorResponse('HTTP method not allowed.');
  }

  return destroyUserSession(request);
}

export class BadRequestErrorResponse extends Response {
  constructor(message: string, statusText = 'Bad request') {
    super(JSON.stringify({ status: 400, message }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 400,
      statusText: statusText,
    });
  }
}

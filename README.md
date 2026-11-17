# Cypress Remix App

A small full-stack app built with Remix, TypeScript, Prisma and Tailwind CSS, covered by Cypress end-to-end tests.

Users can sign up, log in, and manage a list of key takeaways. There is also a newsletter signup form in the footer.

## Features

- Public home page with the latest takeaways
- Email and password authentication with cookie sessions
- Protected `/takeaways` page and a modal form to add new takeaways
- Newsletter signup with server-side validation
- Cypress e2e tests for auth, newsletter and takeaways

## Tech stack

- Remix
- TypeScript
- Prisma with SQLite
- Tailwind CSS
- Cypress

## Getting started

Install dependencies, create the database and seed it:

```bash
npm run init
```

Start the dev server:

```bash
npm run dev
```

The app runs at http://localhost:3000.

## Environment variables

`.env`

```
DATABASE_URL="file:./demo.db"
SESSION_SECRET="supersecure"
```

`.env.test` is used by the test scripts and points to a separate `test.db`, so your dev data stays untouched. Replace `SESSION_SECRET` before deploying anywhere.

## Scripts

| Script               | Description                                      |
| -------------------- | ------------------------------------------------ |
| `npm run dev`        | Start Remix and the Tailwind watcher             |
| `npm run build`      | Build CSS and the production bundle              |
| `npm start`          | Serve the production build                       |
| `npm run typecheck`  | Type-check the app and the Cypress code          |
| `npm test`           | Start the app on the test database and run Cypress headless |
| `npm run test:open`  | Same as above, but opens the Cypress UI          |

## Testing

Tests live in `cypress/e2e`. Before each test the database is reset through the `seedDatabase` task, which uses `prisma/seed-test.ts` to create a test user (`test@example.com` / `testpassword`) and two takeaways.

A custom `cy.login()` command is available for tests that need an authenticated session.

## Project structure

```
app/
  components/   UI components (Auth, Layout, Modal, NewsletterSignup, Takeaways)
  data/         Server-side code (Prisma client, auth, newsletter)
  routes/       Remix routes
  util/         Validation and helpers
cypress/
  e2e/          Test specs
  support/      Custom commands and global config
prisma/         Schema and seed scripts
```

# Apollo Server Testing Example

[Testing Apollo Server with Typescript](https://learnitmyway.com/apollo-server-testing/)  
A way to test GraphQL endpoints of an Apollo Server with a RESTDataSource in Typescript.

## Set up

- Install dependencies `npm install`

## Run checks

- Run typecheck, lint and tests with `npm run precommit`

Notes:

- Prettier is included in the vscode settings but excluded from linting. I decided to do this so the editor doesn't get spammed with formatting errors.
- Tests don't include a typecheck. I decided to do this because it's annoying in watch mode.

## Run locally

This is out of scope for this exercise. For it to work you would need to start a server with a REST API with a `/movies` endpoint at `http://localhost:5200/`. Then you can start this server with `npm start`.

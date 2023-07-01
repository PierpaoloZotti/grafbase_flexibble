## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Grafbase Application

Since this application was built using GraphQL you also need to start the Grafbase server
in a second terminal.

```bash
npx grafbase dev
```

The application needs some adjustments. A feature I would like to implement is the real control over
like and unlike of the posts, and of course, the views of each post

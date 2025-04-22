# YouTube Transcript API

REST API for fetching YouTube video transcripts.

## Description

This project is a REST API with Express, TypeScript and TS-REST for fetching YouTube video transcripts. It allows you to get the transcript of a YouTube video by providing the video ID.

### Technologies Used

- Node modules: [Express](https://expressjs.com/), [Swagger UI](https://swagger.io/tools/swagger-ui/), [TS-REST](https://ts-rest.com/), [youtube-transcript](https://www.npmjs.com/package/youtube-transcript),
[zod](https://zod.dev/)
- Programming Language: [TypeScript](https://www.typescriptlang.org/)
- Build Tool: [Webpack](https://webpack.js.org/)

## Prerequisites

1. Install [Node.js](https://nodejs.org/en/download) (LTS version recommended).
2. Enable Corepack to use a stable version of Yarn:

```sh
corepack enable
```

## Getting Started

1. Clone the repository:

```bash
git clone git@github.com:jhordyess/youtube-transcript-api.git
```

2. Open the project folder:

```bash
cd youtube-transcript-api
```

3. Create a `.env` file in the root folder by copying the example from the [`.env.example`](./.env.example) file. Replace the values with your own.

4. Install the dependencies:

```bash
yarn install
```

5. Run the project:

```bash
yarn dev
```

6. Now you can test the endpoints at <http://localhost:3000>. The API docs (Swagger UI) will be available at <http://localhost:3000/docs>.

## To-Do

- [ ] Add more API endpoints
- [ ] Improve error handling

## Contribution

If you would like to contribute to the project, open an issue or make a pull request on the repository.

## License

© 2025> [Jhordyess](https://github.com/jhordyess). Under the [MIT](https://choosealicense.com/licenses/mit/) license. See the [LICENSE](./LICENSE) file for more details.

---

Made with 💪 by [Jhordyess](https://www.jhordyess.com/)
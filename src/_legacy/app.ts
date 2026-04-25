import express from "express";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ ok: true, timeNow: new Date() });
});

app.listen(port, () => {
  console.log(`Listening on the http://localhost:${port}`);
});

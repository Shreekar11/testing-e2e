import express from "express";

export const app = express();

app.use(express.json());

app.post("/sum", (req: any, res: any) => {
  const { a, b } = req.body;
  const answer = a + b;
  return res.json({
    answer,
  });
});

app.listen(3000);
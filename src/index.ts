import { z } from "zod";
import express from "express";
import { client } from "./db";

export const app = express();
app.use(express.json());

const sumInput = z.object({
  a: z.number(),
  b: z.number(),
});

app.post("/sum", async (req: any, res: any) => {
  const parsedResponse = sumInput.safeParse(req.body);

  if (!parsedResponse.success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const answer = parsedResponse.data.a + parsedResponse.data.b;

  const response = await client.sum.create({
    data: {
      a: parsedResponse.data.a,
      b: parsedResponse.data.b,
      result: answer,
    },
  });

  res.json({
    answer,
    id: response.id,
  });
});

app.get("/sum", async (req: any, res: any) => {
  const parsedResponse = sumInput.safeParse({
    a: Number(req.headers["a"]),
    b: Number(req.headers["b"]),
  });

  if (!parsedResponse.success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const answer = parsedResponse.data.a + parsedResponse.data.b;

  const response = await client.sum.create({
    data: {
      a: parsedResponse.data.a,
      b: parsedResponse.data.b,
      result: answer,
    },
  });
  res.json({
    answer,
    id: response.id,
  });
});

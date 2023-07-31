import express from "express";
import connectDatabase from "./config/db.js";
import { check, validationResult } from "express-validator";
import cors from "cors";

const app = express();
const port = 10161; 

connectDatabase();

app.use(express.json({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.send("HTTP GET request sent to root API endpoint.");
});

app.post(
  "/api/users",
  [
    check("name", "Please enter your name.").not().isEmpty(),
    check("email", "Please enter a valid email.").isEmail(),
    check("password", "Please enter a password with at least 6 characters.").isLength({ min: 6 })
  ],
  (req, res) => 
  {
    const errors = validationResult(req);

    if (!errors.isEmpty())
    {
      return res.status(422).json({ errors: errors.array() });
    }
    else
    {
      return res.send(req.body);
    }
  }
);

app.listen(port, () => console.log(`Express server running @ http://localhost:${port}`));

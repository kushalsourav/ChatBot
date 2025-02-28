import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cdpRoutes from "./routes/cdpRoutes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/chat", cdpRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

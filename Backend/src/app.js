import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../Frontend/index.html"));
});

app.post('/', (req, res) => {
    const {link, category, description} = req.body;
    res.send(`link: ${link}, catergory: ${category}, description: ${description}`);
})

app.listen(3000);
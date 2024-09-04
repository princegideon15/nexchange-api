import express from "express";
import axios from "axios";
import cors from "cors"

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("public"));

app.get("/", async (req, res) => {
   
    // get cryptocurrency exchange
    try {
        const response = await axios.get("https://api.n.exchange/en/api/v1/currency/");
        res.render("index.ejs",{
          code: response.data
        });
        
    } catch (error) {
        res.render("index.ejs",{
            code: 'no data found'
        });
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
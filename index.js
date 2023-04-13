const express = require("express") ;
const mongoose = require("mongoose") ;
const cors = require("cors") ;
const bodyParser = require("body-parser") ;
const dotenv = require("dotenv") ;
const routes =require ('./routes/posts') ;


const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mmb", extended: true})); 
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const PORT = process.env.PORT || 4000
mongoose.connect(process.env.CONNECT_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>app.listen(PORT, ()=>console.log(`Servere running on port http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));
app.use('/posts', routes)
const express = require('express');
const app = express();
const cp = require('cookie-parser');



app.use(cp("HolaMundo"));

//   app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', secretsData.monitor_origin_url);
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     next();
//   });

// CORS
const cors = require('cors');
app.use(cors({ origin: "https://www.app.com", credentials: true }));
app.use(express.json());

const router = express.Router();
const { authMiddleware } = require('./authMiddleware');
router.get('/get', [authMiddleware], (req, res) => {


    res.send(req.userData);


})




app.use(router)

app.listen(3000, () => {
    console.log(`listening`);
});



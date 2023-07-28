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
app.use(cors({ origin: "https://www.idp.com", credentials: true }));
app.use(express.json());

const router = express.Router();
router.get('/set', (req, res) => {

    const user = { id: 1, name: "jorge" }

    res.cookie('auth', user, { sameSite: 'none', domain:'.backend.com',  maxAge: 24 * 60 * 60 * 1000, httpOnly: true, signed: true, secure: true }).send({ "cookie": "was set" });

})
app.use(router)

app.listen(3000, () => {
    console.log(`listening`);
});

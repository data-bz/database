const express = require('express');
const userRouter = require('./routes/user-routes')
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', userRouter)


const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

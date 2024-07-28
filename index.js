const express = require('express');
const userRouter = require('./routes/user-routes')

const app = express();
app.use('/api', userRouter)
app.use(express.json())

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

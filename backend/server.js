const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();


const connectDatabase = require("./config/database");

// Connecting to databse
connectDatabase()

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is started on PORT ${PORT} in ${process.env.NODE_ENV} mode`);
})
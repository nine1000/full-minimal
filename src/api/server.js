/* eslint-disable no-console */
const cors = require("cors")
const express = require("express")
const config = require("./config")

const app = express()

app
  .use(cors())
  .use(express.json())
  .listen(config.port, () => console.log(`Listening on :${config.port}`))

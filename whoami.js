const express = require('express')
const router = express.Router()
const osRegex = /\((.)+\)/i
router
  .route('/')
  .get((req,res,next) => {
    var result = {
      ip: req.headers["x-forwarded-for"].split(',', 1)[0],
      os: req.headers["user-agent"].split('(')[1].split(')')[0],
      lang: req.headers["accept-language"].split(',',1)[0]
    }
    res.json(result)
   
})

module.exports = router
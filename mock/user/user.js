

module.exports = {
  'GET /test/user':(req,res) => {
    res.status(200).json(JSON.stringify({a:1}))
  }
}

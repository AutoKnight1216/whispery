function sendError(res, err) {
  return res.status(404).sendFile(err)
}

module.exports = { sendError }
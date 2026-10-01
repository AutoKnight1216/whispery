function sendError(res, err) {
  return res.status(404).render(err)
}

module.exports = { sendError }
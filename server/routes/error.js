exports.client = (req, res) => {
  res.status(404).render('error', {
    layout: 'error',
    statusCode: 404,
    errorMessage: 'Not a route :/',
  })
}
exports.server = (err, req, res, next) => {
  console.log('internal server error ', err)
  res.status(500).render('error', {
    layout: 'error',
    statusCode: 500,
    errorMessage: 'Internal server error',
  })
}

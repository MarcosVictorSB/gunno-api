const NOT_FOUND = 404;

const notFound = (request, response) => {
  response.status(NOT_FOUND).json({ message: `A rota: ${request.url} não existe` });
};

module.exports = notFound;

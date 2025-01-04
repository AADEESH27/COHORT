const verifySchema = (schema) => {
  return (request, response, next) => {
    try {
      const validation = schema.safeParse(request.body);
      if (validation.success) {
        next();
      } else {
        throw validation.error;
      }
    } catch (error) {
      console.log(error.errors);
      response.status(400).json({ message: error.errors });
    }
  };
};

module.exports = verifySchema;

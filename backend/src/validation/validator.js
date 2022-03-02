exports.validateRequest = (validationSchema) => async (req, res, next) => {
  try {
    const result = await validationSchema.validate(req.body);
    if (result) {
      req.body = result;
      next();
    }
  } catch (error) {
    res.send(error);
  }
};

exports.validData = async (req, res, next) => {
  console.log(req.body);
  try {
    const isValid = await schema.validate(req.body);
    if (isValid) {
      next();
    } else {
      throw new Error('Cannot validate');
    }
  } catch (error) {
    res.send(error.message);
  }
};

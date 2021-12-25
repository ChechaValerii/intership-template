const UserService = require('./service');
const UserValidation = require('./validation');
const ValidationError = require('../../error/ValidationError');

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findAll(req, res, next) {
  try {
    const users = await UserService.findAll();

    res.render('users', {
      data: {
        status: 200,
        users,
      },
    });
  } catch (error) {
    next(error);
  }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findById(req, res, next) {
  try {
    const { error } = UserValidation.findById(req.params);

    if (error) {
      throw new ValidationError(error.details);
    }

    const user = await UserService.findById(req.params.id);

    res.status(200).json({
      data: user,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise<void>}
 */
async function updateById(req, res, next) {
  try {
    const { error } = UserValidation.updateById(req.body);

    if (error) {
      throw new ValidationError(error.details);
    }

    const updatedUser = await UserService.updateById(req.body.id, req.body);

    res.status(200).json({
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise<void>}
 */
async function deleteById(req, res, next) {
  try {
    const { error } = UserValidation.deleteById(req.body);

    if (error) {
      throw new ValidationError(error.details);
    }

    const deletedUser = await UserService.deleteById(req.body.id);

    res.status(200).json({
      data: deletedUser,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  findAll,
  findById,
  updateById,
  deleteById,
};

//whichever function have async and await wrap it in asyncErrorHandler, to catch error automatically

export default function asyncErrorHandler(func) {
  return function (req, res, next) {
    func(req, res, next).catch((err) => next(err)); // passing to global error handler
  };
}

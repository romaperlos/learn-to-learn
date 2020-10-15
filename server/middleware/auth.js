// middleware function to check for logged-in users
export const sessionChecker = (url = '') => async function (req, res, next) {
  if (!req.session.user) {
    // res.session.prevUrl = req.originalUrl;
    res.redirect(`/${url}`);
  } else {
    next();
  }
};

export const ownerChecker = (req, res, itemAuthorId) => {
  if (!req.session.user || itemAuthorId != req.session.user._id) {
    // res.session.prevUrl = req.originalUrl;
    res.redirect('/profile');
  };
};

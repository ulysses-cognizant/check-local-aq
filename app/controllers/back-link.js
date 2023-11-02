function setBackLink(req, res, next) {
    if (req.headers.referer) {
      const referrer = new URL(req.headers.referer, `http://${req.headers.host}`);
      if (referrer.pathname.startsWith('/location/') || referrer.pathname.startsWith('/stations/')) {
        req.session.backUrl = referrer.pathname;
      }
    }
    next();
  }
  
  module.exports = setBackLink;
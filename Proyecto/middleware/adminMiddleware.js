function adminMiddleware(req, res, next) {

    if (!req.session.userLogged){
        return res.redirect('/')
    }

    if (req.session.userLogged && (req.session.userLogged.idRoleFK != 1)){
        return res.redirect('/')
    }

    next();
}

module.exports = adminMiddleware;
function adminMiddleware(req, res, next) {

    if (!req.session.userLogged){
        console.error(req.session.userLogged, 'acAAAAAAAAAAAAAAAAAAAAAAAAAA')
        return res.redirect('/products')
    }

    if (req.session.userLogged && (req.session.userLogged.idRoleFK != 1)){
        return res.redirect('/products')
    }

    next();
}

module.exports = adminMiddleware;
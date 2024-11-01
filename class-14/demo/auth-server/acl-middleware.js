'use strict';

module.exports = (capability) => {
    return (req, res, next) => {
        // I expect that the bearerAuthMiddleware converted the token into a user object
        // and added it to the req object => req.user
        // so I have {username: 'Mohammad', capabilities: ['delete', 'create', ...]}
        try {
            if(req.user.capabilities.includes(capability)) {
                next();
            } else {
                // next('Access Denied');
                return res.status(403).send('Access Denied!')
            }
        } catch(err) {
            next('Invalid !')
        }
    }
}

// basicMiddleware

// square(2)

// square(4)

// aclMiddleware('delete')
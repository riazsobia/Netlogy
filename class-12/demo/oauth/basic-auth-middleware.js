const base64 = require('base-64');
const users = require('./users');

module.exports = (req, res, next)=> {
    if (!req.headers.authorization)  {
        next('invaid login');
        return; // stop the code.
    }
    let authHeader = req.headers.authorization.split(" ");
    if (authHeader[0] != "Basic") {
        next('invaid login');
        return; // stop the code.
    }
    let basic = authHeader.pop();
    let [user, password] = base64.decode(basic).split(":");
    users.authenticateBasic(user, password).then(verified=>{
        console.log("before token !")
        users.generateToken(user).then(generatedToken=> {
            req.token = generatedToken;
            console.log("req.token >> ", req.token);
            next();
        }).catch(err=> next('error in Token!'))
    
    }).catch(err=> next('Invalid Login!'))

}
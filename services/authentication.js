const JWT=require('jsonwebtoken')
const secret="anshree1234";

function createtokenForUser(user) {
    const payload={
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        profileImagURL: user.profileImagURL,
        role: user.role,
    };
    const token=JWT.sign(payload,secret);
    return token;
}

function validateToken(token){
    const payload=JWT.verify(token, secret);
    return payload;
}

module.exports={
    createtokenForUser,
    validateToken,
}

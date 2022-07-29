const UsersAndRole = require('../models/usersAndRolesModels');

module.exports = {
    async getAllUsers(ctx){
        const users = await UsersAndRole.find({});
        ctx.body = users;
    },

    async authenticate(ctx){
        const {body} = ctx.request;
        let authInfo = body;
        const user = await UsersAndRole.findOne({userId: authInfo.userId});
        if(user){
            ctx.body = {userId: user.userId, role: user.role}
        } else {
            ctx.body = {userId:'xxx', timeStamp: new Date()}
        }
    },
    async authorize(ctx){
        const {body} = ctx.request;
        let userInfo = body;
        const user = await UsersAndRole.findOne({userId: userInfo.userId});
        if(user){
            ctx.body = {userId: user.userId, role: user.role}
        } else {
            ctx.body = {userId:'xxx', timeStamp: new Date()}
        }
    }
}
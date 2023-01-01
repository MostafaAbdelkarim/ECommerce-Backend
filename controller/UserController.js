const UserService = require('../service/UserService');
const BaseResponse = require('../DTO/response/BaseResponse');
const _ = require('lodash');


const createUser = async (req, res, next) => {
    try {
        const user = await UserService.createUser(req.body);
        return BaseResponse(req, res, _.pick(user, ['_id', 'username', 'role']), 201);
    } catch (error) {
        next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    try{
        const user = await UserService.getAllUsers();
        return BaseResponse(req, res, user);
    }
    catch(error){
        next(error);
    };
};

const getUserById = async (req, res, next) => {
    try{
        const user = await UserService.getUserById(req.params.id);
        return BaseResponse(req, res, user);
    }
    catch(error){
        next(error);
    };
};

const updateUserById = async (req, res, next) => {
    try{
        const user = result = await UserService.updateUserById(req);
        return BaseResponse(req, res, user);
    }
    catch(error){
        next(error);
    };
};

const deleteUserById = async (req, res, next) => {
    try{
        const user =  result = await UserService.deleteUserById(req);
        return BaseResponse(req, res, user, 204);
    }
    catch(error){
        next(error);
    };
};

const loginUser = async (req, res, next) => {
    try{
        const result = {user, token} = await UserService.loginUser(req.body);
        return BaseResponse(req, res, {'Username': `${user.username}`, 'Token': result.token});
    }
    catch (error){
        next(error);
    };
};

const userLogout = async (req, res, next) => {
    try{
        res.cookie('jwtToken', "", {maxAge: 1});
        res.clearCookie('jwtToken');
        res.removeHeader('Authorization');
        return BaseResponse(req, res, "Logout Successfull");
    }
    catch (error){
        next(error);
    };
};

const depositeAmount = async (req, res, next) => {
    try {
        const {user} = await UserService.depositeAmount(req);
        return BaseResponse(req, res, {'Username': `${user.username}`, 'Amount': `${user.deposite}`});
    } catch (error) {
       next(error);
    }
};

const resetAmount = async (req, res, next) => {
    try {
        const {user} = await UserService.resetAmount(req);
        return BaseResponse(req, res, {'Username': `${user.username}`, 'Amount': `${user.deposite}`});
    } catch (error) {
        next(error);
    }
};

const buyProduct = async (req, res, next) => {
    try {
        const result = {user, product, totalCost} = await UserService.buyProduct(req);
        return BaseResponse(req, res, {
            'Total spent': `${totalCost}`, 
            'Product': `${result.product.productName}`, 
            'Current Available amount': `${result.user.deposite}`});
    } catch (error) {
        next(error);
    }
};

const getCurrentUserUsingToken = async (req, res, next) => {
    try {
        const user = await UserService.getCurrentUserUsingToken(req);
        return BaseResponse(req, res, user);
    }catch (error) {
        next(error)
    }
};

module.exports = {
    createUser, 
    getAllUsers, 
    getUserById, 
    updateUserById, 
    deleteUserById, 
    loginUser, 
    userLogout, 
    depositeAmount,
    resetAmount,
    buyProduct,
    getCurrentUserUsingToken
};
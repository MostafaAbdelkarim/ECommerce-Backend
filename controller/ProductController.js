const ProductService = require('../service/ProductService');
const BaseResponse = require('../DTO/response/BaseResponse');
const _ = require('lodash');

const createProduct = async (req, res, next) => {
    try{
        const result = {product, report} = await ProductService.createProduct(req);
        return BaseResponse(res,_.pick(result.product, ['productName', 'cost', 'amountAvailable']), 201);
    }
    catch (error){
        next(error);
    };
};

const getAllProducts = async (req, res, next) => {
    try{
        const product = await ProductService.getAllProducts(req);
        return BaseResponse(res, product);
    }
    catch(error){
        next(error);
    }
}

const getProductById = async (req, res, next) => {
    try {
        const product = await ProductService.getProductById(req);
        return BaseResponse(res, product);
    } catch (error) {
        next(error);
    }
}

const updateProductById = async (req, res, next) => {
    try {
        const product = await ProductService.updateProductById(req);
        return BaseResponse(res, product);
    } catch (error) {
        next(error);
    }
}

const deleteProductById = async (req, res, next) => {
    try {
        const product = await ProductService.deleteProductById(req);
        return BaseResponse(res, product, 204);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createProduct, 
    getAllProducts, 
    getProductById, 
    updateProductById, 
    deleteProductById
};
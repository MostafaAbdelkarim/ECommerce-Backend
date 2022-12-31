function BaseResponse (res, body, statusCode=200, status="Success") {
    return res.status(statusCode).send(
        {
            timeStamp: new Date(), 
            status: status, 
            body: body
        });
};
  
module.exports = BaseResponse;
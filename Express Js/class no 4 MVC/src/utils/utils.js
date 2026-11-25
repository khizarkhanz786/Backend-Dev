
const successRes = (statuscode, status , message, res ,data = []) =>{
    res.status(statuscode).json({
        status: status,
        message: message,
        data: data
    });
}
const errorRes = (statuscode, status , message, res ) =>{
    res.status(statuscode).json({
        status: status,
        message: message,
        
    });
}

export {successRes, errorRes};
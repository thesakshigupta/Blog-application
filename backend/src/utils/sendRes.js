export function sendRes(res, statusCode, msg, status, data){
   res.status(statusCode).json({
    message: msg,
    status: status,
    data: data
   });
}


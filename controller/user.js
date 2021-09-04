const { check, validationResult } = require('express-validator');
module.exports={
    signUp(req,res){
        let respObj={
           "firstName":req.body.firstName,
           "lastName":req.body.lastName,
           "email":req.body.email,
           "phoneNumber":req.body.phoneNumber,
           "isNewLetterSubscribed":req.body.newLetterSubscribed
       }
       let respMsg=getRespMsg(respObj);
       var errors = validationResult(req).array();
       let succmsg={
           "msg":respMsg
       }
        if (errors.length>0) {
            req.session.errors = errors;
            req.session.success = false;
            res.redirect('/user');
        } else {
            req.session.success = true;
            req.session.successMsg=[succmsg];
            res.redirect('/user');
        }
    }
}
function getRespMsg(data){
    let msg="";
    msg +="Hello "+data.firstName+" "+data.lastName+ ", Thank you for signing up. Your account is created.";
    if(data.isNewLetterSubscribed){
        msg +=" You would be receiving our periodic newsletters to your email: "+data.email;
    }
    return msg;
}



import joi from 'joi';
import passcomplexity from 'joi-password-complexity';



 const Regvalidate = (data) =>{
    const schema = joi.object({
        name : joi.string().min(1).max(20).required().label("name"),
        email:joi.string().email().required().label("email"),
       phone : joi.number().required().required(),
       password1 : passcomplexity().required().label("password"),
       password2 : passcomplexity().required().label("password"),
    })
    return schema.validate(data)
}

const logvalidate = (data) =>{
    const schema = joi.object({
        email:joi.string().email().required().label("email"),
        password :joi.string().required().label("password"),

    })
    return schema.validate(data);
}

export default {
    logvalidate,
    Regvalidate
}
import joi from "joi";

export const insertCardSchema = joi.object({
    type: joi.string().valid('groceries', 'restaurant', 'transport', 'education', 'health').required(),
    employeeId: joi.number().required()
});

export const validateCardSchema = joi.object({
    CVC: joi.string().regex(/^[0-9]{3}$/).required(),
    password: joi.string().regex(/^[0-9]{4}$/).required()
});

export const changeStatusSchema = joi.object({
    password: joi.string().regex(/^[0-9]{4}$/).required()
});
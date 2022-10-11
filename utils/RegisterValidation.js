const Joi = require("joi");

const RegisterValidation = (data) => {
    const schema = Joi.object({
        fName: Joi.string().required().messages({
            "string.empty": "First Name cannot be an empty field",
            "any.required": "First Name is a required field",
        }),
        lName: Joi.string().required().messages({
            "string.empty": "Last Name cannot be an empty field",
            "any.required": "Last Name is a required field",
        }),
        phone: Joi.string().required().min(8).messages({
            "string.empty": "Phone Number cannot be an empty field",
            "any.required": "Phone Number is a required field",
            "string.min": `Phone number must have 8 digits.`,
        }),
        adresse: Joi.string().required().messages({
            "string.empty": "Last Name cannot be an empty field",
            "any.required": "Last Name is a required field",
        }),
        email: Joi.string()
            .min(6)
            .required()
            .email({
                minDomainSegments: 2,
            })
            .messages({
                "string.empty": "Email cannot be an empty field",
                "string.email": "Your email must be a valid email",
                "string.required": "Email is a required field",
            }),
        password: Joi.string()
            .min(8)
            .required()
            .pattern(
                new RegExp(
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&*/])(?=.{8,})"
                )
            )
            .messages({
                "string.min": "Password length must be at least 8 characters",
                "string.pattern.base":
                    "The password must contain at least one lowercase, one uppercase, one numeric character, one special character",
                "string.required": "email is a required field",
            }),
        confirmPassword: Joi.any()
            .equal(Joi.ref("password"))
            .required()
            .label("Confirm password")
            .options({
                messages: {
                    "any.only": "Confirm password does not match",
                    "any.required": "Please confirm your password",
                },
            }),
    });
    return schema.validate(data);
};

module.exports.RegisterValidation = RegisterValidation;

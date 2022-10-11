const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const { RegisterValidation } = require("../../utils/RegisterValidation");
module.exports = async (req, res) => {
    try {
        let { fName, lName, phone, adresse, email, password } =
            req.body;

        //Look for existed user
        let testUser = await User.findOne({ email });
        if (testUser) {
            return res.status(401).json({
                status: false,
                message: "Email already exists, please try another one",
            });
        }
        //control validation
        let { error } = await RegisterValidation(req.body);
        if (error) {
            return res
                .status(401)
                .json({ status: false, error: error.details[0].message });
        }
        //hash password
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            fName,
            lName,
            phone,
            adresse,
            email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        res.status(200).json({
            message: "Your account was created successfully",
        });
    } catch (error) {
        if (error) throw error;
        res.status(403).json({ status: false, error });
    }
};

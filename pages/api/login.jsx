import Users from '@/models/Users';
import connectDb from '@/middleware/dbConnect';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            let validUser = await Users.findOne({ email: req.body.email });

            if (validUser) {
                let bytes = CryptoJS.AES.decrypt(validUser.password, 'secretKey');
                let decryptedData = bytes.toString(CryptoJS.enc.Utf8);


                if (decryptedData == req.body.password) {
                    var token = jwt.sign({ userId: validUser._id, email: validUser.email }, 'jwtSecret');
                    res.status(200).json({ token, email: validUser.email, message: "Logged In Successfully!" });
                }
                else {
                    res.status(404).json({ message: "Invalid Credentials!" });
                }
            }
            else {
                res.status(404).json({ message: "Invalid Credentials!" });
            }
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error!" });
        }
    }
    else {
        res.status(400).json({ message: "Invalid Request Method!" });
    }
}

export default connectDb(handler);
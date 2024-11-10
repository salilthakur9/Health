import jwt from 'jsonwebtoken';

// Doctor authentication middleware
const authDoctor = async (req, res, next) => {
    try {
        // Get dToken from the headers
        const dToken = req.headers['dtoken']; // Use lowercase if it's sent as a custom header

        // Check if dToken is provided
        if (!dToken) {
            return res.json({ success: false, message: "Not authorized, please login again" });
        }

        // Verify token
        const token_decode = jwt.verify(dToken, process.env.JWT_SECRET);
        req.body.docId = token_decode.id; // Attach doctor ID to the request body
        next(); // Continue to the next middleware or route handler

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

export default authDoctor;

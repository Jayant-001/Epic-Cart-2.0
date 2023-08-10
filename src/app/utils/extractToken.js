import jwt from "jsonwebtoken";

export const extractToken = async (req) => {
    try {
        const token = req.cookies.get("token")?.value || '';
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        return decodedData.id;
    } catch (err) {
        // console.log(err)
        return null
    }
};
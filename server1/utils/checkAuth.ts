import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface IRequestWithUserId extends Request {
    userId: string;
}
interface JwtPayload {
    _id: string;
}

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
    console.log(token);
    if (!token) {
        return res.status(403).json({
            message: "Нет доступа",
        });
    }
    
    try {
        const { _id } = jwt.verify(token, "secret123") as JwtPayload;
        (req as IRequestWithUserId).userId = _id;
        next();
    } catch (err) {
        console.log(err)
        return res.status(403).json({
            message: "Нет доступа1",
        });
    }
};
export default checkAuth;

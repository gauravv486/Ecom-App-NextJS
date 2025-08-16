// @ts-nocheck
import jwt from 'jsonwebtoken';

export  function generateToken( data : any ){
    const token = jwt.sign( data , process.env.JWT_SECRET);
    return token;
}

export function verifyToken(token){
    const decoded = jwt.verify(token ,  process.env.JWT_SECRET);
    return decoded;
}
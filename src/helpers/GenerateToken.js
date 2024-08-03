import jwt from "jsonwebtoken"

const generateToken = () => {
    const token = jwt.sign(
        {},
        process.env.SECRET_KEY,
        {expiresIn: '5m'}
    )
    return token
}

export default generateToken
import jwt from "next-auth/jwt"

const secret = process.env.JWT_

export default async (req: any, res: any) => {
  const token = await jwt.getToken({ req, secret })
  if (token) {
    // Signed in
    console.log("JSON Web Token", JSON.stringify(token, null, 2))
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}
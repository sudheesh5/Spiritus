import jwt from 'jsonwebtoken'

//doctor authentication middleware
const authDoctor = async (req,res,next) => {
    try {
        const {dtoken} = req.headers
        if(!dtoken){
            return res.json({success:false,message:"Not authorized. Login again"})
        }
        const token_decode = jwt.verify(dtoken,process.env.JWT_SECRET)     
        req.body.docId = token_decode.id

        next()

    } catch (error) {
        console.error(error); // Log the error for better debugging
        res.json({ success: false, message:error.message});
    }
}

export default authDoctor
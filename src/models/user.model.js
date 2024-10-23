import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
    {
        username: {
            type : String,
            required : true,
            unique : true, // Unique index. If you specify `unique: true`
            lowercase : true, // Convert to lowercase
            trim : true, // Remove white spaces
            index : true // Index for faster search
        },

        email: {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true
        },

        fullName: {
            type : String,
            required : true,
            trim : true,
            index : true
        },

        avatar: {
            type : String, // cloudinary URL
            required : true
        },

        coverImage: {
            type : String // cloudinary URL
        },

        watchHistory: {
            type : Schema.Types.ObjectId,
            ref : 'Video'
        },

        password: {
            type : String,
            required : [true, 'Password is required']
        },

        refreshToken: {
            type : String
        },

    }, 
    {
        timestamps : true
    }
)


UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
}) // Hash password before saving



UserSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
} // Check if password is correct



UserSchema.methods.generateAccessToken = function () {
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_ExpiresIn 
        }   

    )
} // Generate access token



UserSchema.methods.generateRefreshToken = function () {
    jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_ExpiresIn 
        }   

    )
} // Generate refresh token
    

export const User = mongoose.model('User', UserSchema)
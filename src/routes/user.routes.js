import userJWTDTO from "#dto/userJwt.js";
import userLoginDTO from "#dto/userLogin.js";
import userRegisterDTO from "#dto/userRegister.js";
import userUnregisterDTO from "#dto/userUnregister.js";
import userUpdateDataDTO from "#dto/userUpdateData.js";
import userUpdateEmailDTO from "#dto/userUpdateEmail.js";
import userUpdatePasswordDTO from "#dto/userUpdatePassword.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post('/register',
   userRegisterDTO,
   userRegisterController);


userRouter.post('/login',
   userLoginDTO,
   userLoginController);

userRouter.get('/profile',
   userJWTDTO,
   userProfileController)

userRouter.patch('/update-data',
   userJWTDTO,
   userUpdateDataDTO,
   userUpdateDataController)

userRouter.patch('/update-email',
   userJWTDTO,
   userUpdateEmailDTO,
   userUpdateEmailController)

userRouter.patch('/update-password',
   userJWTDTO,
   userUpdatePasswordDTO,
   userUpdatePasswordController)

userRouter.delete('/unregister',
   userJWTDTO,
   userUnregisterDTO,
   userUnregisterController)


export default userRouter;
import userLoginControllers from "#controllers/loginController.js";
import userProfileControllers from "#controllers/profileController.js";
import userRegisterControllers from "#controllers/registerController.js";
import userUnregisterController from "#controllers/unregister.js";
import userUpdateDataController from "#controllers/updateDataController.js.js";

import userUpdateEmailController from "#controllers/updateEmailController.js";
import userUpdatePasswordController from "#controllers/updatePasswordController copy.js";
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
   userRegisterControllers);



userRouter.post('/login',
   userLoginDTO,
   userLoginControllers);


userRouter.get('/profile',
   userJWTDTO,
   userProfileControllers)

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
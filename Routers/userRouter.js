import {
  signIn,
  signUp,
  verifyEmail,
  userData,
} from "../Controllers/userController.js";
import express from "express";
import {
  signInMethod,
  signUpMethod,
  checkId,
} from "../MiddleWares/Validations/userValidation.js";
import validator from "../MiddleWares/Validations/validator.js";
import { fileUpload } from "../utils/fileUpload.js";
let router = express.Router();

router.route("/signIn").post(signInMethod, validator, signIn);

//! we should put fileUpload first layer to check on image [path-type];
//! any place except here did not work;
router.post(
  "/signup",
  fileUpload("imagePath"),
  signUpMethod,
  validator,
  signUp
);

router.get("/user/:id", checkId, validator, userData);
router.get("/verify/:token", verifyEmail);

export default router;

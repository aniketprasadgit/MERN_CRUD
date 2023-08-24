const express = require("express");
const {
  userpost,
  userget,
  singleuserget,
  useredit,
  userdelete,
  userstatus,
  userExport,
} = require("../Controllers/usersControllers");
const upload = require("../multerconfig/storageConfig");

const router = new express.Router();

//routes
router.post("/user/register", upload.single("user_profile"), userpost);
router.get("/user/details", userget);
router.get("/user/:id", singleuserget);
router.put("/user/edit/:id", upload.single("user_profile"), useredit);
router.delete("/user/delete/:id", userdelete);

router.put("/user/status/:id", userstatus);
router.get("/userexport",userExport)

module.exports = router;

import express from "express";
const router=new express.Router();
import {getAllUser} from "../controller/user_ctrl.js"

//注册新用户
router.post('/user_register', (req, res) => {
    res.send("OK user_register");
})

// 登录
router.post('/user_login', (req, res) => {
    res.send("OK user_register");
})
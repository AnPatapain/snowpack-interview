import express from "express";
import authService from "../services/Auth.service";

import {body, validationResult} from 'express-validator';

let signUp = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        // Sanitize input
        const sanitizeInput = [
            body('email').trim().escape().normalizeEmail(),
            body('password').escape(),
        ];
        await Promise.all(sanitizeInput.map(sanitizer => sanitizer.run(req)))

        const userData = { email: req.body.email, password: req.body.password };

        // business logic
        const user = await authService.signUp(userData)

        res.status(201).json({ message: "signup success", userEmail: user.email });
    } catch (err) {
        next(err)
    }
}

let signIn = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        // Sanitization middleware
        const sanitizeInput = [
            body('email').trim().escape().normalizeEmail(),
            body('password').escape(),
        ];

        // Run sanitization middleware
        await Promise.all(sanitizeInput.map(sanitizer => sanitizer.run(req)))

        const userData = {
            email: req.body.email,
            password: req.body.password,
        }
        // const userSession = req.session
        const response = await authService.signIn(userData)

        res.status(200).send(response)
    } catch (err) {
        next(err)
    }
}
const authController = {
    signUp,
    signIn,
}

export default authController;
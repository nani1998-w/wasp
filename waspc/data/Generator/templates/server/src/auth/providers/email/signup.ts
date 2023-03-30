import { Request, Response } from 'express';
import { EmailSender, EmailFromField } from "../../../email/core/types.js";
import { handleRejection } from "../../../utils.js";
import { createEmailVerificationLink, createUser, findUserBy, deleteUser } from "../../utils.js";
import { GetVerificationEmailContentFn } from './types.js';

export function getSignupRoute({
    emailSender,
    fromField,
    clientRoute,
    getVerificationEmailContent,
}: {
    emailSender: EmailSender;
    fromField: EmailFromField;
    clientRoute: string;
    getVerificationEmailContent: GetVerificationEmailContentFn;
}) {
    return handleRejection(async (req: Request<{ username: string; password: string; }>, res: Response) => {
        const userFields = req.body;
        userFields.username = userFields.username.toLowerCase();

        const existingUser  = await findUserBy<'username'>({ username: userFields.username });
        if (existingUser && existingUser.isEmailVerified) {
            return res.status(400).json({ message: 'User with this email already exists.' });
        } else if (existingUser && !existingUser.isEmailVerified) {
            // TODO: Check using emailVerificationSentAt to ensure we send email once per minute
            await deleteUser(existingUser);
        }
    
        const user = await createUser(userFields);

        const verificationLink = await createEmailVerificationLink(user, clientRoute);
        try {
            await emailSender.send({
                from: fromField,
                to: userFields.username,
                ...getVerificationEmailContent({ verificationLink }),
            });
        } catch (e: any) {
            console.error("Failed to send email verification email:", e);
            return res.status(500).json({ success: false, message: "Failed to send email verification email." });
        } 
      
        return res.json({ success: true });
    });
}
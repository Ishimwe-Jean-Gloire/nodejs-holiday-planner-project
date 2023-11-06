import express from "express";

const replyRouter = express.Router();

import { replyContact } from "../controllers/replyingContact";


replyRouter.post("/:contactId", replyContact);



export default replyRouter;
import { TelegramClient } from 'telegram'
import { StringSession }  from 'telegram/sessions'
import * as dotenv from "dotenv";

dotenv.config();


const apiId = Number(process.env.API_ID)
const apiHash = String(process.env.API_HASH)
const stringSession = new StringSession(process.env.STRING_SESSION); // fill this later with the value from session.save()

(async () => {
    const client = new TelegramClient(stringSession, apiId, apiHash, { connectionRetries: 5 });
    await client.connect()
    console.log('You should now be connected.');
    console.log(client.session.save()) // Save this string to avoid logging in again
    await client.sendMessage('me', { message: 'Hello!' });
})()

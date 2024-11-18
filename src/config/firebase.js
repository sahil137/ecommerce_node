import { readFileSync } from "fs";
import admin from "firebase-admin";

const serviceAccountPath = "./src/config/firebaseServiceKey.json";
const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf-8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;

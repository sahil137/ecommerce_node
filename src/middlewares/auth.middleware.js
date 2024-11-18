import admin from "../config/firebase.js";

const authCheck = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Unaothorized: Missing or invalid token" });
    }
    const idToken = authHeader.split(" ")[1];

    // Verify the ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    // attach user info to the request
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Error in validating token:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export { authCheck };

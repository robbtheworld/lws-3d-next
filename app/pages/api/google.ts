// import { google } from "googleapis";

// const GoogleReviews = () => {
//   export default function handler(req, res) {
//     if (req.method === "GET") {
//       const oauth2Client = new google.auth.OAuth2(
//         process.env.GOOGLE_CLIENT_ID,
//         process.env.GOOGLE_CLIENT_SECRET,
//         "http://localhost:3000/auth/google/callback"
//       );

//       const scopes = ["https://www.googleapis.com/auth/business.manage"];

//       const url = oauth2Client.generateAuthUrl({
//         access_type: "offline",
//         scope: scopes,
//         prompt: "consent",
//       });

//       res.redirect(url);
//     }
//   }

//   async function getBusinessReviews(auth) {
//     const mybusiness = google.mybusiness({ version: "v4", auth });

//     try {
//       const response = await mybusiness.accounts.locations.reviews.list({
//         parent: "accounts/{accountId}/locations/{locationId}",
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Request failed:", error);
//       return null;
//     }
//   }
// };
// export default GoogleReviews;

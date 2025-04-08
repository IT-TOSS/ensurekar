
// import { setAuth } from "@/store/store";
// import { useDispatch } from "react-redux";


// const fetchUserInfo = async () => {
//   const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
//   const CLIENT_SECRET = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || "";
//   const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI || "";

//   const TOKEN_URL = "https://oauth2.googleapis.com/token";
//   const urlParams = new URLSearchParams(window.location.search);
//   const code = urlParams.get("code");

// const dispatch = useDispatch();




//   if (code) {
//     try {
//       // Exchange authorization code for access token
//       const tokenResponse = await fetch(TOKEN_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams({
//           code,
//           client_id: CLIENT_ID,
//           client_secret: CLIENT_SECRET,
//           redirect_uri: REDIRECT_URI,
//           grant_type: "authorization_code",
//         }).toString(),
//       });

//       const tokenData = await tokenResponse.json();

//       const { access_token } = tokenData;

//       if (access_token) {
//         const userInfoResponse = await fetch(
//           "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
//           {
//             headers: { Authorization: `Bearer ${access_token}` },
//           }
//         );

//         const userInfo = await userInfoResponse.json();

//         if (userInfo)
//           dispatch(
//             setAuth({
//               isAuthenticated:
//                 userInfo.verified_email === true ? "true" : "false",
//               userInfo: {
//                 Fname: userInfo.given_name,
//                 Lname: userInfo.family_name,
//                 email: userInfo.email,
//                 username: userInfo.email,
//                 contact: "",
//                 picture: userInfo.picture,
//               },
//             })
//           ); // set user info in redux store
//       }
//     } catch (error) {
//       console.error("Error fetching user info:", error);
//     }
//   }

//   // const userInfo = {
//   //   ...themeConfig.userInfo,
//   //   given_name: themeConfig.userInfo.Fname,
//   //   family_name: themeConfig.userInfo.Lname,
//   //   verified_email: themeConfig.isAuthenticated === true,
//   // };
//   // console.log(userInfo);
//   // setUser(userInfo);
// };

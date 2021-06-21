import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  //
  // https://next-auth.js.org/configuration/providers
  providers: [
    //Providers.Email({
    //  server: process.env.EMAIL_SERVER,
    //  from: process.env.EMAIL_FROM,
    //}),
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains
    //Providers.Apple({
    //  clientId: process.env.APPLE_ID,
    //  clientSecret: {
    //    appleId: process.env.APPLE_ID,
    //    teamId: process.env.APPLE_TEAM_ID,
    //    privateKey: process.env.APPLE_PRIVATE_KEY,
    //    keyId: process.env.APPLE_KEY_ID,
    //  },
    //}),
    //Providers.Facebook({
    //  clientId: process.env.FACEBOOK_ID,
    //  clientSecret: process.env.FACEBOOK_SECRET,
    //}),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    //Providers.Google({
    //  clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
    //  clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    //}),
    //Providers.Twitter({
    //  clientId: process.env.TWITTER_ID,
    //  clientSecret: process.env.TWITTER_SECRET,
    //}),
    // Providers.Auth0({
    //   clientId: process.env.NEXT_PUBLIC_AUTH0_ID,
    //   clientSecret: process.env.NEXT_PUBLIC_AUTH0_SECRET,
    //   domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
    // }),
  ],
});

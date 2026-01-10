# Password Protection Setup

This website can be password protected for temporary/preview deployments on Vercel.

## How to Enable Password Protection

### For Local Development:

1. Create a `.env.local` file in the root directory
2. Add these variables:
   ```
   ENABLE_PASSWORD_PROTECTION=true
   SITE_PASSWORD=your_secure_password_here
   ```
3. Restart your development server

### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these environment variables:
   - **Name:** `ENABLE_PASSWORD_PROTECTION`
     **Value:** `true`
   - **Name:** `SITE_PASSWORD`
     **Value:** `your_secure_password_here`
4. Redeploy your site (or push a new commit to trigger automatic deployment)

## How to Disable Password Protection

### To make the site public:

1. In Vercel dashboard, either:
   - Delete the `ENABLE_PASSWORD_PROTECTION` environment variable, OR
   - Set `ENABLE_PASSWORD_PROTECTION=false`
2. Redeploy the site

### For Local Development:

- Remove the variables from `.env.local` or set `ENABLE_PASSWORD_PROTECTION=false`

## How It Works

- When password protection is enabled, all visitors are redirected to `/login`
- Users must enter the correct password to access the site
- The password is stored in an HTTP-only cookie (valid for 30 days)
- Once logged in, users can navigate the site normally
- Public assets (images, fonts, etc.) remain accessible without authentication

## Security Notes

- The password is stored in environment variables (never commit passwords to git)
- Cookies are HTTP-only and secure in production
- Use a strong password for production/preview deployments
- Remember to disable password protection before making the site public

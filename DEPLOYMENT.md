# Firebase Hosting Deployment Guide

This guide will help you deploy your portfolio to Firebase Hosting.

## Prerequisites

1. A Firebase account (sign up at https://firebase.google.com)
2. Node.js and npm installed on your system

## Setup Steps

### 1. Install Firebase CLI

```bash
npm install -g firebase-tools
```

Or install locally as a dev dependency:
```bash
npm install --save-dev firebase-tools
```

### 2. Login to Firebase

```bash
firebase login
```

This will open a browser window for authentication.

### 3. Initialize Firebase Project (if not already done)

```bash
firebase init hosting
```

When prompted:
- Select "Use an existing project" or "Create a new project"
- Set public directory to: `dist`
- Configure as single-page app: `Yes`
- Set up automatic builds and deploys: `No` (unless using CI/CD)
- Overwrite index.html: `No`

### 4. Update Firebase Project ID (if needed)

Edit `.firebaserc` and update the project ID to match your Firebase project:

```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```

### 5. Build the Project

```bash
npm run build
```

This creates the `dist` folder with production-ready files.

### 6. Deploy to Firebase

```bash
npm run deploy
```

Or deploy only hosting:
```bash
npm run deploy:hosting
```

### 7. Access Your Site

After deployment, Firebase will provide you with a URL like:
```
https://your-project-id.web.app
https://your-project-id.firebaseapp.com
```

## Custom Domain (Optional)

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the instructions to verify domain ownership
4. Update DNS records as instructed

## Continuous Deployment

For automatic deployments on git push:

1. Install GitHub Actions or similar CI/CD
2. Add Firebase token as secret
3. Configure workflow to run `npm run deploy` on push to main branch

## Troubleshooting

- **Build fails**: Check that all dependencies are installed (`npm install`)
- **Deploy fails**: Verify Firebase login (`firebase login`) and project ID in `.firebaserc`
- **404 errors**: Ensure `firebase.json` has the rewrite rule for SPA routing

## Quick Deploy Commands

```bash
# Full deployment (build + deploy)
npm run deploy

# Deploy only hosting (after build)
npm run deploy:hosting

# Build only
npm run build

# Preview build locally
npm run preview
```



# Deployment Guide

This guide will help you push this project to GitHub and deploy it on IONOS Deploy Now.

## Pushing to GitHub

1. **Create a new GitHub repository**

   Go to [GitHub](https://github.com) and create a new repository named `csgo-steam-clone` (or any name you prefer).

2. **Initialize git in your project folder**

   ```bash
   cd csgo-steam-clone
   git init
   ```

3. **Update the package.json repository URL** (if you used a different name)

   Edit the `package.json` file and update the repository URL to match your GitHub username and repository name.

4. **Add your files to git**

   ```bash
   git add .
   git commit -m "Initial commit of CS:GO Steam Clone"
   ```

5. **Link to your remote repository and push**

   ```bash
   git remote add origin https://github.com/yourusername/csgo-steam-clone.git
   git branch -M main
   git push -u origin main
   ```

Now your project is on GitHub!

## Deploying to IONOS Deploy Now

### Option 1: Direct from the IONOS Deploy Now Dashboard

1. **Sign in to IONOS Deploy Now**

   Go to [IONOS Deploy Now](https://ionos.com/hosting/deploy-now) and sign in to your account.

2. **Create a new project**

   - Click "Create project"
   - Select "From GitHub"
   - Authorize IONOS Deploy Now to access your GitHub repositories
   - Select your `csgo-steam-clone` repository

3. **Configure your project**

   - Choose "Static site" as the project type
   - Configure the build settings:
     - Build command: `cp static-index.html index.html`
     - Output directory: `.`
   - Deploy the project

### Option 2: Using GitHub Actions (Recommended)

This repository already contains the necessary GitHub Actions workflow in `.github/workflows/deploy-now.yml`. You just need to set up the required secrets:

1. **Obtain IONOS API credentials**

   - Go to the IONOS Deploy Now dashboard
   - Navigate to "Access Tokens" or "API Keys"
   - Create a new API key for deployment

2. **Add GitHub Secrets**

   - Go to your GitHub repository
   - Navigate to "Settings" > "Secrets and variables" > "Actions"
   - Add the following secrets:
     - `IONOS_API_KEY`: Your IONOS API key
     - `IONOS_SERVICE_ID`: Your IONOS service ID
     - `IONOS_BRANCH_ID`: Your IONOS branch ID (usually "main" or "production")

3. **Trigger deployment**

   The deployment will automatically trigger when you push to the main branch. You can also manually trigger it:
   - Go to your GitHub repository
   - Navigate to "Actions"
   - Select the "Deploy Now" workflow
   - Click "Run workflow"

## Checking your deployment

Once the deployment is complete, you can visit your site at the URL provided by IONOS Deploy Now.

## Troubleshooting

- **Build fails**: Make sure your static-index.html file exists and is correctly formatted
- **Deployment fails**: Check the GitHub Actions logs for details
- **API key issues**: Ensure your IONOS API key has the correct permissions
- **CSS not loading**: Verify that paths to CSS and JS files are correct

## Updating your site

To update your site, simply push changes to your GitHub repository. The deployment will automatically trigger, and your changes will be live within minutes!

```bash
git add .
git commit -m "Update site with new features"
git push
```

---

For more information, refer to the [IONOS Deploy Now documentation](https://docs.ionos.com/deploy-now).

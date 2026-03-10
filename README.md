# Impostor Landing Page

This is the static website for the "Impostor" mobile game. It uses deep dark mode, glassmorphism, and neon accents. Built with pure HTML, CSS, and vanilla JS.

## How to Deploy to GitHub Pages

Since all the files are already in your local repository (`/Users/bakiucan/Documents/WEBS FOR APP/impostorapp-website`), you just need to push them to your GitHub repository and enable GitHub Pages.

### Step 1: Push Code to GitHub

Open a terminal in the project folder and run these commands to push your code to your repo:

```bash
git add .
git commit -m "Initial commit for Impostor landing page"
git branch -M main
git remote add origin https://github.com/bakiucann/impostorapp-website.git
git push -u origin main
```
*(If you already added the remote, you can skip the `git remote add ...` line.)*

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/bakiucann/impostorapp-website`
2. Click on the **Settings** tab.
3. On the left sidebar, click on **Pages**.
4. Under **Build and deployment**, look for **Source**.
5. Select **Deploy from a branch**.
6. Under **Branch**, select `main` (or `master`) and keep the folder as `/ (root)`.
7. Click **Save**.

Within a minute or two, your website will be live at `https://bakiucann.github.io/impostorapp-website/`.

## Local Development
To test locally, simply double-click `index.html` to open it in your browser, or preferrably use a local server like Live Server (VS Code extension) or Python:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

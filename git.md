If you mean CMD commands to push a VS Code project to GitHub, use:
cd path\to\your\project
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/HarishGinjupalli/Simple-Notes-App_vite_mern.git
git push -u origin main
Before this, create an empty repository on GitHub.

For later updates:
git add .
git commit -m "Update"
git push

If git is not recognized in CMD, install Git first.
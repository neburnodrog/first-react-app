# My first React App

I'll connect the React.js Frontend to a Django-REST Backend. Documenting the process here.

# 1. Creating the React project
## Created the React app project like [this](https://create-react-app.dev/docs/adding-typescript/):
```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest 
npm install create-react-app bootstrap jquery axios 
npx create-react-app my-app --template typescript
cd my-app
npm start
```

# 2. Creating the Django project
## configured the python virtual environment like [this](https://www.geeksforgeeks.org/how-to-connect-django-with-reactjs/):
```
pyenv local 3.9.1
python -m venv venv
source venv/bin/activate.fish
python -m pip install --upgrade pip
python -m pip install django
python -m pip install djangorestframework
python -m pip install django-cors-headers
```

# 3. Ignoring envs
```
echo #ENVS\n/venv\n.python-version\n\n#VSCODE\n.vscode >> .gitignore
git add .
git commit -m "initial commit"
```

# 4. Following [this](https://www.youtube.com/watch?v=Ke90Tje7VS0&t=11s) course

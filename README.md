# first-asia

## Github shortcuts

**to install git**

installing git, open terminal

```
sudo apt-get install git
```


**to start your repository**

open the folder where you want to put your git first
```
git clone https://github.com/seanryanchan/First.git
```
**to add all the files with change**
```
git add .
```

**to add a comment to the files you changed**
```
git commit -m "Your comment goes here"
```

**to push your changes to the master**
```
git push origin master
```

**to switch to branch websiteA**

first add and commit the changes with
```

git add .
git commit -m "I am finalizing this branch and switching to branch websiteA"
```

then go to another branch
```
git checkout websiteA
```

**to reset local changes made to branch websiteA**

resetting mistakes made to one branch

```
git reset
git pull origin websiteA
```

## Installing Dependencies
### Git

** to install git **

```
sudo apt-get update
sudo apt-get install git

```

** to configure git **

```
git config --global user.name "Sean Chan"
git config --global user.email "seanchan@email.com"
```

### NVM
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```
```
export NVM_DIR=”$HOME/cid/.nvm”
[ -s “$NVM_DIR/nvm.sh” ] && \. “$NVM_DIR/nvm.sh”
[ -s "$NVM_DIR/bash_completion" ] && \.   "$NVM_DIR/bash_completion"
```

to test
```
command -v nvm
```
returns
```
nvm
```

### NodeJS
```
nvm ls-remote
```
choose 12.14.0
```
nvm install v12.14.0
nvm use v12.14.0
```
verify by
```
node --version
```

### NPM
npm should be installed as you install nodeJS
### ExpressJS
```
cd /first-asia/functions/
```
```
npm install
```
## Running the Project
```
cd /first-asia/functions/
```
```
node index.js
```

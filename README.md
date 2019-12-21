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

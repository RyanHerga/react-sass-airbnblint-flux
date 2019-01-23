# Getting Started
This is a boilerplate for a NodeJS application with React, SaSS, Airbnb's React Lint, and Facebook's Flux. Latest version of all as of JAN 23, 2019. I've also added some custom configs to Airbnb's React Lint to allow for more spacing and cleaner code.

# DEVELOPMENT GUIDE
## Prerequisites
In order to run the application you will need ALL of the following:

* NodeJS (Download here: https://nodejs.org/en/download/)
* Git (Download here: https://git-scm.com/downloads) Warning: This could already be on your machine! Run `git -v` to verify.

## Cloning Git into your local Machine
1. Browse to the directory you want to download this project in.
2. Run `git clone git@github.com:RyanHerga/pcap-eagle.git` on the terminal or command prompt
3. Enter your username and password as prompted
4. The source code should now be in your local machine, you should now be able to `cd pcap-eagle`

# Installing Dependencies
1. Verify that NodeJS is installed by running ``npm -v`` on the terminal
2. `cd` to the directory for this project.
3. Run `npm install` or if that doesn't work, run `sudo npm install`
4. All dependencies should install successfully into the node_modules folder (This is sometimes a hidden folder)

## Running the application
Once the dependencies have been installed, you can run `npm start` to launch the website.
The website should now be live here:  [http://localhost:3000](http://localhost:3000)

## Setting up the IDE
We recommend using Visual Studios Code for Web Development. You can download that here: https://code.visualstudio.com/
VS Code also offers an interactive git feature so that pulling and pushing code changes can be done directly on the software. ESLint is also supported allowing automatic indentation and code corrections upon each save. There are some additional setting up to do to make sure the application runs seamlessly with VS Code.

### Get Started with ESLint
1. Open VS Code and load the project directory in your current workspace.
2. On the left navigation, click on the "Extensions" tab - That's the fourth icon down.
3. Search for "ESLint" and install Dirk Baeumer's version with 13M+ Downloads.
4. Reload VS Code
5. On Mac, Press `CMD+SHIFT+P` then look for `Preferences: Open Workspace Settings`
6. Under Search Settings, search for 'ESlint Auto Fix on Save' and enable that option by making sure the checkbox is checked.

When modifying any source code in the Workspace, you will now be able to see errors and warnings. If you save the file, VS Code will automatically fix these errors when applicable.

### Good to have VSCode Extensions
* `Auto Close Tag` by Jun Han will help with HTML tags
* `Useful React Snippets` by igorming is useful for quick React shortcuts to create components by simply writing `comp` and pressing space
* `VSCode Great Icons` by Emmanuel Béziat will help you differentiate between files in the VSCode File Explorer
* `Prettier` is a must have for any EsLint users - Configure it to work with Eslint and you can easily format documents to fit your eslint config.

## How to use Git
By this point, you've already ran one git command to clone the repository into your local machine. Git is a version-control system for tracking changes in computer files and coordinating work on those files among multiple people. 

I couldn't have explained it better, myself. For information on Git check out this tutorial: [http://rogerdudler.github.io/git-guide/](http://rogerdudler.github.io/git-guide/)

Some additional notes: Always pull before working on your code to get the latest changes and be sure to make your commit messages meaningful so that other developers know why those changes have been made.

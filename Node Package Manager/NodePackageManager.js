'use strict';
// Node Package Manager

// Dependencies: A Sea of Shared Modules

/*

As you may have learned, when developing Node.js applications, developers have access to a number 
of core modules that come preshipped when you install Node.js onto your machine.

In addition to these core Node.js modules, developers can also take advantage of modules created by 
other developers, many of which are shared freely. These third-party modules often solve common 
problems and simplify the development process. When we use these modules in our code, they are 
referred to as dependencies.

Let’s say you’re working on an app that needs to handle various formats of dates – a common and 
surprisingly difficult task! You could write your own code to handle the date and time manipulation, 
or you could use a module created by another developer (or developers) that has all the functionality 
you need.

Using dependencies is an essential aspect of efficiently creating modern web applications — 
we don’t have to reinvent the wheel each time we want to include new functionality. Furthermore, 
well-maintained modules usually solve many edge cases that you would otherwise have to seek out and 
implement yourself.

*/

// Package Management

/*

So, where do you go to find these dependencies? A hidden temple? Most of the time, these dependencies 
are installed in packages handled by a package manager. A package is simply a third-party module 
wrapped up with the list of that module’s own dependencies.

Wait, modules can be dependent on other modules?!

Yes! This is both a blessing and a curse. This ever-growing chain of modules means that modules can 
solve more and more complex problems over time while making development lightning-quick. However, 
managing modules that are dependent on other modules that are dependent on even further modules can 
be quite cumbersome to handle on your own.

We avoid these troubles by using a package manager, an indispensable tool that:

downloads and installs the packages to be used as dependencies on a project.

checks the packages to make sure they don’t have any known vulnerabilities.

checks if packages can be updated to a newer version.

handles all of the packages’ sub-dependencies.

cleanly removes all the files of a package when it’s no longer needed.

provides a repeatable and consistent process of installing dependencies for you and your teammates.

The most popular package manager is Node Package Manager which is the default package manager for 
Node.js. Its command-line tool, npm, is even included in the Node.js installation process. This 
tool enables developers to download and manage packages via the terminal.

The rest of this article will get you familiar with the npm ecosystem and walk you through 
installing a third-party Node.js package. Feel free to follow along!

Before we get started, check that you have the npm command-line tool installed on your computer by 
typing npm -v in the terminal to look up the npm version. If the command returns command not found, 
double-check your Node Installation.

*/

/*

Initializing a Node.js app that utilizes npm is a relatively straightforward process. To 
initialize a Node.js app, we open up a terminal and enter the command:

*/

// npm init

/*

This will result in a series of prompts asking us for information about our project, including our 
project’s name, version number, description and much more. Once the prompts have been completed, a
package.json file will be generated with the information listed in JSON format!

{
  "name": "my-project",
  "version": "1.0.0",
  "description": "a basic project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Super Coder",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
}


*/

/*

Quick tip: If you’re looking to get initialized quickly, you can add the flag -y to the end of the 
initialization command to skip the prompts like so: npm init -y.

Direct your attention to the "dependencies" dictionary in the file above. This section lists all of 
the project’s dependencies alongside their version numbers. Importantly, as you install new 
dependencies using npm, this file will be automatically updated so as to maintain the most 
up-to-date picture of the packages used in the application. As you can see, this project already 
has the popular routing package express listed as a dependency.

*/

// Installing

/*

There are over 1 million of packages created by developers just like you in the npm registry, and 
you can explore the collection on the npm website.

Another popular Node.js package is nodemon, a tool used to automatically restart a program when a 
file changes, alleviating the need to do so manually each time you save a file. You can enter 
“nodemon” in the search bar of the npm website, or just google “nodemon npm” to get to the official 
package page.

Each package’s npm page includes information on using the package, stats about the package, and a 
link to the GitHub repository. At the top of the right sidebar, you’ll see the install command


*/

/*

In this case:

npm i nodemon
Note: i is actually an alias for install, and either npm i or npm install can be used when 
installing a package. 

The npm i <package name> command installs a package locally in a folder called node_modules/ which 
is created in the project directory that you ran the command from. In addition, the newly 
installed package will be added to the package.json file:

{
  "name": "my-project",
  "version": "1.0.0",
  "description": "a basic project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Super Coder",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.13"
  }
}


*/

// Package Scopes

/*

Generally, most npm packages should be installed locally—this way, among other reasons, each project can control which specific versions of its dependencies it uses. That being said, there are a few other ways you might install packages.

devDependencies
While most dependencies play a direct role in the functionality of your application, development dependencies are used for the purpose of making development easier or more efficient.

In fact, the nodemon package is actually better suited as a development dependency since it makes developers’ lives easier but makes no changes to the app itself. To install nodemon as a development dependency, we can add the --save-dev flag, or its alias, -D.

npm install nodemon --save-dev
Development dependencies are listed in the "devDependencies" field of the package.json file. This indicates that the package is being used specifically for development and will not be included in a production release of the project.

{
  "name": "my-project",
  "version": "1.0.0",
  "description": "a basic project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.13"
  }
}
Like local packages, development dependencies are also stored in the local node_modules/ folder.

Global Packages
Some packages can be installed globally meaning they are available system-wide, without the need to 
install it each time you create a new application. Typically, packages installed this way will be 
used in the command-line rather than imported into a project’s code. One such example is the 
http-server package which allows you to spin up a zero-configuration server from anywhere in the 
command-line.

To install a package globally, use the -g flag with the installation command:

npm install http-server -g
http-server is a good package to install globally since it is a general command-line utility and 
its purpose is not linked to any specific functionality within an app.

Unlike local package dependencies or development dependencies, packages installed globally will not 
be listed in a projects package.json file and they will be stored in a separate 
global node_modules/ folder.

npm install

You may have noticed that, as we install third-party packages from npm, we are creating a 
package.json file for our own project. Doing so turns our own project into a package, just one 
that isn’t published in the npm registry (yet).

While you may never end up publishing your project as a public package, having this 
package.json file enables you to easily collaborate with other developers. Anyone who 
wishes to work with you on your project can simply download your package.json and run the command:

npm i

Running this command will automatically install all packages listed as dependencies or development 
dependencies. If you wish to leave out development dependencies, you can run the command with 
the --production flag.

npm i --production

Because of this convenient command, it is recommended that you do not include your local 
node_modules/ folder in any repository that you use to store and share your code to avoid 
taking up precious storage resources.

*/

Ox
===========

A responsive HTML5 Framework using SCSS, Gulp and Bower.

This framework requires the following applications to be installed.

- Node JS  http://nodejs.org/download/
- Ruby 1.9.3  https://ruby-lang.org/en/downloads/
- Sass http://sass-lang.com/install
- Compass  http://compass-style.org/install/
- Bower http://bower.io/
- Git http://git-scm.com/downloads

## Getting Started

NOTE: Be sure to run command line as administrator.

You can clone this repo using git. Navigate to where you store your projects using the cd command line. For example: ```cd Projects```.

Ensure git is initialised in this folder: ```git init```.

You should received the following message: ```Initialized empty Git repository in <folder name>/.git/```.

Decide upon the name of your website folder; this will dictate the development URL you will use with browserSync. Using the following command, clone this repository into your projects folder replaceing 'projectx' with whatever you want your website folder to be named: ```git clone git://github.com/MajorDigital/ox.git projectx```.

Navigate into the newly created folder: ```cd projectx```.

## Gulp Setup

In the ```gulpfile.js```, edit ```var project = 'projectname'``` to reflect the name of your website folder (this will be the same name used for your Virtual Host later), for example: ```var project = 'projectx'```

Ensure Gulp is installed using ```gulp -v``` in command line. If it is not, then install it using ```npm install -g gulp```.

Once Gulp is installed, install the dependencies within the package.json file using ```npm update```.

## Bower Setup

Ensure Bower is installed using ```bower -v``` in command line. If it is not, then install it using ```npm install -g bower```.

Once Bower is installed, install the dependencies within the package.json file using ```bower update```.

Once all of the dependencies are installed and gulpfile.js has been customised, run ```gulp bower``` to complete the bower tasks.

## Virtual Host Setup

Ensure you have WAMP 2.5+ installed and setup.

To add the new project as a virtual host we must do a few steps.

Firstly, find the file located at: ```C:\Windows\System32\drivers\etc\hosts``` and add: ```127.0.0.1 projectx.dev``` to the file.

Next, navigate to: ```C:\wamp\bin\apache\apache2.4.9\conf\extra\httpd-vhosts.conf``` and add: ```<VirtualHost *:80> DocumentRoot "<Project folder goes here>\projectx" ServerName projectx.dev </VirtualHost>```. You can seperate out each of these bits onto a new line.

With WAMP active, you can now navigate to ```projectx.dev``` which will communicate with BrowserSync.

## Gulp Commands

```gulp``` is the default command and will initilise BrowserSync and begin watching files for changes.

```gulp build``` takes everything in the ```src``` folder and builds it according to the ```gulpfile.js```.

```gulp dist``` is the command to run when the project is ready to be deployed/distrubted.

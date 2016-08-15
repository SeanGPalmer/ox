Ox
===========

A modular HTML, SCSS and JS framework for developing responsive, grid-based projects.

Designing websites from scratch is time-consuming and error-prone. By automating the underlying build helps to ensure best practices and provide a consistent baseline across projects.

## Installation

Once you've got a standard Node setup configured you'll be ready to use Ox in next to no time, but for those arriving at this without a previous Node installation there's a few steps to take first.

### Required

* Install [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm).
* Install [Gulp](http://gulpjs.com/): `npm install gulp -g`.
* Install [Sass](http://sass-lang.com/) `gem install sass` (requires Ruby).
* Download or clone this repo: `git clone https://github.com/majordigital/ox.git`.

### Optional

* Install [Bower]((http://bower.io/)) `npm install bower -g` (used for managing front-end dependencies).

## Setup

* Edit `gulpfile/config.js` and edit the `projectname` variable to reflect the name of the website folder; this will be used for your Virtual Host setup.
* Install the dependencies by running `npm update` within the project directory.
* If using Bower, install the bower dependencies with 'bower `bower update` and then, once the dependencies have been installed, `gulp bower`.

## Virtual Host Setup

Ensure you have WAMP 2.5+ installed and setup.

To add the new project as a virtual host we must do a few steps.

Firstly, find the file located at: ```C:\Windows\System32\drivers\etc\hosts``` and add: ```127.0.0.1 projectx.dev``` to the file.

Next, navigate to: ```C:\wamp\bin\apache\apache2.4.9\conf\extra\httpd-vhosts.conf``` and add: ```<VirtualHost *:80> DocumentRoot "<Project folder goes here>\projectx" ServerName projectx.dev </VirtualHost>```. You can seperate out each of these bits onto a new line.

With WAMP active, you can now navigate to ```projectx.dev```.

## Gulp Commands

```gulp``` is the default command and will initilise BrowserSync and begin watching files for changes.

```gulp build``` takes everything in the ```src``` folder and builds it according to the ```gulpfile.js```.

```gulp dist``` is the command to run when the project is ready to be deployed/distrubted.

## Licence

http://www.gnu.org/licenses/gpl.txt

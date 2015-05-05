#Boilerplate Scripts folder

##Folder Structure

    |-- scripts
        | |-- behaviors
        | |-- plugins
        | |-- modules
        | |-- libs
        base.js
        behaviors.js
        config.js
        globals.js
        README.md


`| |-- scripts/behaviors` all behavior modules

`| |-- scripts/plugins` all JS plugins (JQuery and otherwise) 

`| |-- scripts/modules` all distinct pieces of JS functionlaity for the application

`| |-- scripts/libs` all third party libraries and plugins

`base.js` base functions

`behaviors.js` this module searches the page for data-behavior attributes and loads the corresponding behavior module when found

`config.js` require.js configuration file

`globals.js` global variables and constants

##JS style guide
Refer to the AirBnb style guide:
https://github.com/airbnb/javascript

NB .jshintrc cannot be parsed if the property names use single quotes
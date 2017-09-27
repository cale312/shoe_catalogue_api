# Shoe Catalogue API

API for accessing shoe data from a mongo Data Base

## What it does

  * You can retrieve all the shoe stock data from the Database
  * You can add new shoe stock to the Database
  * You can update an Item in the stock either by decrementing or incrementing it

## Prerequisites
  * NodeJS
  	>NodeJS is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side.

  * Git
  	>Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people

  * Robomongo
  	>Robomongo is a free lightweight GUI for MongoDB enthusiasts.

### Installing Node

  1. goto the [nodejs.org](https://nodejs.org) website to download the package. Make sure you click the right one for your Operating system.
  2. goto the folder where the downloaded file is saved,
      * **Windows OS** - run the installer and follow the prompts, make sure you accept the license, click next a bunch of times than wait for the installation to finish. Once finish you will need to restart your machine.
      * **Linux OS** - right click on the file and click `extract here`, it will create an unzipped folder of the file, go to the folder and open the bin folder, run node.
  3. in your terminal or cmd if you using windows, type the command `node -v` and press enter, you should something like `v4.2.6` which is the current version of your node

### Installing Git

  * if you are running a **Linux** OS in your terminal type `sudo apt-get install git` and press enter
  * if you are running a **Windows** OS, go to the [Git](https://git-scm.com/downloads) website and download the file, after download is finished, go to where the downloded file is saved and double click it, follow the prompts and wait for it to finish installing
  * once installation is finished, in your terminal or cmd type `git --version` and press enter it should print something like `git version 2.7.4`

### Installing Robomongo

1. go to the [Robomong](https://robomongo.org/) website and download the installer
2. go to the folder where the downloaded file is stored
3. on a **Linux** machine, right click on the folder and click `extract here` (windows users skip to step 4)
4. open the folder in it open the bin folder and run the Robomongo file

### Forking and Cloning the repository

1. goto the [repo](https://github.com/cale312/shoe_catalogue_api), fork it first than click the `Clone or Download` button, you can either download the zip or click the clipboard icon to copy the file url
2. open your terminal or git bash if you are using a Windows machine
3. navigate to the folder you want to clone the repository in
4. type `git clone [paste the copied url]` then press enter
5. you should see the folder with all the files in it
* if you downloaded the zip file, just extract it where you want to store the folder

### Running the API locally

1. open your terminal or git bash(for Windows)
2. navigate to the folder you cloned
3. type in the terminal `npm install` to install all the dependencies in the package.json file
	>Npm is a Node Package Manager which comes with installing the node package

4. once all packages have been installed type in `nodemon`, it should print something like `Our app is running on http://localhost:4000`

# For Developers (Using AJAX)

### Prerequsite

link the jQuery script on your html file, make sure its linked before the file where you use, like this
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="[file name].js"></script>
```

#### For retrieving all the stock data use :
````javascript
$.ajax({
  type: 'GET',
  url: 'https://api-shoe-catalogue.herokuapp.com/api/shoes',
  success: function(data) {
    console.log(data);
  },
  error: function(err) {
    console.log(err);
  }
});
````

#### For retrieving all data of specific brand name use :
````javascript
$.ajax({
  type: 'GET',
  url: 'https://api-shoe-catalogue.herokuapp.com/api/shoes/brand/' + [brand_name],
  success: function(data) {
    console.log(data);
  },
  error: function(err) {
    console.log(err);
  }
});
````

#### For retrieving all data of specific size use :
````javascript
$.ajax({
  type: 'GET',
  url: 'https://api-shoe-catalogue.herokuapp.com/api/shoes/size/' + [size_number],
  success: function(data) {
    console.log(data);
  },
  error: function(err) {
    console.log(err);
  }
});
````

#### For retrieving a specific item by brand and size use :
````javascript
$.ajax({
  type: 'GET',
  url: 'https://api-shoe-catalogue.herokuapp.com/api/shoes/brand/' + [brand_name] + '/size/' + [size_number],
  success: function(data) {
    console.log(data);
  },
  error: function(err) {
    console.log(err);
  }
});
````

#### For adding new stock item use :
````javascript
$.ajax({
  type: 'POST',
  contentType: 'application/json',
  data: [object_of_the_new_stock_item]
  url: 'https://api-shoe-catalogue.herokuapp.com/api/shoes',
  success: function(data) {
    console.log(data);
  },
  error: function(err) {
    console.log(err);
  }
});
````

#### For updating the stock item, decrementing its stock count when sold, use :
````javascript
$.ajax({
  type: 'POST',
  url: 'https://api-shoe-catalogue.herokuapp.com/api/shoes/sold/id/' + [shoe_id] + '/amount/' + [number_of_stock_bought],
  success: function(data) {
    console.log(data);
  },
  error: function(err) {
    console.log(err);
  }
});
````

#### For updating the stock item, incrementing its stock count, use :
````javascript
$.ajax({
  type: 'GET',
  url: 'https://api-shoe-catalogue.herokuapp.com/api/shoes/id/' + [shoe_id] + '/amount/' + [number_of_stock_bought],
  success: function(data) {
    console.log(data);
  },
  error: function(err) {
    console.log(err);
  }
});
````
4. once all packages have been installed now type in `nodemon` to start the app, it should print something like `Our app is running on http://localhost:4000`

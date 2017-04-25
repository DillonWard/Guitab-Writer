# GUITAB WRITER - Graphical User Interface Tab Writer
###### *Dillon Ward - G00326756 - Professional Practice in IT*
---

## Introduction
The following repository contains a MEAN Stack Web Application for a third-year undergraduate project for the module Professional Practice in IT. The module is taught to undergraduate students at GMIT in the Department of Computer Science and Applied Physics. The lecturer is Damien Costello.
### Video Presentation
[![IMAGE ALT TEXT HERE](http://image.prntscr.com/image/08b28e20f93f48a9957c9b53f5f71726.png)](https://www.youtube.com/watch?v=yMsiZdEM_pI)

### Specifications
The purpose of this project is to demonstrate skills gained over the past 3 years from different modules, as well as use new technologies learned for the purpose of this project. The project should contain a design document, a demonstrative video, a guide on how to use the project and the code itself.
### Requirements
* Internet Connection
* MongoDB
* Express.js
* AngularJS
* Node.js
* Full windowed explorer

### Getting Started
To begin using the project, we need to take a look at the technologies used. The project is a MEAN Stack project, meaning it was scripted using MongoDB, AngularJS, Express, and Node.js. Bower was also used for installing some components.
To use the application is simple. The user clicks on frets/strings, and below in a text area their choice will be appended.
![alt text](http://image.prntscr.com/image/e3dfe429b4904ff9935cbdc86de1709b.png)
The wait and clear buttons can either add lines to symbolize waiting on the tab, or to clear everything and start again. The save button can send and save the tab to the database. The user can also view tabs that were previously saved by pressing the view tabs button, and the name of the tabs will appear in a modal list.

#### Components Needed
##### MongoDB
MongoDB was used for the Database. Head over [here](https://www.mongodb.com/download-center) and download Mongo.
There is an [installation guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) for Mongo on their website that can be followed.
Once mongo in installed, the user should open command prompt and enter the following command:
```
C:\Program Files\MongoDB\Server\3.4\bin
```
Once the directory is changed, enter `mongod` and the server is running.
##### Node.js
Node.js was used for installing other components, as well as handling connections. You can head over to the [download](https://nodejs.org/en/download/) section of the official Node.js website and follow the installation guide there.

##### Express
Next, head over to the [Expressjs](https://expressjs.com/en/starter/installing.html) site and follow the installation guide on how to get Express.
##### Bower
Bower is a package manager that can handle components that contain HTML, CSS, JavaScript, fonts or even image files. 
To get started with Bower, assuming Node.js was installed, use the command:
```
npm install -g bower
```
##### AngularJS
After installing Bower, you can now install Angular with one command:
```
bower install angular
```

---
## MEAN Stack
### MongoDB
#### What is MongoDB?
[Mongodb](https://www.mongodb.com/) is an open source NoSQL database. Mongo stores data in a JSON-like format that can vary in structure. Mongo uses dynamic schemas, meaning the user can create records without first defining the structure, such as fields or the types of their values.

#### Why use MongoDB?
Mongo is fast and flexible, and simple to use. Rather than using the typical tables and rows used in relational databases, MongoDB uses a document-orientated data model - Collections and Documents. This makes data integration faster and easier for certain types of applications.

#### Features
* General Purpose Database, almost as fast as the key:value NoSQL type
* High availability
* Scalability
* Aggregation: batch data processing and aggregate calculations
* Load Balancing: automatic data movement accross different shards for load balancing
* Security: authentication, authorization, etc.
* Monitoring
* Backup

### Express
#### What is Express?
[Express](https://expressjs.com/) is a light weight-web application framework that allows for the organization of a web application into the MVC architecture on the server side. Express allows users to build their backend using JavaScript.

#### Why use Express?
Express makes sure that you don't have to be re-writing code over and over. Express simply makes it easier to create a webapp, as it comes with many funcionalities such as routing, parsing, error handling, and templating.
#### Features
* Server-side web and mobile application framework
* Language - Writter in JavaScript
* Templating engines - Express comes with two templating engines, Jade and EJS, which facilitate the flow of data into a website
* MVC Pattern - Express supports the Model-View Control architecture
* Platform - Node.js
* Cross Platform
* Express builds:
    * Single/Multi page web applications
    * Hybrid Mobile and Web Apps
    * APIs

### AngularJS
#### What is AngularJS?
AngularJS is a structural framework for dynamic web applications. It allows you to use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly. AngularJS's data binding and dependency injection eliminates much of the code that would have to be otherwise written. 

#### Why use AngularJS?
Angular allows you to turn a basic, static website into a dynamic web application with features and functionalities clearly expressed. Angular uses the MVC model by asking the user to split their app into MVC components, then Angular handles the rest.
If you'd like to read more about Angular, see [10 Reasons Why You Should Use AngularJS](https://www.sitepoint.com/10-reasons-use-angularjs/).

#### Features
* Data-binding - synchronization of data between model and view components
* Scope - objects that refer to the model
* Controller - functions that are bound to a particular scope
* Services - Angular comes with a number of build in services, for example `$http` to make XMLHttpRequests
* Filters - selects a subset of items from an array and returns a new array
* Directives - Markers on DOM elements
* Templates - Rendered views with information from the controller and model
* Routing - switching views
* MVC - Supports Model View Control
* Deep Linking - encoding the state of an application in a URL so it can be bookmarked

### Node.js
#### What is Node.js?
[Node.js](https://nodejs.org/en/) is a platform build on JavaScript for easily building fast and scalable applications. Node.js is an open source, cross platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Windows, and Linux.
#### Why use Node.js?
Node is an event-driven, non-blocking I/O model that makes it light weight and efficient, and ideal for data-intensive real-time applications that run across distributed devices. Node.js has extraordinary features when it comes to developing real-time applications such as chats and gaming apps.
#### Features
* Asynchronous and Event Driven
* Speed
* Scalability - Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests.
* Buffering - Node.js does not buffer, it simply outputs the data in chunks

---
## Architecture
### Back End
#### server.js
The server.js file is where the restful API is. This is where all of the routing is done, where the `index.html` is set as the page to be loaded at the route `'/'`, and where the CRUD functions are found. 
#### tab.js
This is where the schema for the tab is saved. Here, the components of the tab object is set. The tab contains a name and a tab body, where the actual tab is saved. 
```
var TabSchema = new mongoose.Schema({
    name: String,
    tabBody: String
});
```
*The backend also contains a update function which is not in use, but is there for demonstration.*
### Front End
#### Controller.js
The controller is where the JavaScript for the tab maker is located. Here, you can find the functions that append to the text area when clicked. Whenever a button is clicked, the x/y of that is added to the text area. This is also where the image for the fret is found, which is then looped to display multiple frets - making a fretboard. `Clear` and `Wait` functions are also found here.

```
    if(row === 0){ // if the row clicked is 0, append to the E string
      tab ['E'] += "--" + column + "--";
      tab ['A'] += "-----";
      tab ['D'] += "-----";
      tab ['G'] += "-----";
      tab ['B'] += "-----";
      tab ['e'] += "-----";
    }
```
Ajax calls are also found here, which are used for communicating with the rest api.
```
 $.ajax({
          type: 'GET/DELETE/POST',
          async: false,
          url: '/api/tabs',
          dataType: "json",
          contentType: "application/json",
          success: function(response){
          }
      });
```

![alt text](http://image.prntscr.com/image/d3449ec042424bb482c4a56b83b4a0a9.png)
![alt text](http://image.prntscr.com/image/257035de54664e85a32d9ff8977c1581.png)


## Project Overview
### Planning
I had to do some research about the technologies that I was going to be using, since I had little or no experience with them. Luckily, I found a tutorial on how to create a rest API that I could use to help me make my back end.
Then, I had to map out my project and how I thought it would finally come together.
### Implementation
##### Template
Starting off, I downloaded a template from Bootstrap and stripped it of whatever I didn't need. I changed some things around, some pictures and text, and left a reference link.
##### Fretboard
My focus was one goal at a time. I started off with just trying to get the fretboard displaying first on the page. My initial plan was to have 1 large image of a fretboard, and place invisible buttons over it, but settled for looping small images and turned them into buttons.

![alt text](http://image.prntscr.com/image/8d0a83e07d0c4996bf8a46f15b08ff8d.png)

##### Text Area
Then, I added the large text area that sits beneath the fretboard. I made it so that you cannot edit the text area to prevent any errors from a user messing with the tab in creation. Then I added functionality to the buttons to append to the text area, depending on which button is pressed.

##### Back End
For the back end, I implemented the rest api. I simply followed [this](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4) tutorial to implement my back end, and for the ajax calls I referenced a [previous project](https://github.com/DillonWard/Single-Page-Web-App/blob/master/static/main.js) that I had completed. 
### Limitations
I had first planned to simply make the application using JavaScript and CouchDB, I then decided I would use MEAN stack as I found it interesting and I would be learning new languages, or becoming more familiar with languages I had previously used. This change had a big cut into the time I had put into the process of creating the web app. I also needed some time to learn more about MEAN stack and what I was using. During the time of these projects, I had 3 other projects that I also needed to attend to, making it more difficult to achieve everything I wanted to implement into the application. 
## Design
##### Users
The application is a single user system. The user will be able to create, retrieve, and delete their own tabs. An update was also in the works, but due to time constraints cannot be fulfilled.
##### Data
The data sent to the server starts off as simply a name and a tab body, and is sent to the database as a JSON object. The data is read in, parsed and is again observable.

##### Output
When the user clicks the "View Tabs" button, a modal is toggled displaying the tabs that are currently saved on the database. There are 2 buttons beside the names, `view` and `delete`. If view is selected, the tab will open in a new window. If delete is chosen, the tab is deleted by `_id` and is removed from the database. 

##### Software
Assuming the user has already installed the components listed at the [beginning](https://github.com/DillonWard/Guitab-Writer#components-needed) of the document, the only software the user needs is a web browser to use the application. The application MUST be used in full windowed, otherwise the buttons begin to collapse on top of each other.

## Future Development
I wish to continue developing the application, finishing off the update functionality, adding the option to write a bass tab, and displaying the tab in a nicer, personalized template. I don't think I used Angular to it's full capabilites, particularly when using Ajax calls. Next time I create a web application, I wish to do so using Angular to it's full capabilites.

## Conclusions
I thought creating this app was a wonderful learning experience. I got to learn about MEAN stack, and even now have grown more of an interest in JavaScript. I'd definitely like to continue creating applications using the MEAN stack model, or discover new models. I've also become more interest in Full Stack development, and would like to continue developing Full Stack. Before this project, I wasn't too comfortable using databases. Now, I've used them enough that I'm enthusiastic to learn more.

---
### References
[What is MongoDB](http://searchdatamanagement.techtarget.com/definition/MongoDB)

[Characteristics of Mongo](http://www.mongodbspain.com/en/2014/08/17/mongodb-characteristics-future/)

[Express](https://expressjs.com/)

[What is Express](https://www.upwork.com/hiring/development/express-js-a-server-side-javascript-framework/)

[AngularJS](https://docs.angularjs.org/guide/introduction)

[AngularJS Overview](https://www.tutorialspoint.com/angularjs/angularjs_overview.htm)

[NodeJS Introduction](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm)

[Bootstrap Theme](https://startbootstrap.com/template-overviews/freelancer/)

[How to build a Restful API](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)

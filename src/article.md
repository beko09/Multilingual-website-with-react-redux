Multilingual site by react and redux

>>>Create a site that supports multiple languages ​​in a simple and easy way without libraries


In this article, we will understand how react and Redux work, and we will work with a multilingual website.

Explain the idea
The idea is to store the language variables in a JavaScript file and then control the change of those variables according to the language chosen by the user. For this reason, I used the redux state manager to save and change based on a certain action that comes from the user who runs a specific reducer which in turn stores the variables that come from Action and then I call the variables that were stored in the store inside the site. In order not to forget, I also pass the action directions and language of the site and reuse it from the store inside the site.
You also used the redux-persist library to save the language redox in local storage, and even if you make a reload of the site, the language you chose will be saved in your browser.


1-First, we create a React application by way of writing the command, and we enter the application folder and run it. Follow these instructions

npx create-react-app my-app
cd my-app
npm start

Installation
npm i react-redux redux
npm i redux-thunk
npm i redux-persist


After creating and running the application, we will create the components of the front end of the site, as follows :
navbar
content
footer
languages

Before that we will follow a hierarchy of ordering our ingredients create a folder called components

image>>>
Why use this hierarchy? You will see this in the files, as I separate the JavaScript codes that deal with the store and action and reducer (redux) from the jsx codes.

Inside the components folder, create the previous folders. We'll start with the languages folder

Languages setup
The first thing was set up a file to store all the translations. I wanted it all in a single place to make it easy to update or add new languages to. In languages.js is this basic code — a language variable holding each individual translation within in, and in each translation a collection of key-value pair consisting of a shared variable name and it’s translated value.
Inside Folder languages create a folder languages.js
languages.js
code>>>


Inside Folder navbar create a folder components and file index.js
in side components create a folder Navbar.js
Navbar.js
code>>>
index.js
code>>>
navbar.css
code>>>

Inside Folder content create a folder content.js
content.js
code>>>
content.css
code>>>

Inside Folder footer create a folder footer.js
footer.js
code>>>




Now we go to the redux files inside the src folder create a redux folder that will include

folder action
folder reducer
file store

Inside Folder action create a file languages.js
languages.js
code>>>


Inside Folder reducer create a file index.js
index.js
code>>>

Inside Folder reducer create a file languages.js
languages.js
code>>>

Inside Folder reducer create a file store.js
store.js
code>>>

In the App.js file, we call the components to see their instructions

App.js
code>>
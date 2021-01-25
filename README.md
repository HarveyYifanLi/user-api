## user-api
#### Note: As the app is using the Node.js runtime engine and MongoDB as the database, thus please install Node.js and MongoDB on your local machine in order to run the appllication.

#### Once Node.js and MongoDB are installed and this repo has been cloned into a local directory, follow below instructions and run commands accordingly:

#### 1. cd into where the /bin dir of Mongodb is located so that you can start the mongodb server:
e.g. 
'cd /Users/yifan/mongodb/bin'
then start the mongod DB server:
'mongod --dbpath=/Users/yifan/data/db/'

#### Extra important note, I have coded a script (seedDB.js) to automatically populate the mongo database with sample users data and thus before running this node application for the first time, please uncomment the line '//seedDB()' in index.js to automatically populate the database.

#### 2. cd into the root dir of where this repo has been cloned (i.e. where index.js is located). npm install all the dependencies first and then run the node application server:
e.g.
'npm install'
then start the node server via the main entry point file index.js:
'node index.js'

#### 3. Now the node.js app server is running on localhost at port 8080 and thus go to browser at: 
To view all users: http://localhost:8080/users/
To view a specific user for example: http://localhost:8080/users/600e34b040c0e77beda8f8a3

#### 4. To run the unit testing of all routes, stop the node app server first (i.e. enter 'CTRL + C' to stop the running node app) and then run the mocha command to start testing:
Make sure to open a new terminal window and cd into the same root dir of where index.js (for this node app) is located;
and then issue command: 'mocha --exit test/routes/users-test.js'

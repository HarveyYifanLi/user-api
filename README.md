## user-api
#### Note: As the app is using the Node.js runtime engine and MongoDB as the database, thus please install Node.js and MongoDB on your local machine in order to run the appllication.

#### Once Node.js and MongoDB are installed and this repo has been cloned into a local directory, follow below instructions and run commands accordingly:

#### 1. cd into where the /bin dir of Mongodb is located so that you can start the mongodb server:
e.g. 
'cd /Users/yifan/mongodb/bin'
then start the mongod DB server:
'mongod --dbpath=/Users/yifan/data/db/'

#### 2. cd into the root dir of where this repo has been cloned (i.e. where index.js is located). npm install all the dependencies first and then run the node application server:
e.g.
'npm install'
then start the node server:
'node index.js'

#### 3. Now the node.js app server is running on localhost at port 8080 and thus go to browser at: 
To view all users: http://localhost:8080/users/
To view a specific user for example: http://localhost:8080/users/600e34b040c0e77beda8f8a3

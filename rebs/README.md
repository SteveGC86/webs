# CAWBS

## Who is your client?
Coder Academy is the client with Samara Jesney as the primary point of contact.


## What is your client’s need (i.e. challenge) that you will be addressing in your project?
The staff at Coder Academy are in need of a consistent, cohesive way to record the booking details of workshops and short courses. Their current setup introduces a lot of confusion between users and duplicates of data are often made. An automated system that will notify administrators and facilitators of changes made to a workshop booking (confirmation, cancellation etc.) will help ease communicative pain points within the business.


## Describe the client’s current setup and data.
The client currently uses an excel spreadsheet, the spreadsheet contains the data for three seperate CA locations (currently does not contain information for external clients), facilitators(their skills and availability) and number of attendees. The problem is that at the moment the sheet can allow anyone to make changes to sheets, leading to a double up of information and making it difficult for any future employees to understand the system.

## Describe the project will you be conducting and how your App will address the client’s needs.
Coder Academy regularly books in workshops. Their current booking system uses an Excel spreadsheet that lists all information across a couple pages worth of cells. Finding information in this way is difficult and time consuming, not to mention the margin for user input error is high. 

As a solution to this problem, we have proposed the creation of a web application to be used as a workshop management tool. With our application, users will be able to create, update, and destroy workshops. When creating or editing a workshop, the user will be able to enter all relevant information, including dates, times, and facilitators. 

This information will be entered in one simple form that will be easily viewable. Information will more easily retrievable, and this will remove the need for a bloated spreadsheet spanning several pages. 

Workshops will also be added to a calendar. The calendar will provide users with a simple overview of the workshops scheduled, instead of having to read through multiple text entered dates and determining when they all line up. Overall, our workshop management system is designed to streamline a time-consuming and inefficient process. 

## Identify and describe the software (including databases) to be used in your App.
Our web application will be built on a modern, open-source MERN stack - MongoDB, Express.js, React.js and Node.js. MongoDB is a non-relational database that uses JSON-like documents to store details with depth instead of in a standard 'column and row' format. Express.js is a web framework for Node.js, which in combination work to connect the front end of the web application to the database. React.js is a front-end Javascript framework made for easy user interface creation. 

## Identify and describe the network setup you will use in your development.

Our application will be deployed on the internet, and we will use Now to host our web app. The application may be accessed at any one time by several users, admins and facilitators alike. Our application will use cookies to track user information across multiple sessions, cookies are stored on users’ local servers. Our application will require file storage, for this we will use the file hosting service AWS. 

Our development environment will make use of Nodemon to track changes to files and automatically update our servers. 

We will deploy our application as soon as possible. Consistently deploying after we make changes to our application will allow us to pick up on any bugs that may only be picked up on in a production-specific environment

## Identify and describe the infrastructure (i.e. hardware) that your App will run on.
The client currently primarily uses their desktop to enter/ process the booking system. Samara has informed the team that she would like to be able to use the app on an iPad, allowing her to be away from her desk/ on the phone and check bookings while on the go. The app will be ideally suited to tablet and desktop formats. Facilitators will be using a mix of mobiles, computers, and tablets to access the application.

## Describe the architecture of your App.

Our app is made up of several moving parts.
- Our server will be set up through Express. This will allow us to easily handle routes and routing. 
- We will use MongoDB and Mongoose for our database management. Mongoose will provide us many easy, built-in methods to access data in our database. 
- React will allow us to create and reuse components in our application. Reusable components will significantly speed up how quickly we can create our front end web pages. React also gives us the ability to use JSX, and write Javascript directly to html.

## Explain the different high-level components (abstractions) in your App.  

We are dealing with several high level components in our application. These include facilitators (teachers, assistant teachers), workshops, bookings, and authorisations. A large part of our planning process will involve deciding how these components interact with each other. We will address this with routing and database design.

## Detail any third party services that your App will use.
At this point in time, we believe we will be using the following third party services on our app:

- Super Log In
- Mocha will be used for testing our application
- Nodemon will used as our development server. We can easily track any changes made without restarting our server each time
- We will use Moment when working with date and time bookings.  
- We will use Now for the deployment of our website
- Express Router
- React Router

Possibilities
Our application will display booked in workshops on a calendar. We are thinking of using one of the following third party services to more easily help us create a calendar:
- React-calendar-timeline
- Google Calendar 

## Identify the database to be used in your app and provide a justification for your choice.
The database that we will be using for our application will be MongoDb. The reason behind going with a NoSQL is that it is best suited to agile sprints, is fully elastic(easy to scale up or down), supports multiple data structures and has the ability to scale horizontally. 

## Discuss the database relations to be implemented.

- Whether we have them or not

## Provide your database schema design.

## Provide User stories for your App.

### Admin - Sam & Sally

- As an admin, I want to be able to create a workshop so that I can easily keep a record of all events occurring

- As an admin, I want to be able to add new workshop details so that I can create new events when necessary

- As an admin, I want to be able to add a new facilitator to CAWBS so that the relevant people will have access to information in the system

- As an admin, I want to be able to add a new location to CAWBS so that we can specify exactly where events are being held

- As an admin, I want the ability to add facilitator/s to workshops so that we have a record of who will be teaching

- As an admin, I want the ability to set skills for facilitators, so that we can easily see which facilitators are best for which workshop

- As an admin, I want to be able to change the status of a workshop (confirmed, pending, cancelled) so that we can easily see whether a workshop will be running

- As an admin, I want to be able to send an email invitation to a facilitator, so that I can easily alert facilitators to a new workshop and request they teach

- As an admin, I want to be able to keep a record of all workshops organised, so that whether they go through, change, or are cancelled there will be a record of the event happening

- As an admin, I want the ability to delete a workshop so that if I enter something incorrectly, it can be removed

- As an admin, I want to be able to update details about a workshop, so that I can change any necessary information

- As an admin, I want to be able to view a calendar that shows all workshops that have been booked in so that I can easily see any events coming up
 (Google Drive api)

- As an admin, I want to be able to view notifications for cancellations and confirmations, so that I know if a workshop will be going forward

- As an admin, I want to be able to login/out to my own account so that I can use options provided only to me

### Facilitator

- As a facilitator I want to access my workshops on my calendar, so that I can see which events I am involved in are coming up

- As a facilitator, I want to receive events for workshops, so that I am kept up to date about any changes with the event

- As a facilitator, I want to be able to confirm or deny an invitation to take part in a workshop, so that I am able to let everyone know if I will be participating

- As a facilitator, I want to be able to change my details (like contact details or number), so that I will be easily contactable

- As a facilitator, I want to have the option to request to cancel a workshop assignment, so that if I am unable to attend I can let others know

- As a facilitator, I want to be able to log in/log out to my account, so that I will be able to access information that is relevant to me

## Provide Wireframes for your App.

## Describe the way Tasks are being allocated and tracked in your project.
Our group is using Trello to keep track of tasks and details relating to the project. We have two Trello boards - one functions as a place to store details, plans, expected versions, resources and client meeting records, and the second board to work as a scrum board. A general view of our tasks is kept in our first Trello board and detailed to-do tasks are then moved to our scrum board at the start of the day. We discuss and decide which member of our group will work on which tasks during our daily standup - these tasks are then assigned in Trello, with that member being responsible for keeping their cards up to date in Trello.

##  Discuss how Agile methodology is being implemented in your App.
Our group decided before starting the project that applying some major concepts from Agile methodology would be crucial in keeping us on track and having a deliverable product at the end of our 3 week project. Having a standup every morning will allow us to prioritize what tasks should be worked on that day to keep us on track. Making use of Trello as a scrum board means that we can keep track of tasks, who is assigned to the tasks, what stage these tasks are at and how to proceed once they are completed. Delivering a Minimum Viable Product to our client as early as possible means that we can then iterate over the design and function of the MVP to improve on it while still having a functional product for the client.

## Provide an overview and description of your Source control process.
An outline of source control process is as follows:

We will be using github to manage source control. Our process is as follows:

- Create a master branch
- Fork development branch off master branch
- Create issue/idea to be implemented
- Fork this and work on it
- When ready to be merged, create pull request
- Someone else from team will review
- Once approved, merge back into development
- If development is updated while change working on other issue, need to fast forward branch to include new changes
- Only update master branch when a full version is deployed and working on development

## Provide an overview and description of your Testing process.
We will be using Mocha during our testing process. 

During the development of our app we will use testing to determine whether our code is working in the way we want.

First we will decide what issue we are working on in our application. 
Next we will write the necessary tests detailing what we want to achieve
We will then create the code needed to pass these tests

Using testing will also allow us to pick up any anomalies, or edge cases. Using test driven development will also force us to decide exactly what part of our app we are developing at any one time. This will help us stay on track. 

## Discuss and analyse requirements related to information system security.

As we will be working with private staff information, security is an important part of our application. Some of the measures we will take to ensure data will remain confidential are as follows:

We will use authorisation and authentication for every user of our application.

We will also have different levels of access within our organisation. For example, administrators will be able to access all records, update, destroy, and create workshops and facilitators alike. In contrast, facilitator access will be restricted to accepting or rejecting invitations, viewing calendars and a few other essential tasks

## Discuss methods you will use to protect information and data.
When addressing security concerns in our application, we will use several methods to protect our clients’ information and data. These will include:
- Json Web Token - this will allow us to safely transmit information between parties 
- Cookies - to allow us to remember information about a user when they visit again
- Authentication/Authorisation - this will allow us to display selected information to selected users. Admins will have more power (the ability to create, edit, and delete workshops) than facilitators for instance.
a
- We will be using environment variables to ensure important information like keys are protected
- Using hashing will ensure all passwords are protected
- We will also employ basic, 'non-tech' security measures, including restricting who we share and discuss private information with. We will only be discussing information between ourselves and our clients. 

## Research what your legal obligations are in relation to handling user data.
With the information supplied to us, all user information (name, contact details) are only accessible by the respective user and also by the admin. The app will provide a higher level of security than the current excel worksheet as the login process relies on JWT authentication in order for th user to gain access to their information.
Red Hill manage there data in accordance with the Privacy act and the Data Breach Notification Act and all information supplied by this app are covered by the Red Hill Privacy Policy.

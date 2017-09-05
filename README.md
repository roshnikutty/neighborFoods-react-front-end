# Neighborfoods

## Purpose and vision
Are you a busy professional who gets home late from work, a new parent, or a busy chaperoning after you get back from work?
Or just interested in trying various cuisines, and getting to know your neighbors?

You have reached the right place! You can now buy lunch or dinner plates from your neighbors and have a home-cooked meal experience every day of your busy week!

## Solution
You can just browse around for what your neighbors have to offer and make your selections by choosing the number of plates.

Also, if you happen to make extra lunch or dinner and want to show off your cooking skills, post details of your delicacies. Have your neighbors rave about it!


## How do you sign in/sign up?
* To set up an account, sign up through the homepage.
* To check it out without creating an account, sign in as a guest user using
>> __Username__ demo, __Password__ demo


## Using the App
* Logging in takes you to a page that displays the meals available for sale. Here you can see details for each meal. 
![mealslist](https://github.com/roshnikutty/med-aid/blob/master/public/images/added_patient.png)


* Clicking on the 'Buy' button will take you to a form that lets you add the buyer's information.
'Buy meal' shows you the notification of the purchase in a snackbar pop-up at the bottom of the page.
Clicking on 'Search meals' takes you back to the page with meals available for sale.
If you enter more number of plates than is available for sale, you will be notified that there aren't as many plates, via the snackbar.
![buyerform](https://github.com/roshnikutty/med-aid/blob/master/public/images/add_med_record_form.png)

* Clicking on 'Post your dishes' takes you to the form that lets you add seller's and meal information.
'Post your delicacy' will show you the notification that your meal has been now added for sale in a snackbar pop-up at the bottom of the page.
![sellerform](https://github.com/roshnikutty/med-aid/blob/master/public/images/added_record.png)


<h2>Technology</h2>
<h3>Front End</h3>
<ul>
  <li>React</li>
  <li>Redux</li>
  <li>Redux Thunk</li>
  <li>Enzyme (testing)</li>
  <li>Continuous integration and deployment with Travis CI - View the <a href = "https://travis-ci.org/roshnikutty/neighborFoods-react-front-end">Travis CI build status for this app</a>.</li>
  <li>Material UI</li>
  <li>JavaScript</li>
  <li>HTML5</li>
  <li>CSS</li>
</ul>
<h3>Back End</h3>
<ul>
  <li>Node.js + Express.js (web server)</li>
  <li>MongoDB (database)</li>
  <li>Mocha + Chai (testing)</li>
  <li>Continuous integration and deployment with Travis CI - View the <a href = "https://travis-ci.org/roshnikutty/neighborFoods-api">Travis CI build status for this app</a>.</li>
</ul>
<h3>Responsive</h3>
<ul>
  <li>The app is built responsive for use on desktop and mobile devices.</li>
</ul>

<h3>Security</h3>
<ul>
  <li>User passwords are encrypted using bcrypt.js.</li>
  <li>
  JWT (<a href = "https://www.npmjs.com/package/passport-jwt">JSON Web Token</a>) is the Passport strategy I used to authenticate and provide access to authorized users.</li>
</ul>

## Backend API routes
1. GET a list of all existing seller postings
    * /meals

2. POST a new meal with seller and meal information
    * /meals

3. POST - seller's meal count should get updated after some of them are bought
    * /meals/:meal_id/:buy_id

4. POST a new buyer with buyer's contact information
    * /buyers


## Frontend
For the buyer and seller forms, I have used redux-forms


## This is version 1
In version 2 of this app, I plan to implement:
* Application should send out email notification to buyer and  seller of a transaction

* Backend routes for updating, deleting buyer and seller information are also coded in and tested. These will be implemented at the front-end in a later version of this application.    

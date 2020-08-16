# McMakler Frontend Code Challenge 

This is my attempt at resolving the McMakler Frontend Challenge: coding the applicants page.

Built with a mobile first responsive design, this project: 
- mocks the API response
- simulates the loading while fetching the data from API
- renders applicants based on their status:
-- Appointment_Set
-- Property_Viewed
-- Interested
-- Offer_Accepted
- each rendered card has an avatar with a random color from a defied list of colors, and the applicant's name initials
- allows users to search for an applicant by "first name", "last name", "email address"
- updates the query param `?search={search-value}` so users can share their search results via url
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```
Will start the local server at port 3000 \
[http://localhost:3000/](http://localhost:3000/)

------
### Project Structure 

Each *component* has its own folder with **index.jsx** and **ComponentName.scss** files in [src/components/](https://github.com/DariusPirvulescu/react-applicants/tree/master/src/components). 
There are also some nested components ( ex: [Avatar in ApplicantCard](https://github.com/DariusPirvulescu/react-applicants/tree/master/src/components/ApplicantCard) ). 
The [src/](https://github.com/DariusPirvulescu/react-applicants/tree/master/src) folder also contains [data/](https://github.com/DariusPirvulescu/react-applicants/tree/master/src/data), API mock response with the applicants JSON file, and [assets/svg](https://github.com/DariusPirvulescu/react-applicants/tree/master/src/assets/svg) with the svg icons used in Menu component.

### Packages
Among others, this project was built using:
- bootstrap & react-bootstrap
- node-sass
- material-ui/core & material-ui/icons
- lodash
- react-router-dom
- query-string
- styled-components
- react-spinners-kit

Some development dependencies used were: *eslint (-config-airbnb)* & *preetier*

----

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

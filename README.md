# McMakler Frontend Code Challenge

This is my attempt at resolving the McMakler Frontend Challenge: coding the applicants page.

[Check it out on Heroku](https://react-applicants-page.herokuapp.com/page "CTRL/CMD + click to open in a new tab")

Built with a mobile first responsive design, this project:

- mocks up the API response
- simulates the loading while fetching the data from API
- groups and renders applicants based on their _status_:
- - Appointment_Set
- - Property_Viewed
- - Interested
- - Offer_Accepted
- each rendered card has an **avatar** with a _random color_ picked from a defined list of colors, and the _applicant's name_ **initials**
- allows users to search for an applicant by _first name_, _last name_, _email address_
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

---

### Structure

Each _component_ has its own folder with **index.jsx** and **ComponentName.scss** files in [src/components/](https://github.com/DariusPirvulescu/react-applicants/tree/master/src/components).
There are also some nested components ( ex: [Avatar in ApplicantCard](https://github.com/DariusPirvulescu/react-applicants/tree/master/src/components/ApplicantCard) ).

The [src/](https://github.com/DariusPirvulescu/react-applicants/tree/master/src) folder also contains [data/](https://github.com/DariusPirvulescu/react-applicants/tree/master/src/data), API mock response with the applicants JSON file, and [assets/svg](https://github.com/DariusPirvulescu/react-applicants/tree/master/src/assets/svg) with the svg icons used in Menu component.

### Homepage

The homepage is set to "**/page**". I added a redirect in case someone lands on "**/**" or others.

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

Some development dependencies used were: _eslint (-config-airbnb)_ & _prettier_

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

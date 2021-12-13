
# Project 4

### By Seb Patin

### Project Summary


### Models

The model is representative of a date where medication is tracked

- date: String
- medication name: String
- medication amount taken: String
- year: String
- image: String

### Route Table

List your routes in a table

| url                 | method | action                                 |        |
|---------------------|--------|----------------------------------------|--------|
| /post           | get    | get all post with medication entered    | index  |
| /post/:id       | get    | view a specific date                   | show   |
| /post/:id/new   | get    | make a new date entry                  | new    |
| /post/          | post   | post the new date entry                | create |
| /post/:id/edit  | get    | edit any item on the index              | edit   |
| /post/:id/      | put    | update the edited item from the list   | update |
| /dates/:id       | delete | delete any date                        | delete |

### User Stories
- User will be able to enter last medication date taken
- User will be able to update information on the days tracked
- User will be able to delete date entries
- User will be able to view all date entries


### Challenges

### Props
My understanding of props was tested heavily during this project.  I had to perform many trial and errors in order to make sure what I was doing would work, and not break my code in the process.  Understanding, the data and how it can flow through props was very tough and I will require a lot more practice.

### Design
My original idea for what the design of the site proved to be way more difficult than originally intended.  I had planned for the data to be shown on a type of rotating carousel that could allow the users to see the previous and next days of medication tracked but ultimately I found that a simpler design would allow me to focus on the cohesiveness of the website.

The design I ultimately went with was a very minimal and straightforward, user-friendly experience, to allow the user to intuitively navigate and use the website.

### Extra Features failed
Many attempts were made for user implementation but ultimately I planned for it too late into the process, thinking things would go easier. I severly over estimated my abilities and had to scrap a lot. 

### Deploying
I wasn't sure why I had so many issues deploying randomly. 
At first I thought it was just random bugs but it turned out to be a few syntax errors.

However on netlify whenever I refresh I get a broken page message and Im still not sure why.

##### I plan to implement: 
- user authentification
- a calendar system 
- better structured form that will require certain things, and not allow other things: such as using incorrect wording or format
- Dropdown menus for Dates, medication amounts and possibly medication names (possibly with an external API)
- Alotment for multiple types of medication to be added on the same date
- A confirmed tiny popup at the bottom

### List of Technologies
- Python
- Masonite
- Postgres
- JavaScript
- React
- Material Design Lite
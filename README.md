# Getting Started with blogpost

Welcome to blogpost!  This is a responsive micro-blog SPA, which renders a number of "shortened" blog posts to the screen.  After the user clicks on the "Read Me" link, a new page with the entire blog post is dynamically created.


This SPA has several unique features which make it stand out:

        1)  A real-live api call was simulated.  The JSON data that is normally associated with an api call can be found in the data.json file

        2)  The api call can be found in the fetchPostapi.js file

        3)  The call is made in the App.js file, and then state is then passed down into the SPA's different components through React Router.

## Functionality and Fun

The app was optimized for two viewports using the Chrome toggle device tool:  

        1)  iPhone X
        2)  a laptop / desktop view (ideal min-width: 1150px)

Upon initial loading, in both the desktop and iPhone X views, we see three items on each "blog post summary" card:

        1)  A photo
        2)  Dynamically updating text area which states how many days ago the blog post was created
        3)  The blog post title

In laptop view (minwidth: 1500px):

        1)  Several words from the beginning of each blog post appear from the bottom of the screen when the mouse hovers over a "blog post summary",  along with a "Read More" link.

In iPhone view:

        1)   Several words from the beginning of each blog post also appear from the bottom of the screen when the user clicks on a "blog post summary", along with a "Read More" link.

When the "Read More" link is clicked, the SPA dynamically creates a new page where the contents of the entire blogpost can be viewed.

### `npm start`

the npm start function will start the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Cypress Testing`

To perform Cypress tests, please enter the following command into the terminal: npm run test:e2e:run
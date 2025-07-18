# How to run the project

In order to run this application, please clone down my forked repository here:

```
git clone https://github.com/lilybarrett/react-ai-category-page.git

```

Note: I noticed that, at the time of development, `via.placeholder.com` was down and providing broken images, so I replaced the URLs in the `data/products.json` file to use `placehold.co`. Hope that’s OK!

Install dependencies:

```
$ npm install
```

Boot up the application:

```
$ npm run dev
```

Navigate to http://localhost:5173/ to play around with the application.

# Some notes

- With some interuptions, this took me around ~2 hours.
- I tested for accessibility via keyboard navigation, [MacOS voiceover functionality](https://support.apple.com/guide/voiceover/learn-and-practice-voiceover-mchlp2687/10/mac/15.0), and [Lighthouse](https://developer.chrome.com/docs/lighthouse/accessibility/scoring). If I had more time, I could have added some quick automated tests for accessibility with [Playwright](https://playwright.dev/docs/accessibility-testing).
- I added a manual toggle for users to choose between grid and list view on larger screens.
- I also defaulted to the grid view on medium and larger screens, and to the list view on smaller screens.
- While I kept the Previous/Next buttons and Sort functionality on smaller screens, I hid the individual page navigation buttons on smaller screens and added text saying the user was on "Page X of Y."
- Because grid view isn't ideal for smaller screens, I also hid the manual grid/list view toggle on smaller screens.
- I'm new to Vanilla Extract, so this was an awesome learning experience.

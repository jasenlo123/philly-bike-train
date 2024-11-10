# Philly Bike Train
A node script that runs every minute via Github Actions that updates a live Datawrapper locator map of the Philly Bike Train. A live location map of the Philly Bike Train would allow prospective commuters to join the train on-route instead of having to meet ride leaders at the starting point of each train, thus manifesting true train form.

This app:

- Fetches live rider location data from their Wahoo/Garmin devices using Playwright.js through device live location links
- Fetches the current/soon-to-be-previous rider location data from the Datawrapper map
- Replaces the location data using the newly scrapped data
- Uploads the new data to Datawrapper
- Republish the chart on Datawrapper


## Start

```
export DATAWRAPPER_API_KEY={ASK_JASEN_FOR_THE_SECRET}

nvm use v18.13.0 
npm install
npm run start
```

## To-do
- [ ] Figure out what config.json should look like and how to play nicely with live links securely
- [ ] app.js should just be running functions from ./src
- [ ] src/locate should get the current position of the riders
- [ ] src/map should have all the datawrapper stuff. Fetching data, replacing data, and then republishing chart.
- [ ] Need to test with Wahoo or whatever live location device with just app.js
- [ ] Set up GH Actions.
- [ ] More testing!
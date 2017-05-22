# cornwallgeeks.net

Cornwall Geeks is an online & offline community of people that talk about geeky stuff. Programming, design, and gaming are a few examples but there are [many more](/_pages/slack.md).

We organise [monthly meetups](/_pages/meetup.md) on the [Cornwall Digital Meetup page](https://www.meetup.com/Cornwall-Digital/). There is also a community Slack you can join by visiting [join.cornwallgeeks.net](https://join.cornwallgeeks.net).

We aim to be an inclusive and supportive community where everyone can feel welcome. If you'd like to to know how we do this you can read our [Code of Conduct](/_pages/code-of-conduct.md) and [Enforcement policy](/_pages/enforcement.md). You can also get in touch with any of our [Admins](/_pages/organisers.md).

## Assets

Within this repo is a base for setting up a project's assets folder. Also enclosed are gulpfiles and package.json files for watching and processing your sass files to css. 

## Assets with Vim

The assets folder is structured thus:

- css/
  - core/
    - essentials/
  - modules/
    - global/
    - project/
- favicons/
- img/
- js/
- svg/
  - /fallbacks

## Gulpfiles and package.json files

### css flavour

The files `css-gulpfile.js` and `css-package.json` contain the dependancies and gulp tasks required to process 'screen.scss' into screen.css. 

To install, first delete the `css-` prefix from both files.

Ensure your `gulpfile.js` and `package.json` are filed at the same level as the `assets` folder.

Run `$ npm install`.

Once your node_modules have downloaded, run `$ gulp` to watch the assets folder for changes.

### Jekyll flavour

The files `jekyll-gulpfile.js` and `jekyll-package.json` contain the dependancies and gulp tasks required to process `screen.scss` into `screen.css` as well as rebuilding the `_site` folder of your jekyll install and reloading the site in your browser using Browser-sync on changes. 

To install, first delete the `jekyll-` prefix from both files.

Ensure your `gulpfile.js` and `package.json` are filed at the same level as the `assets` folder.

Run `$ npm install`.

Once your node_modules have downloaded, run `$ gulp` to watch the assets folder for changes.


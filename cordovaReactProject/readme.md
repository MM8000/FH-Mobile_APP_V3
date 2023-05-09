# Howto npm

## Install

Use `npm install` first. If things get corrupted, delete the `node_modules` folder and use `npm install` again.

## Dev Build

First, use `npm run css` to create the CSS stylesheet master file `public/styles.css`. Then use `npm start` to run the development local server with live-reload.

After any changes to any style-sources, run `npm run css` again.

## Production Build

First, run `npm run css` then use `npm run build`. If no errors occur, the production build is put in the `www/` folder and can be deployed to a web hoster.

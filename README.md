ReceiptFood-Documentation

# Getting Started 

Installation
1. npx create-react-app ./
2. npm i --save @fortawesome/fontawesome-svg-core
3. npm install --save @fortawesome/free-solid-svg-icons
4. npm install --save @fortawesome/react-fontawesome

Running locally
1. Open ReceiptFood program in visual studio code
2. npm start 
3. open http://localhost:3000 to view it in the browser 

Deploy to Heroku
1. Creating Repository in Github
• git add .
• git commit -m "message"
• git push -u origin master
2. Create new App in heroku
3. Install Heroku CLI see https://devcenter.heroku.com/articles/heroku-cli
4. Login to Heroku 
• heroku login
5. Deploy
• heroku git:remote -a app-receipt-food
• git push heroku master

const express = require('express');
const app = express();
const port = 3000;

//Setting ejs template engine
app.set('view engine', 'ejs');

//Setting public folder
app.use(express.static(__dirname + '/public'));

//Middleware function to check working hours
const checkWorkingHours = (req, res, next) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
// Checking if it's monday to friday and between 9am and 5pm
if (currentDay >= 1 && currentDay <= 5 && currentHour < 17){
    next();
} else {
    res.send('Sorry the App is Only Available at Working Hours (Monday to Friday 9 AM to 5 PM)')
}
};
app.use(checkWorkingHours);
//Defining Routes
app.get('/', (req, res) => {
    res.render('Home');
    });

app.get('/Services', (req, res) => {
    res.render('Services');
    });

app.get('/Contact', (req, res) => {
    res.render('Contact');
    });
    

//Starting the Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });



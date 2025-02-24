// Main const
const express = require('express');
const app = express();

// Home page
app.get('/', (req, res) => {
    res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Details</title>
                <style>
                    *{
                        margin: 0;
                        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    }
                    body{
                        background-image: url('https://cdn.cloverhealth.com/filer_public_thumbnails/filer_public/fe/9a/fe9a0c78-adc1-4d69-a346-ea0311fcb8f9/3-easy-tips-to-eat-more-fruits-and-vegetables.jpg__1200x600_q85_crop_subsampling-2.jpg');
                        background-repeat: no-repeat;
                        background-size: 100%;
                    }
                    .header{
                        width: 50%;
                        padding: 8% 2%;
                        margin-left: 23%;
                        margin-right: 23%;
                        margin-top: 2.5%;

                        border-radius: 40px;

                        text-align: center;
                        backdrop-filter: blur(3px);

                        background-color: rgba(0, 0, 0, 0.6);
                        color: wheat;

                        transition-property: font-size, padding;
                        transition-duration: 0.4s, 0.4s;
                        transition-timing-function: linear;
                    }
                    .header:hover{
                        font-size: 120%;
                        padding: 7.8% 2%;
                    }
                    .main{
                        width: 50%;
                        margin-left: 25%;
                        margin-right: 25%;
                        margin-top: 5%;

                        text-align: center;
                        position: fixed;

                        border-radius: 10px;

                        color: white;
                        background-color: rgba(0, 0, 0, 0.3);
                    }
                    .enter{
                        width: 15%;
                        margin-left: 45%;
                        margin-top: 15%;
                    }
                    button{
                        background-color: greenyellow;
                        border: 2px solid green;

                        font-size: 20px;
                        padding: 5% 0%;
            
                        border-radius: 20px;

                        transition: all 400ms;
                    }
                    button:hover{
                        background-color: rgb(94, 138, 27);
                    }
                    button a{
                        text-decoration: none;
                        color: black;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>Welcome to Cooking With Us!</h1>
                    <h3>A globally used online grocery store</h3>
                </div>
                <div class="main">
                    <p>Shopping for groceries on our website is the easiest way to get fresh, high-quality products delivered straight to your door. We offer a wide selection of fresh produce, pantry staples, and household essentials at competitive prices. With convenient online ordering, fast delivery, and excellent customer service, you can save time and avoid long lines at the store. Shop with us today for a hassle-free grocery experience!</p>
                </div>
                <div class="enter">
                    <button><a href="/products">Go To Products Page</a></button>
                </div>
            </body>
            </html>
`)})

// Products page
app.get('/products', (req, res) => {
    res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Products</title>

                <style>
                    *{
                        margin: 0;

                        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    }
                    .navbar{
                        background-color: green;
                        padding: 20px;
                        text-align: center;
                    }
                    .navbar a{
                        text-decoration: none;
                        color: white;
                        padding: 50px;
                    }
                    .header h1{
                        color: green;
                        margin-top: 10px;
                        font-size: 40px;
                    }
                    .feature{
                        position: relative;
                        margin-top: 20px;
                        width: 100%;
                        height: 250px;

                        backdrop-filter: blur(3px);

                        background-image: url('https://cdn.firstcry.com/education/2022/11/08143105/Green-Vegetables-Names-in-English-for-Kids.jpg');
                        background-repeat: no-repeat;
                        background-size: 100%;

                        text-align: center;

                        border: 2px solid black;
                    }
                    .feature h1{
                        margin-top: 5px;
                        font-size: 45px;
                        color: red;
                    }
                    .feature h3{
                        margin-top:80px;
                        font-size: 25px;
                        color: rgb(60, 255, 0);
                    }
                    .feature h4{
                        font-size: 20px;
                        color: chocolate;
                    }
                    .second{
                        position: relative;
                        width: 100%;
                        height: 250px;

                        backdrop-filter: blur(3px);

                        background-image: url('https://i.ytimg.com/vi/m4nOrlKtDm8/maxresdefault.jpg');
                        background-repeat: no-repeat;
                        background-size: 100%;

                        text-align: center;

                        border: 2px solid black;
                    }
                    .second h1{
                        margin-top: 5px;
                        font-size: 45px;
                        color: rgb(0, 217, 255);
                    }
                    .second h3{
                        margin-top:80px;
                        font-size: 25px;
                        color: rgb(60, 255, 0);
                    }
                    .second h4{
                        font-size: 20px;
                        color: rgb(247, 255, 1);
                    }
                </style>
            </head>
            <body>
                <div class="navbar">
                    <a href="/">Home</a>
                    <a href="/products">View Products</a>
                    <a href="/contact">Contact</a>
                </div>
                <div class="header">
                    <h1>Welcome to our grocery store!</h1>
                </div>
                <div class="feature">
                    <h1><u>AMAZING DEAL!</u></h1>
                    <h3>Get your green vegetables for 50% off!</h3>
                    <h4><u>12 hours remaining...</u></h4>
                </div>
                <div class="second">
                    <h1><u>The BEST Fruits</u></h1>
                    <h3>We offer a wide range of fresh apples from all around the world</h3>
                    <h4><u>Limited on stock!</u></h4>
                </div>
            </body>
            </html>
`)})

// Contacts page
app.get('/contact', (req, res) => {
    res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contact</title>

                <style>
                    *{
                        margin: 0;

                        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    }
                    .header{
                        width: 100%;
                        height: 100px;
                        background-color: rgb(33, 33, 33);

                        text-align: center;
                    }
                    .header h1{
                        color: white;
                    }
                    .header .navbar{
                        margin-top: 10px;
                        padding: 10px;
                    }
                    .navbar a{
                        text-decoration: none;
                        color: white;
                        padding: 15px 90px;

                        transition: all 400ms;
                    }
                    .navbar a:hover{
                        background-color: rgb(71, 71, 71);
                    }
                    .ad{
                        background-color: chocolate;
                        height: 80px;
                        color: white;
                    }
                    .ad h1{
                        text-align: center;
                    }
                    .main{
                        text-align: center;
                    }
                    .foot{
                        margin-top: 22%;
                        height: 150px;
                        background-color: gray;

                        text-align: center;
                        color: white;
                    }
                    .foot p{
                    margin-top: 40px;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>Cooking With Us!</h1>

                    <div class="navbar">
                        <a href="/">Home</a>
                        <a href="/products">View Products</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>

                <div class="ad">
                    <h4><u>Advertisement</u></h4>
                    <h1>Buy from us, receive a 10% discount! Only this month</h1>
                </div>
                <div class="main">
                    <br>
                    <p>Our team is proud to support this company on this amazing journey. We are officially offering both outside and tech support to our customers!</p>
                    <br>

                    <hr>

                    <p>Phone number: 12344556</p>
                    <p>Email: abc@gmail.com</p>
                    <p>Headquarters: Shanghai</p>
                    <p>Owners: Open Limited</p>
                </div>

                <div class="foot">
                    <p>Copyright</p>
                    <p>Open since 2001</p>
                </div>
            </body>
            </html>
`)})

// Run server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
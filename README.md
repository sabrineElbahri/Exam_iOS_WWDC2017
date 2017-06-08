# Exam_iOS_WWDC2017
Serveur to GET and POST news about the wwdc 2017

![WWDC](https://raw.github.com/sabrineElbahri/Exam_iOS_WWDC2017/master/img/wwdc2017.jpg)

## Getting Started



### Prerequisites


```
npm install
```

or

```
yarn install
```

Then create a database and init it with the dump.sql script.
Change the db user/pass in server.js

### Running

```
npm start
```

or

```
yarn start
```

There is also a dev mode which reload the files automatically:

```
yarn dev
```


## Deployment

If you are using nginx you can do a simple reverse proxy:

```
server {
listen 80;
server_name exam.yourdomain.com;

location / {
  proxy_pass http://127.0.0.1:4242/;
  }
}
```

## Subject 

The goal is to make an application that allows you to display, and post news about the WWDC 2017.
For that, your are going to use a custom API. So you will need to do GET and POST requests.
You have to follow the steps described bellow but a big part of the project stands on your imagination.

### Rules

* You can use external libraries.
* Your UI must be responsive.
* Ugly code will cost you points.
* You will get zero if you send inappropriate content (STEP 5).

### Step 0 : Setup

Create your project named “wwdc2017_newsReader” using the “Single View Application” template and delete the ViewController in your Main.storyboard.
Add a TabBarController this one must contains :

* A ViewController in the first TabBarItem.
* A ViewController in the second TabBarItem.
* A TableViewController embedded in a NavigationController in order to push a ‘Detail view’ in the third TabBarItem. 
  Finally add a ViewController to manage your ‘Detail view’.

### Step 1 : Custom Animation

Use your imagination in order to create a custom animation in one of your ViewController. It must be displayed in the first TabBarItem. The only rules you must follow is that your animation must have a reference to the WWDC 2017.

### Step 2 : Model

* Create a “News” class with the following fields (All the fields are Strings) :
  - category 
  - author
  - title
  - short_desc
  - img
  - desc
 
* Create a method in your News class which allows you to return a News.

### Step 3 : List news

<p>You will use the custom API to GET (http method) all the News : http://examios.3ie.fr/api/news.</p>
<p>In order to make a GET request you will have to had an ‘httpMethod’ to your ‘UrlRequest’ (external libraries are of course allowed). And you have to specify a content type header.</p>
<p>In response, you will get a list of news about the WWDC 2017 : </p>

![GET](https://raw.github.com/sabrineElbahri/Exam_iOS_WWDC2017/master/img/get.png)

Once you GET the JSON, parse it and display the results in your TableView.
The news must be sorted by category. It will have as much sections as categories.
In your cell you have to display the the title of the news, the short_desc and the img.

### Step 4 : Detail view

When the user select a cell you must push the Detail view and display all the information about a news even the image.

### Step 5 : Post a news

<p>You will use the custom API to POST (http method) a news : http://examios.3ie.fr/api/news</p>
<p>In order to make a POST request you will have to had an ‘httpMethod’ and ‘httpBody’ to your ‘UrlRequest’.In addition, you will have to authenticate with the token (the one you received by mail).To do so you have to use the ‘addValue’ method of the URLRequest using the HTTPHeaderField “Authorization” with the value “Bearer  your_token”. You must also add the HTTPHeaderField “Content-Type” with the value “application/json”.</p>
<p>You have to send a JSON object following the News model :</p>

![GET](https://raw.github.com/sabrineElbahri/Exam_iOS_WWDC2017/master/img/post.png)

In your ViewController you must have as much textfield as fields to send. You must handle properly the keyboard.

### Step Challenge

You can do whatever you want to impress, for example you can :
- Improve you UI
- Loading
- Pagination
- Filtering 
- More animation
- …

## Authors

* **<Elbahri Sabrine** - *Initial work* - [sabrineElbahri](https://github.com/sabrineElbahri)



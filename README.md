# Menu BAQ API

## Notes


|Tech|  | |
|-----|---------|---------|
|node | express | mongodb |
|jwtoken| bycrypt | |

## Install 

#### To get started with development, follow the procedures below:

	
1.  [Install NVM](https://github.com/nvm-sh/nvm)
	- For windows -  
		-  **NVM comes with node installation, please proceed to step 2.**
	- For Linux - 
		> `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`
	- For iOS  - 
		> `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`
	
1. [Install node]( https://nodejs.org/en/)

1.  Clone Repo into your machine and change into the directory : 
	> `$ git clone https://github.com/Pedro-Goncal/passive-perception-api/tree/development`
	
	> `$ cd passive-perception-api`

1. Install the required node Modules.
	> `$ npm install`
	
1. Request the `.env` file from your senior Developer, and add it to the root folder.

1. Start the development local server.
	 > `$ nodemon`


## Development
1. Create new feature branch 
	> `$ git checkout -b <newBranchName>`

1. Push new branch to be tracked locally
	> `$ git push -u origin <newBranchName>`


1. Add, Commit and Push new changes
	 > `$ git add .` or `$ git add <file to be added>`
	 > `$ git commit -m"explicit message of change made"`
	 > `$ git push origin <newBranchName>`
	 
1. On the gitHub Repo page create a **pull request**

	> <img src="https://drive.google.com/uc?export=view&id=1L_niewkZyC6gdAhp3wxzWjfdKiLQh-WK" />
	 
	> <img src="https://drive.google.com/uc?export=view&id=1Xu9HNqZ6UdibIxUQv0SwPpiPSAUPpaZb" />



# Usage

#### API's  Available

 **NOTE** - This api's are valid if you are running in development mode on your local machine.  If the port is not running correctly please check the .env file PORT variable.  
 
# **Restaurants API**


## Get all restaurants

Request
> GET Request
`http://localhost:5000/api/restaurants`


Response (200)
> JSON Object 
> 
## Get single restaurant by Id

Request
> GET Request
`http://localhost:5000/api/restaurants/:id` (Restaurant id, you can get the _id by getting all restaurants )

Request
> **Headers** : 
`"Content-Type" : "application/json"`

> **Body** :  Not required

Response success (200)
> JSON Object 

## Create a new restaurant entry

Request
> POST Request
`http://localhost:5000/api/restaurants/`

Request
> **Headers** : 
`"Content-Type" : "application/json"`

> **Body** : All fields in JSON object format ex: 
`{"name": "name", "contact": "00000000000"}`


Response (201)
> JSON Object 


## Update restaurant by id

Request
> PUT Request
`http://localhost:5000/api/restaurants/:id` (Restaurant id, you can get the _id by getting all restaurants )

Request
> **Headers** : 
`"Content-Type" : "application/json"`

> **Body** : All fields to be updates in JSON object format ex: (Fields that do not require to be update do not need to be included) 
`{"name": "New name", "contact": "00000000000"}`


Response (201)
> JSON Object 


## Delete restaurant by id

Request
> DELETE Request
`http://localhost:5000/api/restaurants/:id` (Restaurant id, you can get the _id by getting all restaurants )

Request
> **Headers** : 
`"Content-Type" : "application/json"`

> **Body** : 
>  Not required


Response (201)
> JSON Object 

# **Users API**

## Register a new user

Request
> POST Request
`http://localhost:5000/api/user/register`

Request
> **Headers** : 
`"Content-Type" : "application/json"`

> **Body** : All fields in JSON object format ex: 
`{"name": "name", "email": "example@example.com", "password": "123456789"}`

Password must be at least 6 characters


Response (201)
> JSON Object 
``` 
{
	"success":  true,
	"data":  {
				"_id":  Number,
				"name": String,
				"email": String,
				"isAdmin": Boolian,
				"token": String
	}
}
```

## Login user

Request
> POST Request
`http://localhost:5000/api/user/login`

Request
> **Headers** : 
`"Content-Type" : "application/json"`

> **Body** : All fields in JSON object format ex: 
`{"email": "example@example.com", "password": "123456789"}`


Response (200)
> JSON Object 
``` 
{
	"success":  true,
	"data":  {
				"_id":  Number,
				"name": String,
				"email": String,
				"isAdmin": Boolian,
				"token": String
	}
}
```

## Update user

Request
> PUT Request
`http://localhost:5000/api/user/:id`
Get the id of the current logged in user 

Request
> **Headers** : 
`"Content-Type" : "application/json"`
``"Authorization: `Bearer ${Token of current loged in user}`;``

> **Body** : All fields in JSON object format ex: 
`{"name: "New Name", "email": "newemail@example.com", "password": "123456789"}`


Response (201)
> JSON Object 
``` 
{
	"success":  true,
	"data":  {
				"_id":  Number,
				"name": String,
				"email": String,
				"isAdmin": Boolian,
				"token": String
	}
}
```

## Delete user

Request
> DELETE Request
`http://localhost:5000/api/user/:id`
Get the id of the current logged in user 

Request
> **Headers** : 
`"Content-Type" : "application/json"`
``"Authorization: `Bearer ${Token of current loged in user}`;``

> **Body**
Not Required


Response (201)
> JSON Object 
``` 
{
	"success":  true,
	"data":  {
				"_id":  Number,
				"name": String,
				"email": String,
				"isAdmin": Boolian,
				"token": String
	}
}
```

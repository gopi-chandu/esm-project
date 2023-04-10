## NIT AP - CS353 LAB (WEB DEVELOPMENT) PROJECT 

## Project Name : Event Status and Management (ESM)

Visit the website 
- [https://esmg.netlify.app/](https://esmg.netlify.app/) [frontend]
- [https://event-sockets.onrender.com/](https://event-sockets.onrender.com/)    [backend]

## Authors

- [@gopi-chandu](https://github.com/gopi-chandu) [420237]
- [@Karthik-VarmaIndukuri](https://github.com/Karthik-VarmaIndukuri)    [420143]


## Tech stack
- Frontend : React js
- Backend : Node js
- Database : Mongo db
## Features
- Progressive Web app (caching on demand)
- Responsive Design
- Register for events, search for events
- Admin Page to create events, create clubs (CRUD operations by admin)
- College Map Feature to locate where the event is going in the college (using Leaflet js)
- change profile name, picture
- chat channels to chat with people of specific interest.





## Environment Variables (Required during the running of the app)

To run this project, you will need to add the following environment variables.


Backend: 

add the following environment variables to your config.env file in the config folder of the backend directory.
- `NODE_ENV=development `
- `PORT=5000`
- `MONGO_URI=mongodb://127.0.0.1:27017/esm`
- `FILE_UPLOAD_PATH=./public/uploads`
- `MAX_FILE_UPLOAD=1000`
- `JWT_SECRET=YOUR_JWT_SECRET`
- `JWT_EXPIRE=30d`
- `JWT_COOKIE_EXPIRE=30`



Frontend: 

add the following environment variables to your config.json file in the directory the frontend/esm/src

{

  "SERVER_URL": "http://localhost:{BACKEND-PORT}"

}



## Installation 
Backend

goto to backend directory and run these commands to install the packages

```bash
npm i 
```

Frontend

goto to frontend/esm/ directory and run these commands to install the packages
```bash
  npm i 
```
    
## Running the app
Backend

goto to backend directory and run these commands to run the server

```bash
npm run dev
```

Frontend

goto to frontend/esm/ directory and run this commands to start React Server(fronend website)
```bash
  npm start
```
# Webindows
![Gif of webindows...](https://github.com/LisovetsAlex/webindows/assets/82639645/4b485a34-30d8-4b84-bed8-cea11d3fdd3b)

This app is an abomination. It was created due to bordeom at programming classes at school.

Webindows has no purpose, but had in school. Webindows was supposed to be able to open my JS 
homework in draggable and resizable windows.

Now its pupose is to dwell here forever.

## How to run

1. Install deps in /frontend and /backend:

```
npm install
```

2. Build webindows in /frontend:

```
npm run build
```

3. Start Docker, needed for Express Server

```
npm run docker
```

3. Run Webindows in Dev Mode in /frontend:

```
npm run dev
```

4. Run App Express Server in /backend:

```
npm run start:dev
```

5. Production is localhost:3069 after running Docker

### Create Default User in DB

Open mongosh, connect to DB after running docker:

```
use admin
db.createUser({user:"admin",pwd:"12345678",roles:[{role:"readWrite",db:"WEBINDOWS_DB"}, {role: "dbAdmin", db: "WEBINDOWS_DB"}]})
```

Then restart mongodb container

### Making own apps

```
cd frontend/src/apps
```

```
npx create-webindows-app
```

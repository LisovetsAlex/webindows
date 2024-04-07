# How to run

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

## Create Default User in DB

Open mongosh, connect to DB after running docker:

```
use admin
db.createUser({user:"admin",pwd:"12345678",roles:[{role:"readWrite",db:"WEBINDOWS_DB"}, {role: "dbAdmin", db: "WEBINDOWS_DB"}]})
```

Then restart mongodb container

## Making own apps

```
cd frontend/src/apps
```

```
npx create-webindows-app-template
```

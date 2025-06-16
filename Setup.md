## How to setup a new Typescript Express Project
1. 
```
npm init -y
```

2. 
```
npm install -D typescript
npm install concurrnetly
```

3. 
```
tsc --init
```

4. 
```
Add the follwing scripts in package.json 
{
    "build": "npx tsc",
    "watch": "npx tsc -w",
    "prerestart": "npm run build",
    "start": "npx nodemon dist/index.js",
    "dev": "npx concurrently --kill-others \"npm run watch\" \"npm run start\"",
} 
```
Note :- Make relavent config changes in tsconfig.json

5. 
```
npm run dev
```
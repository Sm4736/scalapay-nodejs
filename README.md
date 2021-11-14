# Scalapay Assignment Server

This application provides the endpoint for a front end application to access the Scalapay api.
In addition, it uses a sqlite database to provide persistent cart storage.

Please note: The sqlite database is not copied to the dist folder when building
and therefore the dist folder is not portable.

### Building the application
Run ```npm install```

For convenience, I have included the prebuilt `dist` folder,
but you can build it yourself with

```npx tsc```

### Running the application
```node dist/start.js```

Will start the server on port 3000.

That's all you need to do for this app.

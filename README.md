# Scalapay Assignment Server

This application accesses a simple sqlite database and serves it via a REST interface.

Please note: The sqlite database is not copied to the dist folder when building
and therefore the dist folder is not portable.

### Building the application
For convenience, I have included the prebuilt `dist` folder,
but to build it yourself with

```npx tsc```

### Running the application
```node dist/start.js```

Will start the server on port 3000.

That's all you need to do for this app.

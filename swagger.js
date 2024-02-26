const swaggerAutogen = require('swagger-autogen')();
const doc= {
    info: {
        version: "1.0.0",
        title: "School Management System",
        description: "A simple school management system",
    },
    host: "localhost:8000",
    basePath: "/",
    schemes: ["http","https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
        {
        name: "Login",
        description: "Login related end-points",
        },
        {
        name: "Teacher",
        description: "Teacher related end-points",
        },
        {
        name: "Class",
        description: "Class related end-points",
        },
        {
        name: "Child",
        description: "Child related end-points",
        },
    ],
    paths: {},
    definitions: {
        Login: {
        email: "",
        password: ""
        },
        Teacher: {
        fullName: "string",
        password: "string",
        email: "string",
        image: "string",
        },
        Class: {
        fullName: "string",
        supervisor: "string",
        children: "array",
        },
        Child: {
        fullName: "string",
        class: "string",
        },
    },
    securityDefinitions: {
        Bearer: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
        },
    },
    security: [
        {
        Bearer: [],
        },
    ],
};
const outputFile = './swagger_output.json';
const endpointsFiles = ['./app.js'];
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app.js')
});




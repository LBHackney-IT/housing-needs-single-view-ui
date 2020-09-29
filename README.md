# Housing Needs Single View UI

Displays data from multiple systems for the Single View of a Hackney Customer.

## Installation

1\. Install dependencies:

```
$ npm i
```

2\. Add a .env file in the root directory (see .env.sample for file structure).

## Setup hosts for local dev

To use the cookie-based auth that we use in Single View, your application needs to be on a Hackney domain.

Add the following line to /private/etc/hosts (Mac) or :\Windows\System32\etc\hosts (Windows):

```
127.0.0.1	localdev.hackney.gov.uk
```

## Run the UI

```
$ npm run start
```

## Run the integration tests

A fake api server is used to simulate the api responses back to the UI. To enable Cypress tests, this fake server must be running and a port change is required.

1. In your .env file, change the port value on the REACT_APP_HN_API_URL variable to 8080.
2. Start the fake server

```
$ npm run cy:start
```

3. In another terminal, start the Cypress tests

```
npm run cypress
```

4. When finished with testing, don't forget to change the
   REACT_APP_HN_API_URL variable port value back to 3000 or else your dev server won't work.

## Config for debugging the API (VS Code)

Create a new file at .vscode/launch.json and add the following:

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localdev.hackney.gov.uk:3001",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

## Linting

```
$ npm run lint
```

## Prettier

We recommend installing the Prettier extension in your editor to keep formatting consistent.

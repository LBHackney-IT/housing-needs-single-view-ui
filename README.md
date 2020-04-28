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

```
npm run cypress
```

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

# Flanda - Mockup for Landa web application

#### This project is a mockup for a web app for Landa.

![Flanda](https://i.postimg.cc/TYYVWdS9/Clean-Shot-2022-11-12-at-00-34-46-2x.png)

[Landa](https://Landa.app) is a startup company that lets you buy shares of rental properties, earn monthly income, and
watch your money grow.

## Demo

https://flaysh.github.io/flanda/

## Run Locally

Clone the project

```bash
  git clone https://github.com/Flaysh/flanda
```

Go to the project directory

```bash
  cd flanda
```

Install dependencies

```bash
  npm install
```

Start the app

```bash
  npm start
```

## Json-Server API hosted on Heroku [Here](https://flanda-json-server.herokuapp.com)

#### Get all properties

```http
  GET https://flanda-json-server.herokuapp.com/properties
```

#### Get property

```http
  GET https://flanda-json-server.herokuapp.com/properties/<id>
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | id of property to fetch               |

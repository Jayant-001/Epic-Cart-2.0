
![Logo](https://raw.githubusercontent.com/Jayant-001/Epic-Cart-2.0/main/public/banner.png)


# [Epic Cart](https://epic-cart-2.vercel.app/)

An Ecommerce website build on Next.js framework.

Create you personalized online store for free with Epic Cart. Zero maintenance and brokerage fee.


## Tech Stack

**Client:** React.js, Next.js, React Query, TailwindCSS

**Server:** Node

**Database:** MySQL (Relational Database)

**DB cloud provider:** Amazon Relational Database Service ( AWS ), 

**Web hosting:** Vercel


## Installation

Install epic-cart-2.0 with npm

```bash
  npm install 
  npm run dev
```

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_HOST`

`DB_PORT`

`DB_USER`

`DB_PASSWORD`

`DB_NAME`

`JWT_SECRET`



## Authors

- Designed and developed by [@Jayant-001](https://www.github.com/Jayant-001)


## API Reference

#### Get all products

```http
  GET /api/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get products

```http
  GET /api/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api/prducts/id`      | `string` | **Required**. Id of item to fetch |
| `api/products/`       | `` | Get all products |

#### Cart

Cart endpoints will be added soon

#### Stores

Stores endpoints will be added soon


## Deployment

To deploy this project run

```bash
  npm run deploy
```


## 🚀 About Me
I'm a competitive programmer and full stack developer...

My portfolio - [@Jayant-gupta](https://jayant-gupta.vercel.app/)

You can react me at - jayant.gupta.dln@gmail.com
## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


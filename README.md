# port-checker

port-checker is a worker that checks port availability for an address from the [Türknet ISP](https://turk.net/).\
It checks every two hour and sends me an email if a port is available for me to get an internet.

It is deployed using Docker container, Digital Ocean container registry and served as an APP in Digital Ocean.

## Tech
- Node v14.17.0
- [node-cron](https://github.com/kelektiv/node-cron#readme)
- [nodemailer](https://github.com/nodemailer/nodemailer)
- [Docker](https://www.docker.com/)
- [Digital Ocean](https://www.digitalocean.com/)

## Installation
- Clone the repository

Using HTTPS:
```
  git clone https://github.com/hakanalpp/port-checker.git
```
or using SSL:
```
  git clone git@github.com:hakanalpp/port-checker.git
```


- Add a .env to root direction and edit to your configurations 

```
REQUEST_URL=https://something
REQUEST_TOKEN=token
REQUEST_REFERER=https://referer
SENDER_EMAIL=sender@mail.com
SENDER_PASSWORD=password
RECEIVER_EMAIL=receiver@mail.com
SUBJECT=Mail_subject
FAILURE_TEXT=Failure_Text
```
Failure Text is for checking everytime before sending the mail.


#### For running locally
- Install the packages
```yarn install```

- Run using yarn
```yarn start```


#### For serving with Docker and Digital Ocean

- [DigitalOcean Container Registry Quickstart](https://docs.digitalocean.com/products/container-registry/quickstart/#push-to-your-registry)

- [How to Deploy from a Container Image](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-registry/)


## Tested environment

- Operating System: Fedora 33
- NodeJs: v14.17.0


## License

Copyright (c) 2021 Hakan Alp

**port-checker** is licensed under the MIT




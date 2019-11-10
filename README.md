# Xendit Senior Software Engineer Exam

## Development
This repository can be orchestrated using `docker-compose` with the following command:
```
$ docker-compose up
```

Once the containers have been spun up, we can `exec` to the `xendit-api` container
by checking the container id of the API:
```
docker ps | grep xendit
```
and then running
```
docker exec -it <container-id> bash
```
Once inside the container, we can run the following commands:

```
$ npm run build
```

```
$ npm run test
```

The build command ensures that the code is transpiled and built into the `dist`
folder where our application listens to.

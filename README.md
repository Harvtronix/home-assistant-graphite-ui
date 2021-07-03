# Home Assistant Graphite UI

<img
    src="https://user-images.githubusercontent.com/27390822/66890471-4eff0b80-efb4-11e9-8ea3-af56ef7c0d4a.png"
    alt="Graphite Logo"
    width="200">
    
[![ci-test status](https://github.com/Harvtronix/home-assistant-graphite-ui/workflows/ci-test/badge.svg)](https://github.com/Harvtronix/home-assistant-graphite-ui)
[![ci-lint status](https://github.com/Harvtronix/home-assistant-graphite-ui/workflows/ci-lint/badge.svg)](https://github.com/Harvtronix/home-assistant-graphite-ui)
[![docker build status](https://img.shields.io/docker/cloud/build/harvtronix/home-assistant-graphite-ui?label=build&logo=docker&logoColor=ccccdd)](https://hub.docker.com/r/harvtronix/home-assistant-graphite-ui)
[![docker pulls](https://img.shields.io/docker/pulls/harvtronix/home-assistant-graphite-ui?label=pulls&logo=docker&logoColor=ccccdd)](https://hub.docker.com/r/harvtronix/home-assistant-graphite-ui)

## A React-based next-gen user interface for Home Assistant that strives for simplicity over all else.

This project is very much a work in progress, but here's a rough idea of what it looks like at the
moment:

<img
    src="https://user-images.githubusercontent.com/27390822/66890527-735ae800-efb4-11e9-88a7-0b79a9a78647.jpg"
    alt="Graphite Logo"
    width="480">

## Docker Repo
https://hub.docker.com/r/harvtronix/home-assistant-graphite-ui


## Running the project via Docker

To run the project as a Docker container, pull the image and start it with a command like this:

```bash
docker run -tid \
  --name "graphite" \
  --restart unless-stopped \
  --network host \
  --env GRAPHITE_HA_SERVER="uri.of.your.home.assistant.server:8123" \
  --env GRAPHITE_HA_AUTH_TOKEN="generated_long_living_home_assistant_access_token" \
  harvtronix/home-assistant-graphite-ui:latest
```


## Running the project locally

To run the project locally, you'll need to install Node.js (preferably Node 14 or higher).

Create a `.env` file with the following environment variables:
```bash
GRAPHITE_HA_SERVER="uri.of.your.home.assistant.server:8123"
GRAPHITE_HA_AUTH_TOKEN="generated_long_living_home_assistant_access_token"
```

Run `npm install` from the project dir.
Run `npm run dev-server` to run the UI and have it connect to the home assistant server specified in the `.env` file.

If you want to run against a test server, you can run `npm run dev-db` to start a json-backed database with whatever data you want. In the `__dev__` folder there are two files named `db-services.js` and `db-states.js` which contain some sample data scraped from the APIs of a home assistant server. You can modify or replace this with your own data for testing. The express server that backs the json database supports a couple basic operations like `toggle`, `turn_off`, `turn_on`, `lock`, and `unlock`, but can be easily extended to support more.

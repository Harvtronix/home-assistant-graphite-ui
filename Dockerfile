#
# First phase of build: Build React code.
#
FROM node:latest AS react-build
WORKDIR /graphite
COPY . .
RUN npm ci && npm run build
COPY dist .
# COPY src/server ./src/server

FROM node:latest
WORKDIR /graphite
COPY --from=react-build /graphite/node_modules ./node_modules
COPY --from=react-build /graphite/dist ./dist
COPY ./config/proxy.config.js ./config/
COPY --from=react-build /graphite/src/server ./src/server
EXPOSE 6464
CMD ["node", "src/server/index.js"]

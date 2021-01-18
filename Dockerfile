FROM node:14
# Create app directory
WORKDIR /usr/src/app
# Bundle app source
COPY server.js .
EXPOSE 80
# Run Node app
CMD [ "node", "server.js" ]

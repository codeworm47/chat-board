FROM node:14-alpine
WORKDIR /app/

ENV NODE_ENV production
ENV PATH /app/node_modules/.bin:$PATH
RUN file="$(ls -1 /app)" && echo $file


COPY /chat-board-webui/package.json ./
COPY /chat-board-webui/package-lock.json ./
RUN npm install

COPY /docker/webui .

# start app
CMD ["npm", "start"]
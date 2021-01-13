FROM node:15-slim
WORKDIR /app
COPY package.json /app
RUN yarn
COPY . /app
CMD ["yarn", "start"]

FROM node:11.12
COPY . /app
EXPOSE 3001
CMD npm start
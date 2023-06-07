FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/SuhailTechInfo/Secktor-bot /root/Suhail_Bot
WORKDIR /root/Suhail_Bot/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]


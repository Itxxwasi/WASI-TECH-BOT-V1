FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/SuhailTechInfo/Secktor-bot /root/SuhailTech_Bot
WORKDIR /root/SuhailTech_Bot/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]

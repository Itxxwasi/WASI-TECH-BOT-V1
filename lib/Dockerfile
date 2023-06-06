FROM quay.io/lyfe00011/md:beta
RUN git clone https://github.com/SuhailTechInfo/Secktor-bot /root/SuhailTech_Bot
WORKDIR /root/SuhailTech_Bot/

RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]

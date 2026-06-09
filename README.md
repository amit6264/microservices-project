squ_7fb97e51ed776927384ba5f5fb42417783e8cd87


sudo apt update

sudo apt install docker.io docker-compose-v2 awscli -y




sudo systemctl start docker

sudo systemctl enable docker




sudo usermod -aG docker ubuntu

newgrp docker





aws configure





aws ecr get-login-password --region eu-north-1 | \
docker login --username AWS --password-stdin 744420879952.dkr.ecr.eu-north-1.amazonaws.com




mkdir -p ~/microservices

cd ~/microservices



nano docker-compose.yml

services:

  frontend:
    image: 744420879952.dkr.ecr.eu-north-1.amazonaws.com/frontend:latest
    container_name: frontend
    ports:
      - "3000:3000"
    restart: always

  backend:
    image: 744420879952.dkr.ecr.eu-north-1.amazonaws.com/backend:latest
    container_name: backend
    ports:
      - "5000:5000"
    restart: always

  admin:
    image: 744420879952.dkr.ecr.eu-north-1.amazonaws.com/admin:latest
    container_name: admin
    ports:
      - "3001:3001"
    restart: always





    docker compose up -d

    docker ps





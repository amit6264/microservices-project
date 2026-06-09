sqa_cb4c6ed911fc61d01cb5839ce2fe8b61ff2bef3f


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



#### monitoring 

mkdir ~/monitoring
cd ~/monitoring


nano prometheus.yml


global:
  scrape_interval: 15s

scrape_configs:

  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']

  - job_name: 'cadvisor'
    static_configs:
      - targets: ['cadvisor:8080']




nano docker-compose.yml



services:

  prometheus:
    image: prom/prometheus
    container_name: prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    restart: unless-stopped

  grafana:
    image: grafana/grafana
    container_name: grafana
    ports:
      - "3001:3000"
    restart: unless-stopped
    volumes:
      - grafana-storage:/var/lib/grafana

  node-exporter:
    image: prom/node-exporter
    container_name: node-exporter
    ports:
      - "9100:9100"
    restart: unless-stopped

  cadvisor:
    image: gcr.io/cadvisor/cadvisor:latest
    container_name: cadvisor
    ports:
      - "8080:8080"
    privileged: true
    devices:
      - /dev/kmsg
    volumes:
      - /:/rootfs:ro
      - /var/run:/var/run:rw
      - /sys:/sys:ro
      - /var/lib/docker/:/var/lib/docker:ro
    restart: unless-stopped

volumes:
  grafana-storage:






  docker compose up -d

  docker ps




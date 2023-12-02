# Use the docker-compose command
DC = docker-compose

# Default action to start all services
all: up

# Build the Docker images without starting the containers
build:
	$(DC) build

# Start the containers in the background
up:
	$(DC) up -d

# Stop the running containers
down:
	$(DC) down

# Rebuild and restart the containers
rebuild: down build up

# Follow the logs of the containers
logs:
	$(DC) logs -f

# Enter the api container
api-shell:
	docker exec -it api_c sh

# Start the api container in the background
api:
	$(DC) up -d api

# Enter the myblog container
myblog-shell:
	docker exec -it myblog_c sh

# Stop and remove all containers, networks, and volumes
clean:
	$(DC) down --volumes --remove-orphans

# Display help information
help:
	@echo "Usage:"
	@echo "  make build       	- Build the Docker images."
	@echo "  make up          	- Start all services in detached mode."
	@echo "  make down        	- Stop all services."
	@echo "  make rebuild     	- Rebuild and restart all services."
	@echo "  make logs        	- Follow logs of all services."
	@echo "  make api-shell   	- Access the shell of the 'api' service."
	@echo "  make api         	- Start the 'api' service in detached mode."
	@echo "  make myblog-shell 	- Access the shell of the 'myblog' service."
	@echo "  make clean       	- Stop and remove containers, networks, and volumes."
	@echo "  make help        	- Display this help message."

.PHONY: all build up down rebuild logs api-shell myblog-shell clean api


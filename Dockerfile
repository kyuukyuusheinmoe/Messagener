# Use the official RabbitMQ image from Docker Hub
FROM rabbitmq:management

# Expose ports
# 5672 is the RabbitMQ default port
# 15672 is the management plugin default port
EXPOSE 5672 15672

# Default user and password are 'guest' / 'guest', no additional configuration needed

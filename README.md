## Local setup

##### 1. Firstly, need to install NestJS globally

``` $ npm install -g @nestjs/cli ```

##### 2. Go to the cloned project directory 
``` $ cd Messenger```

##### 3. Run the docker compose to start up both nestjs and rabbitMQ
``` $ docker compose up --build```

## Development Server setup

##### 1. Setup an EC2 server using Terraform Template

``` terraform init - remote stage ```
``` terraform plan - remote stage ``` 
``` terraform apply --- real deployc ```

##### 2. Go  into EC2 server with ssh client

##### 2. Clone the the repository into the server 
``` git clone https://github.com/kyuukyuusheinmoe/Messagener.git ```

##### 3. Go to the cloned project directory 
``` $ cd Messenger```

##### 4. Run the docker compose to start up both nestjs and rabbitMQ
``` $ docker compose up --build```
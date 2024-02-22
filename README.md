# Se-Mod-10---Class-Exercise

1.Create a new repo on GitHub, clone it and build an Express API which:
a)Fetches 100 products from fakestoreapi
b)Keeps those products in memory
c)Exposes CRUD endpoints for Products (including fetching All & individual products by ID)

2.Setup a PostMan collection to test every Product CRUD endpoint of your API via your local Express

3.Create a Docker image for your Express API
a)Build it, run it locally
b)Clone your PostMan collection to test every Product CRUD endpoint of your API via your local Docker Container

4.Push the Docker image to DockerHub

5.Create a new EC2 Amazon Linux instance on AWS
a)Be sure to create a new Key Pair +
b)Set the network settings to allow ANYONE to access the site over HTTP (Port 80)

6.Pull & Run the Docker image on your AWS Instance
Clone your PostMan collection to test every Product CRUD endpoint of your API via your AWS Instance


# projet .lolotte

Discover projet.lolotte, a brand new french project assembling all datas about climbers.

The first version you can see presents climbers from different pratices all over the world.

To come : a summary of all competitions and a map referencing the most famous routes outdoors.


## 🚀 About Me
Hey I'm Madeline, I started studying computer programming in 2022 and this is one of my first personal projects in collaboration with Kayoo Escalade.

As I still a newborn developper, feel free to give me some feedbacks !

## Setup & Use

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

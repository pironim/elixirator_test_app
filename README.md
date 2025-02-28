# Test application

## Local development

### Start Backend
```sh
bundle exec rails db:create db:migrate db:seed
bundle exec rails s
```

### Testing graphql queries without frontend

http://localhost:3000/graphiql

graphql example query
```
{
  tasks {
    id
    name
  }
}

query {
  projectTasks(id: 1){
    id
    name
  }
}
```

BG Job to insert new tasks
```
CreateTasksJob.new.perform
```

### Start frontend
```sh
npm install
npm run dev
```

# Implementation process

1. To make things easier - use one mono repo backend, frontend folders with docker compose for local development

2. try to build docker compose for local development but reject this idea due to tight deadline. going with all apps on local machine

3. Rethinking requirements and figure out that redis can help with two things
    - can be leveraged to generate new tasks in background every 2 minutes
    - required to send websockets notifications for live updates on client side

4. Generate new rails app - rails 8.0.1 and test db connection
5. generate react app with vite  npm create vite@latest . -- --template react
6. add graphql to rails application
7. Wire react app to use one grapql query
8. Add second query
9. Improve css and some primitive layout
10. make project selectable and remove hardcoded project id from props
11. add localstorage to user preferences
12. add job to create new tasks
13. add rufus scheduler to run job every 2 minutes
14. adding subscription + action cable to backend
# Test application

need 
ruby 3.3, Mysql, Redis, NodeJs installed

### Start Backend
```sh
bundle
bundle exec rails db:create db:migrate db:seed
bundle exec rails s
```

### Start frontend
```sh
npm install
npm run dev
```

# Implementation process

1. To make things easier - use one mono repo backend, frontend

2. try to build docker compose for local development but reject this idea due to tight deadline. going with all apps on local machine

3. Rethinking requirements and figure out that redis/sidekiq can help with two things
    - can be leveraged to generate new tasks in background every 2 minutes
    - required to send websockets notifications for live updates on client side

4. Generate new rails app - rails 8.0.1 and test db connection with new mysql installation

5. generate react app with vite
6. add graphql to rails application
7. Wire react app to use one grapql query
8. Add second query
9. Improve css and some primitive layout
10. make project selectable and remove hardcoded project id from props
11. add localstorage to user preferences
12. add job to create new tasks
13. add rufus scheduler to run job every 2 minutes
14. adding subscription + action cable to backend
15. adding frontent code
16. debugging subscription issues.
17. polish results
18. adjust readme

STILL NOT READY FOR REAL PROD NEED AT LEAST ENV vars added to both front and back, TESTS, LINER .

# Test application

## Local development

### Start
```sh
bundle exec rails db:create db:migrate db:seed
bundle exec rails s
```

# Implementation process

1. To make things easier - use one mono repo backend, frontend folders with docker compose for local development

2. Rethinking requirements and figure out that redis can help with two things
    - can be leveraged to generate new tasks in background every 2 minutes
    - required to send websockets notifications for live updates on client side

4. Generate new rails app - rails 8.0.1 and test db connection

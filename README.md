# API Test with newman(postman)

## Index 
  1. [Prerequisite](#Preequisite)
  2. [Project setup](#Project-setup)
  3. [Install dependencies](#Install-dependencies)
  4. [Excuation](#Excuation)


## Prerequisite 
  1. node 
  2. git
  3. Vs-code [optional]
  4. Postman [optional]

## Project setup
  1. Open terminal/cmd
  2. Clone repository
  ```bash
  git clone https://github.com/AbhishekDumbre/APITestPostmanWithNewman.git
  ```
  3. Navigate to project directory 
  ```bash
  cd APITestPostmanWithNewman
  ```


##  Install dependencies
  ```bash
  npm install newman newman-reporter-html -g
  ```

## Excuation
  ```bash
  newman run data/tests.json -e data/test_env.json -r cli,html
  ```

## Report
   report will be generated under project repository 'newman/' folder



# resty

A browser based API testing tool

## Partners

[Junyoung Son](https://github.com/Junyoungson808)

## Business Requirements

Our application will be an API testing tool that can be run in any browser, allowing a user to easily interact with APIs in a familiar interface.

## Setup

- npx create-react-app resty
- npm i
- copy over starter code
- push to github
  - git remote add origin <https://github.com/SdMartinez13/resty>
- npm i jest
- npm i verbose coverage

## Technical Requirements

The application will be created with the following overall architecture and methodologies

- React
- ES6 Classes
- Shared Component State
- SASS for styling
- Component specific CSS where possible
- Test Driven Development, using Jest
- Tests will be runnable locally
- Deployment to GitHub Pages using an Action
- As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data
- As a user, I want to see the results returned from an API request in my browser in a readable format
- Install the React Testing Library framework
- Assert that upon submitting the form will result in data being rendered in the output area
- You will need to “mock” the API request with React Testing Library
- Note the example here: https://testing-library.com/docs/react-testing-library/example-intro/
- This shows how to use the msw package to setup a fake server that returns fake data in your
- tests so that you can run tests without having to call an actual API

## Deployment

[codesandbox deployment BASE](9https://codesandbox.io/p/github/SdMartinez13/resty/main?file=%2Fsrc%2Findex.js&selection=%5B%7B%22endColumn%22%3A1%2C%22endLineNumber%22%3A12%2C%22startColumn%22%3A1%2C%22startLineNumber%22%3A12%7D%5D&workspace=%257B%2522activeFileId%2522%253A%2522cl9npxqgn000clqgnhpkl3ygv%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%252C%2522%252Fsrc%252Findex.js%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522cl9nqcg6p00xe3b6h9sevqkto%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522cl9nqccbj00ug3b6h64kncp3q%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D)

[codesandbox deployment STATE](https://codesandbox.io/p/github/SdMartinez13/resty/state?file=%2Fsrc%2Findex.js&selection=%5B%7B%22endColumn%22%3A1%2C%22endLineNumber%22%3A12%2C%22startColumn%22%3A1%2C%22startLineNumber%22%3A12%7D%5D&workspace=%257B%2522activeFileId%2522%253A%2522cl9npxqgn000clqgnhpkl3ygv%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522cl9ouvc2001vs3b6h71267nn9%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D)

[codesandbox deployment EFFECT HOOKS](https://codesandbox.io/p/github/SdMartinez13/resty/effect-hook?file=%2Fsrc%2Findex.js&selection=%5B%7B%22endColumn%22%3A1%2C%22endLineNumber%22%3A12%2C%22startColumn%22%3A1%2C%22startLineNumber%22%3A12%7D%5D&workspace=%257B%2522activeFileId%2522%253A%2522cl9npxqgn000clqgnhpkl3ygv%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522cl9q9o0os00ev3b6if6y9w8fx%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D)

[GITHUB Repo](https://github.com/SdMartinez13/resty)

## UML

![uml26](/week6-labs.png)
![uml27](/27-labs.png)
![uml28](/LAB28.png)


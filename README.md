<div align="center">

![GitHub package.json version](https://img.shields.io/github/package-json/v/nolindnaidoo/enterprise-graphql-server) ![Node](https://img.shields.io/badge/node%20-15-green.svg) ![Travis (.org)](https://img.shields.io/travis/nolindnaidoo/enterprise-graphql-server) ![GitHub repo size](https://img.shields.io/github/repo-size/nolindnaidoo/enterprise-graphql-server?color=g) ![GitHub](https://img.shields.io/github/license/nolindnaidoo/enterprise-graphql-server)

</div>

<h1 align="center">Enterprise GraphQL Server</h1>

### Core Libraries

A Node GraphQL server template built with [ES2021](https://javascript.christmas/2020/7) [Node 15](https://nodejs.org/en/), [GraphQL](https://graphql.org), [Express](https://expressjs.com), [Express-GraphQL](https://github.com/graphql/express-graphql). High-integrity Integration Testing with [SuperTest](https://github.com/visionmedia/supertest), [Mocha](https://mochajs.org/), and [Chai](https://www.chaijs.com/). Containerization with [Docker](https://www.docker.com/). Continuous Integration with [Travis-CI](https://travis-ci.com/) and [Github](https://github.com/).

<h2 align="center">Quick Start</h2>

### Scripts

- `yarn start` - Deploy development server at http://localhost:3001/graphql
- `yarn run build` - Deploy production server at http://localhost:3001/graphql
- `yarn run builddocker` - Build docker image
- `yarn test` - Test server (Deploy server first)

### Usage

#### Query all objects

```
{
  objects {
    GraphQLBoolean
    GraphQLFloat
    GraphQLID
    GraphQLInt
    GraphQLString
  }
}
```

#### Query a single objects

```
{
  object(GraphQLID: 1) {
    GraphQLBoolean
    GraphQLFloat
    GraphQLID
    GraphQLInt
    GraphQLString
  }
}
```

#### Mutation

```
mutation {
  addObject( GraphQLBoolean: true, GraphQLFloat: 3, GraphQLID: 3, GraphQLInt: 3, GraphQLString: "Object 3") {
    GraphQLBoolean
    GraphQLFloat
    GraphQLID
    GraphQLInt
    GraphQLString
  }
}
```

<h1 align="center">Development Setup</h1>

## Environment

- Install [NVM](https://github.com/nvm-sh/nvm) (Optional)
- Install [Node 15](https://nodejs.org/en/)
- Install [YarnPKG](https://yarnpkg.com/en/docs/install)
- Install [Docker](https://www.docker.com/products/docker-desktop)
- Install [Git](https://git-scm.com/downloads) and run these commands to configure it:
  - `> git config --global user.name "{FULL_NAME}"`
  - `> git config --global user.email {EMAIL}`
  - `> git config --global core.autocrlf false`.
  - Refer to [Advanced Git Configuration](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration) for additional information
- Setup [SSH](https://help.github.com/articles/connecting-to-github-with-ssh/)
- Clone Repository `git clone https://github.com/nolindnaidoo/enterprise-graphql-server.git`

## Environment

- This project uses local mock data for rapid prototyping and experimenting so that you are not locked into a specific backend host or configuration.

- `"type": "module",` - It uses modules with import/export instead of CommonJS require.
- `--experimental-specifier-resolution=node`

## API Testing

- [SuperTest](https://github.com/visionmedia/supertest) HTTP assertions made easy via superagent.
- [Mocha](https://mochajs.org/) is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.
- [Chai](https://www.chaijs.com/) is a BDD / TDD assertion library for [node](http://nodejs.org) and the browser that can be delightfully paired with any javascript testing framework.

## Continuous Integration & Deployment

The following links provide enhanced awareness throughout the Agile SDLC process. Save as bookmarks for rapid development.

- [Branch Status](https://github.com/nolindnaidoo/enterprise-graphql-server/branches)
- [Pull Request Status](https://github.com/nolindnaidoo/enterprise-graphql-server/pulls)
- [TravisCI Repo Dashboard](https://travis-ci.org/github/nolindnaidoo/enterprise-graphql-server)

## ESLint

Enterprise React Components uses [Airbnb ESLint rules](https://github.com/airbnb/javascript) for lint/syntax errors, along with [Prettier](https://github.com/prettier/prettier) for automated formatting and lint error fixing.

#### Exceptions

- [comma-dangle](https://eslint.org/docs/rules/comma-dangle)

## Git

The Git Feature Branch Workflow is a composable workflow that can be leveraged by other high-level Git workflows. This project utilizes the [Github Flow](https://guides.github.com/introduction/flow/), which allows for fast-paced and high-quality parallel development.

#### Github Flow:

- Create the branch. Make sure it begins with the `feature/`, `hotfix/`, `bugfix/`, `semver/` prefix.
- Add commits
- Open a Pull Request
- Review & Collaborate changes
- Deploy and Test
- Merge

#### Merging from Main

A best practice is to perform merging when the working tree is clean. Use caution, first commit any unfinished work still desired, or reset the Git working tree. Choose `> git stash` and save the working tree until ready. Alternatively, reset the working tree. `> git reset --hard`

Staying up-to-date with the latest from `main` is beneficial to parallel development. Remote `main` represents the most stable and approved iteration of the product. In Parallel Development, updates to `main` may affect current implementation. Work with the latest from `main` by merging the latest from `main` into `feature/{name}` as frequently as possible, but only when necessary.

#### Merging from Main Procedure

- `> git reset --hard` or `> git stash`
- `> git checkout main`
- `> git pull`
- `> git checkout "feature/{name}"`
- `> git merge main`
- No Conflicts: Auto-merge Successful
- Conflicts: Resolve Conflicts and run:
  - `> git add .`
  - `> git commit -m "merge main, resolved conflicts"`
  - `> git push`

#### Merging to Main

- Make sure your feature branch is not behind the main. You can view it from the [Branch Status](https://github.com/nolindnaidoo/enterprise-react-components/branches) view in the Behind/Ahead column.
- Verify that your feature branch builds successfully on [TravisCI](https://travis-ci.org/github/nolindnaidoo/enterprise-react-components/branches).
- Check your coverage against main. The Feature Branch should be greater than or equal to the main.
- Resolve or reply to all Pull Request comments.
- Use the Merge button on the Pull Request to merge back to main.
- Once the test is successful and no further changes are needed for sign off delete the original feature branch.

## IDE's

Take advantage of advanced workflow features by using supported IDE's with the appropriate plugins.

### Atom

- Install [Atom](https://atom.io)
- Install Packages
  - atom-css-clean
  - autoclose-html
  - autocomplete-json
  - autocomplete-modules
  - busy-signal
  - file-icons
  - highlight-selected
  - html-escaper
  - intentions
  - language-babel
  - linter
  - linter-eslint
  - linter-htmlhint
  - linter-ui-default
  - markdown-preview-enhanced
  - pigments
  - prettier-atom
  - sort-lines
  - terminal-panel-uoa

### Visual Studio Code

- Install [Visual Studio Code](https://code.visualstudio.com)
- Install Packages
  - christian-kohler.path-intellisense
  - dbaeumer.vscode-eslint
  - donjayamanne.githistory
  - emmanuelbeziat.vscode-great-icons
  - esbenp.prettier-vscode
  - formulahendry.auto-close-tag
  - vstirbu.vscode-mermaid-preview
  - wayou.vscode-todo-highlight
  - zhuangtongfa.Material-theme

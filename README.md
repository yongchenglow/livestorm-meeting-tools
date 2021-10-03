# Livestorm Meeting Tools

This repository contains the code for Livestorm Meeting Tools. It was created as a project for the Livestorm hackathon, so I apologise in advance if the code is a bit messy

## Table of Contents

1. [Introduction](#introduction)
2. [Running the code](#running-the-code)
3. [File Structure](#file-structure)
4. [Linting Rules](#linting-rules)
5. [Acknowledgements](#acknowledgements)
6. [License](#license)

## Introduction

This plugin adds meeting tools to your Livestorm Events:

1. Select a random group
2. Timer (Countdown and Countup)
3. Scrum Master (Digital Assistant)

## Running the code

Whenever you want to try your plugin or publish it for good, simply run :

```
livestorm publish
```

This will publish your plugin based on the API token you set in the environments.json

In the development phase it is advised that you use the watch command that allows iterate much faster.

```
livestorm watch
```

## File Structure

```
Livestorm-Meeting-Tools
├── src
│    ├── components
│    ├── main
│    ├── templates
│    └── App.ts
├── dangerfile.ts
└── index.ts
```

## Linting Rules

### File Structure

To be written in the following manner:

1. Folder lowerCamelCase
2. Files UpperCamelCase

### Git Branches

Pick between:

1. feature/{feature description}
2. fix/{fix description}

### Commits

1st line of a commit should not be longer than 72 characters

1st line of commit should be of the following sctructure:

```
<keyword>: <commit details>
```

keywords should be taken from the commitlint.config.js

## Acknowledgements

1. This project was created using the [Livestorm SDK](https://developers.livestorm.co/docs/getting-started-with-plugins-sdk) please refer to their docs for more information
2. Commit Lint setup was done with the help of [commitlint](https://commitlint.js.org/#/)
3. Betterer setup was done with the help of [betterer](https://phenomnomnominal.github.io/betterer/docs/running-betterer/)

## License

[MIT License](./LICENSE)

# Notes App

This project is a command line interface to keep notes.

## Features Available

- Add notes.
- Delete a specific note.
- Read a specific note.
- List all the notes.

## Getting Started

1. Fork the repository.

2. Clone the forked repository.
```bash
git clone https://github.com/<your_user_name>/Notes-App-CLI.git
```
3. Navigate to the cloned repository.
```bash
cd Notes-App-CLI
```

### Prerequisite

Download Node.js from [here](https://nodejs.org/en/download/).

Verify installation by checking the version.
```bash
node -v
npm -v
```

### Installation

Install the dependencies by running the command in the terminal.
```bash
npm install
```

## Usage

To start with the project run the following command and get the list of features available.
```bash
node app.js --help
```

### Add

To add a note check the options available.
```bash
node app.js add --help
```

Add the required options with content.
```bash
node app.js add --title="<note_title>" --body="<note_body>"
```

### Delete

To delete a specific note check the options available.
```bash
node app.js delete --help
```

Add the required options with content.
```bash
node app.js delete --title="<note_title>" 
```

### Read

To read a specific note check the options available.
```bash
node app.js read --help
```

Add the required options with content.
```bash
node app.js read --title="<note_title>" 
```

### List

To list down all the notes.
```bash
node app.js list
```
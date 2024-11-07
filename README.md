# Notion Easy Export CLI

CLI tool to export Notion pages to markdown files.
Wrapper around `notion-easy-export` package.

Uses [yargs](https://github.com/yargs/yargs). Ahoi!

## Requirements

`wkhtmltopdf` is required to export PDF files.

`nodejs >= 22` is version this tool tested with.

## Installation

### Using DevContainer

1. Use VSCode or any other editor that supports DevContainer to open the project in a container.
2. Wait until `postCreateCommand` finishes. It will install all the dependencies.
3. Invoke the command in container shell. See [Usage](#usage) section for more details.

### Manual

```bash
git clone ...
cd notion-easy-export-cli
npm install
```

## Usage

```
Usage: index.js <pageId>

Commands:
  index.js single  Single mode. It allows users to generate a separate PDF for e
                   ach of the HTML pages.
  index.js merge   It allows users to generate a single PDF for the entire expor
                   t. It concatenates each of the notion pages smartly to genera
                   te a single document.

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -t, --token    Notion token_v2                             [string] [required]
  -p, --pageId   Notion page id                              [string] [required]
```

See [notion-easy-export](https://github.com/subhamX/notion-easy-export/) for more details.

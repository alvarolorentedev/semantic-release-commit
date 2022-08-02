oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g semantic-release-commit-cli
$ srcommit COMMAND
running command...
$ srcommit (--version)
semantic-release-commit-cli/0.0.0 linux-x64 node-v16.14.0
$ srcommit --help [COMMAND]
USAGE
  $ srcommit COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`srcommit hello PERSON`](#srcommit-hello-person)
* [`srcommit hello world`](#srcommit-hello-world)
* [`srcommit help [COMMAND]`](#srcommit-help-command)
* [`srcommit plugins`](#srcommit-plugins)
* [`srcommit plugins:install PLUGIN...`](#srcommit-pluginsinstall-plugin)
* [`srcommit plugins:inspect PLUGIN...`](#srcommit-pluginsinspect-plugin)
* [`srcommit plugins:install PLUGIN...`](#srcommit-pluginsinstall-plugin-1)
* [`srcommit plugins:link PLUGIN`](#srcommit-pluginslink-plugin)
* [`srcommit plugins:uninstall PLUGIN...`](#srcommit-pluginsuninstall-plugin)
* [`srcommit plugins:uninstall PLUGIN...`](#srcommit-pluginsuninstall-plugin-1)
* [`srcommit plugins:uninstall PLUGIN...`](#srcommit-pluginsuninstall-plugin-2)
* [`srcommit plugins update`](#srcommit-plugins-update)

## `srcommit hello PERSON`

Say hello

```
USAGE
  $ srcommit hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/kanekotic/semantic-release-commit/blob/v0.0.0/dist/commands/hello/index.ts)_

## `srcommit hello world`

Say hello world

```
USAGE
  $ srcommit hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `srcommit help [COMMAND]`

Display help for srcommit.

```
USAGE
  $ srcommit help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for srcommit.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `srcommit plugins`

List installed plugins.

```
USAGE
  $ srcommit plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ srcommit plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `srcommit plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ srcommit plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ srcommit plugins add

EXAMPLES
  $ srcommit plugins:install myplugin 

  $ srcommit plugins:install https://github.com/someuser/someplugin

  $ srcommit plugins:install someuser/someplugin
```

## `srcommit plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ srcommit plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ srcommit plugins:inspect myplugin
```

## `srcommit plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ srcommit plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ srcommit plugins add

EXAMPLES
  $ srcommit plugins:install myplugin 

  $ srcommit plugins:install https://github.com/someuser/someplugin

  $ srcommit plugins:install someuser/someplugin
```

## `srcommit plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ srcommit plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ srcommit plugins:link myplugin
```

## `srcommit plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ srcommit plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ srcommit plugins unlink
  $ srcommit plugins remove
```

## `srcommit plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ srcommit plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ srcommit plugins unlink
  $ srcommit plugins remove
```

## `srcommit plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ srcommit plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ srcommit plugins unlink
  $ srcommit plugins remove
```

## `srcommit plugins update`

Update installed plugins.

```
USAGE
  $ srcommit plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

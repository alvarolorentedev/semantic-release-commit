import {Command, Flags} from '@oclif/core'
import prompts from "prompts";
import { simpleGit, SimpleGit, CleanOptions } from 'simple-git';

//const git: SimpleGit = simpleGit().clean(CleanOptions.FORCE);

export default class Commit extends Command {
  static description = 'Commits added files using semantic release message'

  async run(): Promise<void> {
    const questions: any = [
      {
        type: 'select',
        name: 'type',
        message: 'Pick a color',
        choices: [
          { title: 'feat', description: 'A new feature', value: 'feat' },
          { title: 'fix', description: 'A bug fix', value: 'fix' },
          { title: 'docs', description: 'Documentation only changes', value: 'docs' },
          { title: 'style', description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)', value: 'style' },
          { title: 'refactor', description: 'A code change that neither fixes a bug nor adds a feature', value: 'refactor' },
          { title: 'perf', description: 'A code change that improves performance', value: 'perf' },
          { title: 'test', description: 'Adding missing or correcting existing tests', value: 'test' },
          { title: 'chore', description: 'Changes to the build process or auxiliary tools and libraries such as documentation generation', value: 'chore' },
        ],
        initial: 0
      },
      {
        type: (prev: any) => ['feat', 'refactor'].includes(prev) ? 'toggle' : null,
        name: 'breaking',
        message: 'Is it a breaking chamge?',
        initial: false,
        active: 'yes',
        inactive: 'no'
      },
      {
        type: 'text',
        name: 'message',
        message: `What's the commit message?`
      }
    ];
    const response = await prompts(questions);
    console.log()
    simpleGit()
     .commit(
      `${response.type}: ${response.message}${response.breaking? " (BREAKING CHANGE)" : ""}`, 
      () => console.log(`commited: "${response.type}: ${response.message}${response.breaking? " (BREAKING CHANGE)" : ""}"`)
      )
  }
}

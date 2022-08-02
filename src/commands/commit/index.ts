import {Command, Flags} from '@oclif/core'
import prompts from "prompts";

export default class Hello extends Command {
  static description = 'Say hello'

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  async run(): Promise<void> {
    const questions: any = [
      {
        type: 'text',
        name: 'dish',
        message: 'Do you like pizza?'
      },
      {
        type: (prev: any) => prev == 'pizza' ? 'text' : null,
        name: 'topping',
        message: 'Name a topping'
      }
    ];
    const response = await prompts(questions);
    console.log(response)
  }
}

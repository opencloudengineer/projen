import { SampleFile, TextFile } from 'projen';
import { PythonProject, PythonProjectOptions } from 'projen/lib/python';

export interface PyProjectOptions extends PythonProjectOptions {}

export class PyProject extends PythonProject {
  constructor(options: PyProjectOptions) {
    super({
      ...options,
      githubOptions: {
        pullRequestLint: false,
      },
    });

    new SampleFile(this, 'SampleFile.json', {
      contents: JSON.stringify({ foo: 'bar' }),
    });
    new TextFile(this, 'TextFile.json', {
      lines: [JSON.stringify({ foo: 'bar' })],
    });
  }
}
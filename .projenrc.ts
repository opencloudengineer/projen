import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Siddharth Tiwari',
  authorAddress: 'siddharth.tiwari@treebohotels.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'projen',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/siddharth.tiwari/projen.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
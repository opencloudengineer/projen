import { cdk } from 'projen';
import { GithubCredentials } from 'projen/lib/github';
import { UpgradeDependenciesSchedule } from 'projen/lib/javascript';

const repoUrl = 'https://github.com/siddharth.tiwari/projen.git';
const project = new cdk.JsiiProject({
  author: 'Siddharth Tiwari',
  authorAddress: 'opencloudengineer@gmail.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.2',
  name: '@opencloudengineer/py-project',
  projenrcTs: true,
  repositoryUrl: repoUrl,
  repository: repoUrl,
  npmRegistryUrl: 'https://npm.pkg.github.com',
  releaseToNpm: true,
  peerDeps: ['projen', 'constructs'],
  jest: false,

  depsUpgradeOptions: {
    workflowOptions: {
      projenCredentials:
        GithubCredentials.fromPersonalAccessToken({ secret: 'GITHUB_TOKEN' }),
      schedule: UpgradeDependenciesSchedule.WEEKLY,
    },
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  // Get input values
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  // Upload files
  const s3uri = `s3:://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3uri} --region ${bucketRegion}`);

  core.notice('Print stuff!!!');
}

run();

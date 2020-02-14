import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

const { spawn } = require('child_process');

describe('Getting Started with Jest and Taiko', () => {
  let yarn_pid;

  beforeAll(async () => {
    yarn_pid = await new Promise((resolve, reject) => {
      const yarn = spawn('yarn', ['start']);

      // yarn.stderr.on('data', line => {
      //   rackup_stdout += line.toString();

      //   if (line.indexOf('port=9292') !== -1 && !rackup_rejected && !rackup_resolved) {
      //     rackup_resolved = true;
      //     resolve(rackup.pid);
      //   }

      //   if (line.indexOf('*** [run] Error') !== -1 && !rackup_rejected && !rackup_resolved) {
      //     rackup_rejected = true;
      //     reject(rackup_stdout);
      //   }
      // });
      // sleep(3000);
      resolve(yarn.pid);
    });

    // await openBrowser({
    //   args: [
    //     '--disable-gpu',
    //     '--disable-dev-shm-usage',
    //     '--disable-setuid-sandbox',
    //     '--no-first-run',
    //     '--no-sandbox',
    //     '--no-zygote'
    //   ]
    // });
  });

  afterAll(async () => {
    console.log('-------------------');
    console.log('AFTER ALLLL');

    console.log('-------------------');

    await closeBrowser();
    process.kill(yarn_pid, 'SIGTERM');
  });

  const { openBrowser, goto, click, closeBrowser } = require('taiko');
  it('finds an assessor by postcode', async () => {
    try {
      await openBrowser();
      await goto('localdev.hackney.gov.uk:3001');
      await click('Log in with Google');
    } catch (error) {
      console.error(error);
    } finally {
      await closeBrowser();
    }
  }, 30000);
});

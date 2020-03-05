// const jetpack = require('fs-jetpack');
const app = window.require('electron').remote.app;

var app2 = window.require('electron').remote;
const fs = app2.require('fs').promises;

const saveAccs = async newAccounts => {
  const currDir = app.getAppPath();
  const accounts = await fs
    .readFile(`${currDir}/../../generatedAccounts.txt`, 'utf-8')
    .catch(() => undefined);
  if (!accounts) {
    await fs.writeFile(
      `${currDir}/../../generatedAccounts.txt`,
      newAccounts,
      'utf-8'
    );
    return;
  }
  await fs.writeFile(
    `${currDir}/../../generatedAccounts.txt`,
    `${accounts}\n${newAccounts}`,
    'utf-8'
  );
};

export default saveAccs;

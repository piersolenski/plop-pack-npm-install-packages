const npm = require('npm');

const npmInstallPackages = (_, { install }) => {
  const modules = typeof install === 'string' ? [install] : install;

  return new Promise((resolve, reject) => {
    npm.load((loadError) => {
      if (loadError) throw new Error(loadError);
      npm.commands.install(modules, (installationError) => {
        if (installationError) return reject(installationError);
        return resolve(`${modules.join(', ')} successfully installed.`);
      });
      npm.on('log', () => null);
    });
  });
};

module.exports = (plop) => {
  plop.setDefaultInclude({ actionTypes: true });
  plop.setActionType('npmInstallPackages', npmInstallPackages);
};

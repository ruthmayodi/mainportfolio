module.exports = {
  onPreBuild: async ({ utils: { run } }) => {
    await run.command(
        "node-sass -w scss/ -o dist/css --recursive"
    );
  },
};
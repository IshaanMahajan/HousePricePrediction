// netlify_functions/flask_function.js
const { spawnSync } = require('child_process');

exports.handler = async function (event, context) {
  const result = spawnSync('python', ['app.py'], { encoding: 'utf-8' });

  return {
    statusCode: 200,
    body: result.stdout,
  };
};

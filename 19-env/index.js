// const ps = process.env;
// console.log(ps);
// {
//     PWD: '/Users/user/Documents/sesac-ydp-5/19-env',
//     USER: 'user',
//     MallocNanoZone: '0',
//     COMMAND_MODE: 'unix2003',
//     __CFBundleIdentifier: 'com.microsoft.VSCode',
//     LANG: 'ko_KR.UTF-8',
//     LOGNAME: 'user',
//     TERM: 'xterm-256color',
//     PATH: '/usr/local/opt/mongodb-community@5.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/opt/mongodb-community@5.0/bin',
//     SHLVL: '3',
//     TERM_PROGRAM_VERSION: '1.81.1',
//     SSH_AUTH_SOCK: '/private/tmp/com.apple.launchd.6r7oeEowkO/Listeners',
//     TERM_SESSION_ID: '3C2E39A1-8C8B-4654-B6E7-07F0C371DB81',
//     HOME: '/Users/user',
//     SHELL: '/bin/zsh',
//     __CF_USER_TEXT_ENCODING: '0x1F5:0x3:0x33',
//     TMPDIR: '/var/folders/6y/8zmlr4917772pj08kjp69f1m0000gn/T/',
//     TERM_PROGRAM: 'vscode',
//     XPC_SERVICE_NAME: '0',
//     XPC_FLAGS: '0x0',
//     ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
//     COLORTERM: 'truecolor',
//     GIT_ASKPASS: '/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh',
//     VSCODE_GIT_ASKPASS_NODE: '/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)',
//     VSCODE_GIT_ASKPASS_EXTRA_ARGS: '--ms-enable-electron-run-as-node',
//     VSCODE_GIT_ASKPASS_MAIN: '/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js',
//     VSCODE_GIT_IPC_HANDLE: '/var/folders/6y/8zmlr4917772pj08kjp69f1m0000gn/T/vscode-git-86ad5f4bb9.sock',
//     VSCODE_INJECTION: '1',
//     ZDOTDIR: '/Users/user',
//     USER_ZDOTDIR: '/Users/user',
//     OLDPWD: '/Users/user/Documents/sesac-ydp-5',
//     _: '/usr/local/bin/node'
//   }

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  console.log(process.env.NAME);
  console.log(process.env.NODE);
  res.send('Hello, world! ');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

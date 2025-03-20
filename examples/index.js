/* eslint-disable */
// @ts-nocheck
import {batchCreateWindows, getAllWindows} from './demo/window.js';
import {openProfile} from './demo/profiles.js';
import readline from 'readline';

async function main() {
  try {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const max = await new Promise(resolve => {
      rl.question('How many windows do you want to create? ', (answer) => {
        rl.close();
        resolve(answer);
      });
    });
    console.log(max);

    console.log('开始创建窗口...');
    const createdWindows = await batchCreateWindows(max);
    console.log('创建的窗口:', createdWindows);

    // Uncomment the following code when needed
    // console.log('打开指定 id 的窗口');
    // const openResult = await openProfile(247);
    // console.log('打开结果:', openResult);

    // const windows = await getAllWindows();

    // const openedWindows = windows?.filter(f => f.status > 1);
    // console.log('已打开的窗口:', openedWindows);

    // const connectInfo = await fetch(`http://localhost:${openedWindows[0].port}/json/version`);

    // console.log(await connectInfo.json());
  } catch (error) {
    console.error('执行过程中出现错误:', error);
  }
}

main();

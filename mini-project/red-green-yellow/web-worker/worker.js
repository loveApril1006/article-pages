/*
 * @Author: zhouxiongking zhouxiongking@163.com
 * @Date: 2025-02-13 20:46:28
 * @LastEditors: zhouxiongking zhouxiongking@163.com
 * @LastEditTime: 2025-02-13 20:46:34
 * @FilePath: /article-pages/mini-project/red-green-yellow/worker.js
 * @Description: 
 */
function sendLightState(light, duration) {
  return new Promise(resolve => {
    setTimeout(() => {
      postMessage(light);
      resolve();
    }, duration);
  });
}

async function trafficLights() {
  while (true) {
    await sendLightState('red', 5000);
    await sendLightState('green', 3000);
    await sendLightState('yellow', 2000);
  }
}

trafficLights();
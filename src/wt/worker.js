const {
  parentPort, workerData,
} = require('node:worker_threads');

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
const sendResult = () => {

 
  const resultFibonacci = nthFibonacci(workerData);
  parentPort.postMessage(resultFibonacci);
};

sendResult();
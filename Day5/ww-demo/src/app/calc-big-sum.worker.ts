/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  let sum = 0;
  for(let i=0; i < 1000000000000; i++){
    sum = sum+(i*i*i*i)
  }
  postMessage(sum);
});

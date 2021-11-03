const testName: string = 'jim';

function getTestName(n: string): string {
  return 'getTestName: ' + n;
}

console.log('name', testName);
console.log('getTestName', getTestName('lucy'));
console.log('Promise', Promise);
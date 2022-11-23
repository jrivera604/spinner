const spin = '|/-\\|/-\\|';
let delay = 0;

for (const i of spin){
  setTimeout(() => {
   process.stdout.write(`\r${i}   `);
  }, delay += 200)
}

setTimeout(() => process.stdout.write('\n', delay += 300))
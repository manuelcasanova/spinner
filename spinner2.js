// let spinner = "\r| \r/ \r- \r\\ \r| \r/ \r- \r\\"
let spinner = "\r|\r/\r-\r\\\r|\r/\r-\r\\\r|"
let delay = 0
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinner[i])
  }, delay)
  delay += 50
}

setTimeout(() => {
  process.stdout.write("\n");
}, delay);


//let spinner = "| / - \\ | / - \\"

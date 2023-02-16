    function createIncrement() {
        let count = 0;
        function increment() {
            count++;
        }
        let message = `Count is${count}`;
        function log() {
            console.log(message);
        }
        return [increment, log];
        }
        const [increment, log] = createIncrement();
        increment();
        increment();
        increment();
        log();

<br>

The output of the above code will be: \
`Count is 0`

At first glance, we can see that since the increment function is called 3 times, the `count` variable should also increase 3 times and it's value should become `3`, which it does.

However, the `log` method just prints the contents of the `message` variable, which had already been set with `count = 0` when `createIncrement` method was called. That is why the `Count is 0` is printed.

Had the log function used
`console.log('Count is ${count}')`
instead, the updated count would have been printed.

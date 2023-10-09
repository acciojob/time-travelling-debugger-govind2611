function addToCallStack(functionName) {
            const callStackElement = document.getElementById('call-stack');
            const div = document.createElement('div');
            div.textContent = `Called: ${functionName}`;
            callStackElement.appendChild(div);
        }

        function removeFromCallStack() {
            const callStackElement = document.getElementById('call-stack');
            if (callStackElement.lastChild) {
                callStackElement.removeChild(callStackElement.lastChild);
            }
        }

        function foo() {
            addToCallStack('foo');
            bar();
            removeFromCallStack();
        }

        function bar() {
            addToCallStack('bar');
            baz();
            removeFromCallStack();
        }

        function baz() {
            addToCallStack('baz');
            // Simulate some work
            for (let i = 0; i < 1000000; i++) {
                // Do nothing
            }
            removeFromCallStack();
        }

        function simulateCallStack() {
            addToCallStack('simulateCallStack');
            foo();
            removeFromCallStack();
        }
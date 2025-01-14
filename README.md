# React useEffect Hook Missing Dependency

This repository demonstrates a common error in React applications: forgetting to include necessary variables in the dependency array of the `useEffect` hook.  This can lead to unexpected re-renders and potentially infinite loops.

## Bug
The `bug.js` file contains a `MyComponent` that uses the `useEffect` hook to log the current count.  However, it omits `count` from the dependency array. This means the effect runs after every render, regardless of whether the `count` has changed.

## Solution
The `bugSolution.js` file corrects the issue by including `count` in the dependency array. Now, the effect only runs when the value of `count` changes.

## How to Reproduce
1. Clone the repository.
2. Navigate to the directory.
3. Run `npm install`.
4. Run `npm start`.
5. Observe the console output in the browser.  The `bug.js` version will show an infinite loop, while `bugSolution.js` will only log on count change.
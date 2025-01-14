```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run only when count changes
    console.log('Component rendered with count:', count);
    // ... perform some action based on the count
  }, [count]); // count is added as dependency

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
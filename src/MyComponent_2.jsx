import {useState, useEffect} from 'react';

function MyComponent () {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, seHeight] = useState(window.innerHeight);

  useEffect (() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    }
  }, []);

  useEffect(() => {
    document.title = `size: ${width} x ${height}`
  }, [width, height]);

  function handleResize () {
    setWidth(window.innerWidth);
    seHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}

export default MyComponent;
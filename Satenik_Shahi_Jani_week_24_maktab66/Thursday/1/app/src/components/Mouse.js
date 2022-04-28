import React, { useCallback, useState } from "react";

function debounceFunc(cb, delay) {
  let timeOut;
  return (...args) => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function throttleFunc(cb, delay) {
  let shouldWait = false;
  let lastArgs;
  return (...args) => {
    if (shouldWait) {
      lastArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
      if (lastArgs) {
        cb(...lastArgs);
      }
    }, delay);
  };
}

export default function Mouse() {
  const [defaultMouse, setDefaultMouse] = useState(0);
  const [debounce, setDebounce] = useState(0);
  const [throttle, setThrottle] = useState(0);

  const countBasedOnDefault = useCallback(() => {
    setDefaultMouse((prevState) => prevState + 1);
  }, []);
  const countBasedOnDebounce = useCallback(
    debounceFunc(() => setDebounce((prevState) => prevState + 1), 1000),
    []
  );

  const countBasedOnThrottle = useCallback(
    throttleFunc(() => setThrottle((prevState) => prevState + 1), 2000),
    []
  );

  // const handleMouseMoveTHREEFUNC = (e) => {
  //   countBasedOnDefault();
  //   countBasedOnDebounce();
  //   countBasedOnThrottle();
  // };

  document.addEventListener("mousemove", () => {
    countBasedOnDefault();
    countBasedOnDebounce();
    countBasedOnThrottle();
  });

  return (
    <>
      <div
        style={{ background: "red" }}
        className="mouseArea"
        // onMouseMove={(e) => handleMouseMoveTHREEFUNC(e)}
      >
        {defaultMouse}
        <br />
        {debounce}
        <br />
        {throttle}
      </div>
    </>
  );
}

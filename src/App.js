import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { paintFromControlFlow } from './actions/PaintActions';
import ClearStore from './Components/ClearStore';
import PaintSteps from './Components/PaintSteps';

const Child = () => {
  console.log('Child: render start');

  const [count, setCount] = useState(() => {
    console.log('Child: useState(() => 0)');
    return 0;
  });

  useEffect(() => {
    console.log('Child: useEffect(() => {})');
    return () => {
      console.log('Child: useEffect(() => {}) cleanup');
    };
  });

  useEffect(() => {
    console.log('Child: useEffect(() => {}, [])');
    return () => {
      console.log('Child: useEffect(() => {}, []) cleanup');
    };
  }, []);

  useEffect(() => {
    console.log('Child: useEffect(() => {}, [count])');
    return () => {
      console.log('Child: useEffect(() => {}, [count]) cleanup');
    };
  }, [count]);

  const element = (
    <button onClick={() => setCount(previousCount => previousCount + 1)}>
      {count}
    </button>
  );

  console.log('Child: render end');

  return element;
};

const App = () => {
  const dispatch = useDispatch();
  console.log('App: render start');
  dispatch(paintFromControlFlow('App: render start'));
  const [showChild, setShowChild] = useState(() => {
    console.log('App: useState(() => false)');
    dispatch(paintFromControlFlow('App: useState(() => false)'));
    return false;
  });

  useEffect(() => {
    console.log('App: useEffect(() => {})');
    dispatch(paintFromControlFlow('App: useEffect(() => {})'));
    return () => {
      console.log('App: useEffect(() => {}) cleanup');
      dispatch(paintFromControlFlow('App: useEffect(() => {}) cleanup'));
    };
  });

  useEffect(() => {
    console.log('App: useEffect(() => {}, [])');
    dispatch(paintFromControlFlow('App: useEffect(() => {}, [])'));
    return () => {
      console.log('App: useEffect(() => {}, []) cleanup');
      dispatch(paintFromControlFlow('App: useEffect(() => {}, []) cleanup'));
    };
  }, []);

  useEffect(() => {
    console.log('App: useEffect(() => {}, [showChild])');
    dispatch(paintFromControlFlow('App: useEffect(() => {}, [showChild])'));
    return () => {
      console.log('App: useEffect(() => {}, [showChild]) cleanup');
      dispatch(
        paintFromControlFlow('App: useEffect(() => {}, [showChild]) cleanup')
      );
    };
  }, [showChild]);

  const element = (
    <>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={e => setShowChild(e.target.checked)}
        />
        show child
      </label>
      <div
        style={{
          padding: 10,
          margin: 10,
          height: 50,
          width: 50,
          border: 'solid'
        }}
      >
        {showChild ? <Child /> : null}
      </div>
      <ClearStore />
    </>
  );

  console.log('App: render end');
  dispatch(paintFromControlFlow('App: render end'));
  return element;
};

export default App;

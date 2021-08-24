import React from 'react';
import { useSelector } from 'react-redux';

const PaintSteps = () => {
  const paintItemsOnInitialLoad = useSelector(
    state => state.paintReducer.paintItemsOnInitialLoad
  );
  return (
    <>
      {paintItemsOnInitialLoad.length > 0 &&
        paintItemsOnInitialLoad.map((item, idx) => {
          return (
            <div key={idx}>
              <p>
                {idx + 1} : {item}
              </p>
              --------------------------------------------------------
            </div>
          );
        })}
    </>
  );
};

export default PaintSteps;

import React from 'react';
import { useDispatch } from 'react-redux';
import { clearPaintArray } from '../actions/PaintActions';

const ClearStore = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={e => {
        e.stopPropagation();
        dispatch(clearPaintArray([]));
      }}
    >
      Clear Redux Store
    </button>
  );
};

export default ClearStore;

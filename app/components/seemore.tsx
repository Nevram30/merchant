import React from "react";

type Props = {
  loadmore: () => void
};

const seemore: React.FC<Props> = ({loadmore}) => {
  return (
    <div className="box justify-center text-center space-x-2 py-10 mb-10">
      <button className="btn btn-active" onClick={loadmore}>
        See more
      </button>
    </div>
  );
};

export default seemore;

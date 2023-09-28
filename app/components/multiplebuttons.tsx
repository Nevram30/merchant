import React from "react";

type Props = {};

const multiplebuttons = (props: Props) => {
  return (
    <div className="box justify-center text-center space-x-2 my-24">
      <button className="btn btn-active">Default</button>
      <button className="btn btn-active btn-neutral">Neutral</button>
      <button className="btn btn-active btn-primary">Primary</button>
      <button className="btn btn-active btn-secondary">Secondary</button>
      <button className="btn btn-active btn-accent">Accent</button>
      <button className="btn btn-active btn-ghost">Ghost</button>
    </div>
  );
};

export default multiplebuttons;

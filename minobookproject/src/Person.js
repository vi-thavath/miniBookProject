import React from "react";
import ReactDOM from "react-dom";

function People() {
  const btn = "search button";
  const name = "john";
  const lastName = "doe";
  return (
    <section className="person">
      {/* MUST BE AN EXPRESSION */}
      <Person name="john" job="developer" />
      <Person name="Jason" job="designer" />
      <Person name="Jame" job="dean" />
      <Person name="John" job="engineer" />
    </section>
  );
}
const Person = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
    </div>
  );
};

export default People;

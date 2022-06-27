import React from "react";
import ReactDOM from "react-dom";

function People() {
  const friends = [
    { name: "John", job: "developer", age: "24", company: "apple" },
    { name: "Jane", job: "designer", age: "23", company: "meta" },
    { name: "Jason", job: "Engineer", age: "25", company: "alphabet" },
  ];
  return (
    <section className="person">
      {/* MUST BE AN EXPRESSION */}
      <Person person={friends[0]}>
        <p>some info about me</p>
      </Person>
      <Person person={friends[1]}></Person>
      <Person person={friends[2]}></Person>
    </section>
  );
}
const Person = (props) => {
  // console.log(props);
  const { name, job, age, company } = props.person;
  const { children } = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      {children}
    </div>
  );
};

export default People;

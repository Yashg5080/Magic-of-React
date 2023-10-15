import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
    "h1",
     {
        id: "main-heading",
     }, 
     "My First React Code"
);

// This object is exactly same as above heading object - 
// jsx is just HTML like syntax for creating React elements
// This is not a valid javascript code, so it needs to be transpiled to valid javascript code using babel
const jsxHeading = <h1 id="main-heading">React Element</h1>;

const HeadingComponent = () => {
    return (
        <div id="container">
            {jsxHeading}
            <h1 id="main-heading">My First React Code</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// This is to render react component
root.render(<HeadingComponent />);
// This is to render react element 
// root.render(heading);


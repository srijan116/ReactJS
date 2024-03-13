// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const container = React.createElement(
    "div", 
    {id:"container"},
    [React.createElement(
        "div",
        {id:"boxes1"},
        [React.createElement("div", {class:"box"}, ""), React.createElement("div", {class:"box"}, ""), React.createElement("div", {class:"box"}, "")]
    ), React.createElement(
        "div",
        {id:"boxes2"},
        [React.createElement("div", {class:"box"}, ""), React.createElement("div", {class:"box"}, ""), React.createElement("div", {class:"box"}, "")]
    )]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
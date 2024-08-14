/**
 * React.createElement -> creates h1 element
 * React element is a normal javascript object
 */
const heading = React.createElement(
    "h1", //type
    { id: "heading", xyz: "something" }, // attributes
    "Hello world from React!" // children
);

console.log(heading); // prints an object

/**
 * Create a root for our react library, all the react code runs here
 * Everything we want to render, we will render inside this root
 * and we get the root from line 9 <div id="root">
 */
const root = ReactDOM.createRoot(document.getElementById("root"));


// *******************************************************************************
// NESTED ELEMENTS
// *******************************************************************************
/** 
 * <div id = "parent">
 *      <div id = "child">
 *          <h1>"I'm H1 tag"</h1>
 *          <h2>"I'm H2 tag"</h2>
 *      </div>
 * </div>
 * 
 */

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        //if there are two children, 3rd argument should be an array
        [
            React.createElement("h1", { id: "grand-child-1" }, "I'm H1 tag"),
            React.createElement("h2", { id: "grand-child-2" }, "I'm H2 tag")
        ]
    )
);

// *******************************************************************************


/**
 * render method's job is basically to take the "heading"(react element) object, 
 * creates the h1 tag that browser understands and appends it to the root
 * ReactElement(Object) => HTML (Browser understands)
 */
root.render(parent);
import ReactDOM from "react-dom";
import Welcome from "./components/Welcome";
// import Logo from "./components/Logo";
import App from "./components/App";


fetch("/user/id.json").then(resp => resp.json()).then(data => {
    !data.userId
        ? ReactDOM.render(<Welcome />, document.querySelector("main"))
        : ReactDOM.render(<App />, document.querySelector("main"));
});

// function HelloWorld(props) {
//     //return React.creatElement('div', /* ... */)
//     console.log(props);
//     return (
//         <div className="funky">
//             Hello, {props.greetee}?!
//             {props.greetee == 'kitty' &&
//                 <Greetee name={props.greetee}/>}
//         </div>
//     );
// }

// function Greetee(props) {
//     // const styl = {
//     //     color: 'tomato',
//     //     textDecoration: 'underline'
//     // };
//     return <p><strong style={{
//         color: 'tomato',
//         textDecoration: 'underline'
//     }}>
//         The greetee is {props.name}{props.name != 'kitty' ? '!' : '?'}
//     </strong></p>
// }
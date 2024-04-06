/\*
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
function Header() {
return (

<header>
<div className="title-container">
<div className=" line-1 line-before"></div>
<h1 className="text title">fast react pizza co. </h1>
<div className="line-1 line-after"></div>
</div>
<div className="our-menu">
<div className="line-2 line-above"></div>
<h2 className="text">our menu</h2>
<div className="line-2 line-below"></div>
</div>
<div>
<p className="rest-disc">
Authentic Italian cuisine. 6 creative dishes to choose from. All from
our stone oven, all organic, all delicious.
</p>
</div>
</header>
);
}

function MenuItems() {
return pizzaData.map((pizza) => {
const { imageSrc, title, desc, ammount, id } = pizza;
return (

<div className="pizza-container" key={id}>
<div className="pizza-image-container">
<img src={imageSrc} alt="piiza 1" className="pizza-image" />
</div>
<div className="pizza-details">
<h3 className="pizza-title">{title}</h3>
<p className="pizza-desc">{desc}</p>
<h4 className="pizza-ammount">{ammount}</h4>
</div>
</div>
);
});
}

function Menu() {
return (

<section className="menu">
<MenuItems />
</section>
);
}

function App() {
return (
<>

<Header />
<Menu />
</>
);
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
\*/
<!-- //////////////////////////// -->
const arr = ["learn react", "get job", "invest your money"];

function App2() {
return (
<div className="container">
<div className="navigation-container">
<Navigations />
</div>
<Message message={arr} />
<Buttons />
</div>
);
}

function Navigations() {
return arr.map((\_, index) => {
return <div className="each-navigator">{index + 1}</div>;
});
}

function Message(props) {
const [step, func] = useState(1);
const [mss1, mss2, mss3] = props.message;
return <p className="message">{mss1}</p>;
}

function Buttons() {
return (
<div className="buttons-containr">
<button>Previous</button>
<button>Next</button>
</div>
);
}

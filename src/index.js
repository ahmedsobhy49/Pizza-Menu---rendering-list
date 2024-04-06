import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const pizzaData = [
  {
    imageSrc:
      "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.1.300270830.1706148946&semt=sph",
    title: "Focaccia",
    desc: "Breed with italian olive oil and rosmary",
    price: 6,
    id: 1,
    soldOut: false,
  },
  {
    imageSrc:
      "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?size=626&ext=jpg&ga=GA1.1.300270830.1706148946&semt=sph",
    title: "Pizza Spinaci",
    desc: "Breed with italian olive oil and rosmary",
    price: 12,
    id: 2,
    soldOut: false,
  },
  {
    imageSrc:
      "https://img.freepik.com/premium-photo/pizza-with-salami-olives-tomatoes-white-background_890887-12840.jpg?size=626&ext=jpg&ga=GA1.1.300270830.1706148946&semt=sph",
    title: "Pizza Salamino",
    desc: "Breed with italian olive oil and rosmary",
    price: 20,
    id: 3,
    soldOut: true,
  },
  {
    imageSrc:
      "https://img.freepik.com/free-photo/crispy-mixed-pizza-with-olives-sausage_140725-3095.jpg?size=626&ext=jpg&ga=GA1.1.300270830.1706148946&semt=sph",
    title: "Pizza Margherita",
    desc: "Breed with italian olive oil and rosmary",
    price: 10,
    id: 4,
    soldOut: false,
  },
  {
    imageSrc:
      "https://img.freepik.com/free-photo/top-view-mixed-pizza-with-tomato-black-olive-melted-cheese_140725-10787.jpg?size=626&ext=jpg&ga=GA1.1.300270830.1706148946&semt=sph",
    title: "Pizza Funghi",
    desc: "Breed with italian olive oil and rosmary",
    price: 12,
    id: 5,
    soldOut: false,
  },
  {
    imageSrc:
      "https://img.freepik.com/free-photo/side-view-pizza-with-chopped-pepper-board-cookware_176474-3183.jpg?size=626&ext=jpg&ga=GA1.1.300270830.1706148946&semt=sph",
    title: "Pizza Prosciutto",
    desc: "Breed with italian olive oil and rosmary",
    price: 18,
    id: 6,
    soldOut: false,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

function App() {
  return (
    <div>
      <div
        style={{
          marginBottom: "40rem",
        }}
      >
        <Header />
        <ul className="menu">
          <Menu />
        </ul>
        <Footer />
      </div>
    </div>
  );
}

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
        {pizzaData.length > 0 ? (
          <p className="rest-disc">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
        ) : (
          <p className="rest-disc">
            we are still working in our menu stay tuned
          </p>
        )}
      </div>
    </header>
  );
}

function Menu() {
  return pizzaData.map((pizza) => {
    return <Pizza pizza={pizza} key={pizza.id} />;
  });
}

function Pizza(props) {
  const { title, imageSrc, desc, price, soldOut } = props.pizza;
  return (
    <li className={`pizza-container ${soldOut ? "sold-out" : ""}`}>
      <div className="pizza-image-container">
        <img src={imageSrc} alt="piiza 1" className="pizza-image" />
      </div>
      <div className="pizza-details">
        <h3 className="pizza-title">{title}</h3>
        <p className="pizza-desc">{desc}</p>
        <h4 className="pizza-ammount">{soldOut ? "SOLD OUT" : price}</h4>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openAt = 12;
  const closeAt = 22;
  const isOpen = `we are ${
    hour > openAt && hour < closeAt ? `open untill ${closeAt}:00 PM` : "closed"
  }`;
  return (
    <footer className="footer ">
      <h2>{isOpen}</h2>
      {hour > openAt && hour < closeAt ? <Order /> : null}
    </footer>
  );
}

function Order() {
  return (
    <div className="order">
      <button className="order-btn">Order Now</button>
    </div>
  );
}

///////////////

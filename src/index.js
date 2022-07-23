import React from "react";
import ReactDOM from "react-dom";

const randomImg = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <img src={randomImg} alt="Random" />
    <div>
      <img
        className="food-img"
        src="https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-1-683x1024.jpg"
        alt="Paneer Tikka"
      />
      <img
        className="food-img"
        src="https://thumbs.dreamstime.com/z/plate-slice-chocolate-sponge-berry-cake-white-background-plate-slice-chocolate-sponge-berry-cake-124438250.jpg"
        alt="Choco Cake"
      />
      <img
        className="food-img"
        src="https://www.whiskaffair.com/wp-content/uploads/2020/03/Hakka-Noodles-2-1.jpg"
        alt="Noodles"
      />
    </div>
  </div>,
  document.getElementById("root")
);

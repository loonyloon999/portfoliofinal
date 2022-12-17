import React from "react";
import MyDropdown from "./MyDropdown.js";

const StickyHeader = ({ designerName }) => {
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   { label: "Apple", value: "apple" },
  //   { label: "Banana", value: "banana" },
  // ]);

  return (
    // <View style={{ flexDirection: "row" }}>
    <div
      className={"sticky-header"}
      // style={{
      //   display: "flex",
      //   flexDirection: "row",
      //   flexWrap: "wrap",
      //   position: "sticky",
      //   border: "1px dashed red",
      // }}
    >
      {/* className="sticky-header-container" */}
      <a href="/portfoliofinal">
        <p style={{ color: "green", position: "fixed", left: 140 }}>
          {designerName}
        </p>
      </a>

      <div>
        <MyDropdown
          project1={"Development"}
          project2={"Iterative Design"}
          project3={"Responsive Redesign"}
          project4={"Food Finding Application"}
        ></MyDropdown>
      </div>
      {/* <img src={} alt="logo" className="" />
      <button onClick={onPress} className="">
        {}
      </button> */}
    </div>

    // <FontAwesome name="sliders" style={styles.iconStyle} />
  );
};

export default StickyHeader;

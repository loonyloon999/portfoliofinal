import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectBox = ({
  backgroundC,
  title,
  type,
  description,
  image,
  isLaptop,
  page,
}) => {
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   { label: "Apple", value: "apple" },
  //   { label: "Banana", value: "banana" },
  // ]);
  const navigate = useNavigate();

  return (
    // <View style={{ flexDirection: "row" }}>
    <div className="project-box">
      <button
        onClick={() => navigate(page)}
        style={{
          width: "520px",
          marginRight: 50,
          marginLeft: 50,
          backgroundColor: "white",
        }}
      >
        <div style={{ backgroundColor: backgroundC }}>
          <img
            src={image}
            alt="logo"
            className="project-image"
            style={
              isLaptop
                ? { width: "500px", height: "413px" }
                : { width: "260px", height: "413px" }
            }
          />
        </div>
        <div className="project-box-text">
          <h1 style={{ fontWeight: "600", fontSize: "30px" }}>{title}</h1>
          <p style={{ fontWeight: "500", fontSize: "20px" }}>{type}</p>
          <p style={{ fontWeight: "200", fontSize: "15px" }}>{description}</p>
        </div>
      </button>
    </div>
    // <FontAwesome name="sliders" style={styles.iconStyle} />
  );
};

export default ProjectBox;

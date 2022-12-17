//From Bootstrap

import Dropdown from "react-bootstrap/Dropdown";

const MyDropdown = ({ project1, project2, project3, project4 }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        style={{ fontSize: 16, position: "fixed", right: 140 }}
        size="md"
      >
        Pro Bono Projects
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/portfoliofinal/development">
          {project1}
        </Dropdown.Item>
        <Dropdown.Item href="/portfoliofinal/iterativedesign">
          {project2}
        </Dropdown.Item>
        <Dropdown.Item href="/portfoliofinal/responsiveredesign">
          {project3}
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/portfoliofinal/food">{project4}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MyDropdown;

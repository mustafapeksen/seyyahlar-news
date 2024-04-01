import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

/**
 * Paging component renders navigation buttons for pagination.
 * @param {object} props - Props containing paging information and functions.
 * @param {function} props.minus - Function to decrease page number.
 * @param {number} props.number - Current page number.
 * @param {function} props.plus - Function to increase page number.
 * @returns {JSX.Element} - Rendered pagination buttons.
 */
function Paging(props) {
  // Render pagination buttons
  return (
    <div className="paging">
      <ArrowLeftIcon onClick={props.minus} />
      <p id="page-number">{props.number}</p>
      <ArrowRightIcon onClick={props.plus} />
    </div>
  );
}

export default Paging;

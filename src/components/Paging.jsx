import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function Paging(props) {
  return (
    <div className="paging">
      <ArrowLeftIcon onClick={props.minus} />
      <p id="page-number">{props.number}</p>
      <ArrowRightIcon onClick={props.plus} />
    </div>
  );
}

export default Paging;

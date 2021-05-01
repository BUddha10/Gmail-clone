import React from "react";
import "./EmailRow.css";

import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";

import { selectMail } from "./features/mailSlice";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function EmailRow({ id, title, description, subject, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({ id, title, description, subject, time }));
    history.push("/mail");
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__option">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>

      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description">-{description}</span>
        </h4>
      </div>

      <div className="emailRow__time">{time}</div>
    </div>
  );
}

export default EmailRow;

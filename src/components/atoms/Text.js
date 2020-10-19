import React from "react";

import 'text.css';

export default ({ type = "paragraph", children }) =>
  type === "paragraph" ? <p>{children}</p> : <h1 className={type}>{children}</h1>;

import React from "react";

import './styles.css';

export default ({ type = "basic", children }) => <span className={type}>{children}</span>;

import React from "react";

import './styles.scss';

export default ({ className = "", type = "basic", children }) => <span className={`text ${type} ${className}`}>{children}</span>;

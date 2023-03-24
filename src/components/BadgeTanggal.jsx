import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";

const BadgeTanggal = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const day = ("0" + currentDate.getDate()).slice(-2);

  const formattedDate = `${year}-${month}-${day}`;

  return <Badge variant="secondary">{formattedDate}</Badge>;
};

export default BadgeTanggal;
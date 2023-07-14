import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import "./widget.scss";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "clients":
      data = {
        title: "CLIENTS",
        isMoney: false,
        amount: 3270,
        diff: 20,
        trend: "positive",
        nav: "clients",
        link: "See client details",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        amount: 650,
        diff: 10,
        trend: "negative",
        nav: "orders",
        link: "View orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "projections":
      data = {
        title: "PROJECTIONS",
        isMoney: true,
        amount: "600,500,000",
        diff: 10,
        trend: "negative",
        nav: "sales",
        link: "View monthly projections",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "target":
      data = {
        title: "TARGET",
        isMoney: true,
        amount: "400,000,000",
        diff: 30,
        trend: "positive",
        nav: "reps",
        link: "See monthly target",
        icon: (
          <AdjustOutlinedIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(192, 10, 192, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "₦"}
          {data.amount}
        </span>
        <span className="link">
          <Link to={`/${data.nav}`}>{data.link}</Link>
        </span>
      </div>
      <div className="right">
        <div className={`percentage ${data.trend}`}>
          {data.trend === "positive" ? (
            <KeyboardArrowUpOutlinedIcon />
          ) : (
            <KeyboardArrowDownOutlinedIcon />
          )}
          {data.diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;

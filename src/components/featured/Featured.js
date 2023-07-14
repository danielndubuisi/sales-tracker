import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={75} text={"75%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">₦2.3M</p>
        <p className="desc">Last payments may not be included...</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <KeyboardArrowDownOutlinedIcon
                fontSize="small"
                style={{ color: "red" }}
              />
              <div className="resultAmount">₦500K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult">
              <KeyboardArrowUpOutlinedIcon
                fontSize="small"
                style={{ color: "green" }}
              />
              <div className="resultAmount">₦900K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult">
              <KeyboardArrowUpOutlinedIcon
                fontSize="small"
                style={{ color: "green" }}
              />
              <div className="resultAmount">₦300M</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

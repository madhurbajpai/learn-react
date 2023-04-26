import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      {props.head == "Home Menu" ? (
        <p className="t">{props.head}</p>
      ) : (
        <>
          <div className="ico">
            <ArrowBackIosIcon onClick={() => navigate(-1)}/>
          </div>
          <p className="t" style={{marginTop: '-40px'}}>{props.head}</p>
        </>
      )}
    </div>
  );
};

export default Header;

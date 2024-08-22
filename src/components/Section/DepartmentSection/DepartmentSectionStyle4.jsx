import { Link } from "react-router-dom";
import IconBoxStyle2 from "../../IconBox/IconBoxStyle2";
import SectionHeading from "../../SectionHeading";
import Spacing from "../../Spacing";

export default function DepartmentSectionStyle4({
  sectionTitle,
  sectionTitleUp,
  data,
}) {
  return (
    <div className="container">
      <div
        className="container"
        style={{
          height: "40px",
        }}
      ></div>
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
      <Spacing md="72" lg="50" />
      <div className="row">
        {data?.map((item, index) => (
          <div className="col-xl-4 col-md-6" key={index}>
            <IconBoxStyle2 {...item} />
          </div>
        ))}
      </div>
      <button className="cs_btn cs_style_1"> <Link to="/departments">
        <span>View More</span>
        <i>
          <img src="/images/icons/arrow_white.svg" alt="Icon" />
          <img src="/images/icons/arrow_white.svg" alt="Icon" />
        </i>
      </Link> </button>
    </div>
  );
}

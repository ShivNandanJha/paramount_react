
import parse from 'html-react-parser';
import Button from '../../Button';
import Spacing from '../../Spacing';

export default function BannerSectionStyle3({
  bgUrl,
  imgUrl,
  title,
  subTitle,
  btnText,
  btnUrl,
  videoUrl
}) {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: 'auto',
    marginBottom: "20px"
  };
  return (
    <section
      className="cs_banner cs_style_3 cs_bg_filed"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="cs_banner_img">


          <img src={imgUrl}  className="cs_main_banner_img" />

      </div>
      <div className="container">
        <div className="cs_banner_text">
          <h1 className="cs_banner_title  cs_fs_72">{parse(title)}</h1>
          <h2 className="cs_banner_subtitle cs_fs_20 mb-0 ">
            {parse(subTitle)}
          </h2>
          {btnText && (
            <>
              <Spacing md="25" lg="25" xl="25" />
              <Button btnUrl={btnUrl} btnText={btnText} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

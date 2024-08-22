import PropTypes from 'prop-types';
import parse from 'html-react-parser';

export default function TextWidget({ logoUrl, text }) {
  return (
    <div className="cs_text_widget">
      {logoUrl && <img src={logoUrl} alt="Logo" />}
      {text && <p className="cs_medium">{parse(text)}</p>}
    </div>
  );
}
TextWidget.propTypes = {
  logoUrl: PropTypes.string, // logoUrl should be a string if provided
  text: PropTypes.string, // text should be a string if provided
};
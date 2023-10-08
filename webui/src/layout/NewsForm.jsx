import PropTypes from 'prop-types';

import TextArea from '../components/Input/TextArea';
import { Button } from '../components/button';

const NewsForm = ({ value, handleChange, handleSubmit }) => {
  return (
    <form className="mb-10" onSubmit={handleSubmit}>
      <div className="mb-8">
        <TextArea autoFocus value={value} onChange={handleChange} />
      </div>
      <Button type="submit">Predict</Button>
    </form>
  );
};

NewsForm.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default NewsForm;

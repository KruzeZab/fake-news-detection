import PropTypes from 'prop-types';

const TextArea = (props) => {
  return (
    <textarea
      {...props}
      className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 duration-75 hover:border-gray-500 text-lg text-gray-500 font-semibold placeholder:text-lg placeholder:font-semibold dark:bg-slate-800 dark:text-white"
    />
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
};

TextArea.defaultProps = {
  placeholder: 'Enter text here...',
  rows: 10,
};

export default TextArea;

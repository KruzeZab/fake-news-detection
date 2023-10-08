import PropTypes from 'prop-types';

const Switch = (props) => {
  const { onChange, label, checked, ...rest } = props;

  return (
    <>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          {...rest}
          checked={checked}
          type="checkbox"
          onChange={onChange}
          name="theme-toggle"
          id="theme-toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:border-[#60a5fa]"
        />
        <label
          htmlFor="theme-toggle"
          className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer ${
            !checked && 'bg-[#60a5fa]'
          }`}
        />
      </div>
      <label
        htmlFor="theme-toggle"
        className="text-sm text-gray-700 hidden sm:inline cursor-pointer font-semibold bg-transparent transition-colors duration-300 dark:text-white"
      >
        {label}
      </label>
    </>
  );
};

Switch.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  checked: PropTypes.bool,
};

export default Switch;

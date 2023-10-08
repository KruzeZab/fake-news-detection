import PropTypes from 'prop-types';

const Button = (props) => {
  const { onClick, children, color, size, ...rest } = props;

  const colorClasses = {
    primary: 'bg-primary-700 hover:bg-primary-800 text-white',
    green: 'bg-green-500 hover:bg-green-600 text-white',
    red: 'bg-red-600 hover:bg-red-700 text-white',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-6 py-3 text-md',
    lg: 'px-10 py-3 text-lg',
  };

  return (
    <button
      {...rest}
      onClick={onClick}
      className={`rounded-full font-bold transition duration-150 ${colorClasses[color]} ${sizeClasses[size]}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  color: 'primary',
  size: 'md',
};

export default Button;

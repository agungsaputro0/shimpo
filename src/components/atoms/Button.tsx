interface ButtonProps {
  message: string;
  variant?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean; // Add this line
}

const Button: React.FC<ButtonProps> = ({
  message,
  variant = "bg-black",
  onClick = () => {},
  type = "button",
  disabled = false, // Default value
}) => {
  return (
    <button
      onClick={onClick}
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white sm:h-12 sm:px-8`}
      type={type}
      disabled={disabled} // Add disabled attribute to the button
    >
      {message}
    </button>
  );
};

export default Button;

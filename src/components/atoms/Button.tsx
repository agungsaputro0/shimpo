interface ButtonProps {
    message: string;
    variant?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
  }
  
  const Button: React.FC<ButtonProps> = ({
    message,
    variant = "bg-black",
    onClick = () => {},
    type = "button",
  }) => {
    return (
      <button
        onClick={onClick}
        className={`h-10 px-6 font-semibold rounded-md ${variant} text-white sm:h-12 sm:px-8`} // More padding on larger screens
        type={type}
      >
        {message}
      </button>
    );
  };
  
  export default Button;
  
import { button } from "../types/type";

const Button = ({className, children}:button ) => {
    return ( 
        <button className={`px-10 py-1 ${className} font-poppins font-semibold text-lg duration-1000 hover:neons rounded-lg  text-white `}>
              {children}
            </button>
     );
}
 
export default Button;
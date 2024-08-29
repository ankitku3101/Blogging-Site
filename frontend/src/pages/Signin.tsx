import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const Signin = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative flex flex-col justify-center items-center">
                    <Auth type="signin" />
                    <div className="absolute bottom-0 text-center text-black p-4">
                        For demo access, email-id: tester123@gmail.com and pass: tester123  
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Quote />
                </div>
            </div>
        </div>
    );
};

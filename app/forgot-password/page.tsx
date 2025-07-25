import Auth from "@/components/Auth";
import ForgotPassswordComp from "@/components/forgot-password/ForgotPasswordComp";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <Auth containerClassName=" w-[35%] max-2xl:w-[45%] max-xlg:w-[55%] max-md:w-[65%] max-smd:w-[80%] max-sm:w-[90%] ">
      <p className="text-[2.5rem] font-semibold text-secondary-1 text-center mb-[3rem]">
        Forgot Password
      </p>
      <ForgotPassswordComp />
      <div className=" mt-[2rem]  flex items-center justify-center">
        <p className="mr-[.75rem] ">Remember login details? </p>
        <Link href={"/login"} className="text-secondary-1">
          Login
        </Link>
      </div>
    </Auth>
  );
}

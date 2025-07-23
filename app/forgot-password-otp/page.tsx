import Auth from "@/components/Auth";
import ForgotPasswordOtpComp from "@/components/forgot-password-otp/ForgotPasswordOtpComp";

export default function ForgotPasswordOtp() {
  return (
    <Auth containerClassName=" w-[35%] max-2xl:w-[45%] max-xlg:w-[55%] max-md:w-[65%] max-smd:w-[80%] max-sm:w-[90%] ">
      <ForgotPasswordOtpComp />
    </Auth>
  );
}

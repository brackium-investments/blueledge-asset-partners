import Auth from "@/components/Auth";
import ForgotPasswordOtpComp from "@/components/forgot-password-otp/ForgotPasswordOtpComp";

export default function ForgotPasswordOtp() {
  return (
    <Auth containerClassName=" w-[35%] ">
      <ForgotPasswordOtpComp />
    </Auth>
  );
}

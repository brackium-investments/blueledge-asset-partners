import Auth from "@/components/Auth";
import ResetPasswordComp from "@/components/reset-password/ResetPasswordComp";

export default function ResetPassword() {
  return (
    <Auth containerClassName=" w-[35%] max-2xl:w-[45%] max-xlg:w-[55%] max-md:w-[65%] max-smd:w-[80%] max-sm:w-[90%]">
      <p className="text-[2.5rem] font-semibold text-secondary-1 text-center mb-[3rem]">
        Reset Password
      </p>
      <ResetPasswordComp />
    </Auth>
  );
}

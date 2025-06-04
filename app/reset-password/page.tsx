import Auth from "@/components/Auth";
import ResetPasswordComp from "@/components/reset-password/ResetPasswordComp";

export default function ResetPassword() {
  return (
    <Auth containerClassName=" w-[35%]">
      <p className="text-[2.5rem] font-semibold text-secondary-1 text-center mb-[3rem]">
        Reset Password
      </p>
      <ResetPasswordComp />
    </Auth>
  );
}

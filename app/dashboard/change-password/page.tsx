"use client";

import UpdatePasswordForm from "@/components/dashboard/EditProfile/UpdatePasswordForm";

export default function changePassword() {
  return (
    <section className="flex justify-between p-[3rem] max-smd:px-[1.5rem] py-[2rem] rounded-lg bg-white">
      <div className="w-full self-start  ">
        <p className="text-[1.8rem] text-secondary-1 font-semibold mb-[1.5rem] uppercase">
          Update Password
        </p>
        <UpdatePasswordForm />
      </div>
    </section>
  );
}

"use client";
import FooterLinks from "@/components/forms/FooterLinks";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";

import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="form-title">Log Into Your Account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          label="Email"
          name="email"
          placeholder="John_Doe@contact.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: /^\w+@\w+\.\w+$/,
            minLength: 10,
          }}
        />

        <InputField
          label="Password"
          name="password"
          placeholder="********"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 8 }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Signing in" : "Sign in"}
        </Button>

        <FooterLinks
          text="Dont have an account?"
          linkText="Create an account"
          href="/sign-up"
        />
      </form>
    </>
  );
};

export default SignIn;

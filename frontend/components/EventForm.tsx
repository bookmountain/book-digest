"use client";

import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import React, { useState } from "react";
import { Select, SelectItem } from "@heroui/select";

type FormValues = {
  firstName: string;
  lastName: string;
  age: string;
  profession: string;
  email: string;
  instagram: string;
  howDidYouHear: string;
  otherSource: string;
};

type ErrorType = {
  [key in keyof FormValues]?: string;
};

type EventFormProps = {
  eventId?: number;
};

export default function EventForm({ eventId }: EventFormProps) {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    age: "",
    profession: "",
    email: "",
    instagram: "",
    howDidYouHear: "",
    otherSource: "",
  });
  const [errors, setErrors] = useState<ErrorType>({});
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  const validate = (values: FormValues) => {
    const newErrors: ErrorType = {};

    if (!values.firstName) newErrors.firstName = "First name is required";
    if (!values.lastName) newErrors.lastName = "Last name is required";
    if (!values.age) newErrors.age = "Age is required";
    else if (isNaN(Number(values.age))) newErrors.age = "Age must be a number";
    if (!values.profession) newErrors.profession = "Profession is required";
    if (!values.email) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email))
      newErrors.email = "Invalid email";
    if (!values.instagram) newErrors.instagram = "Instagram handle is required";
    if (!values.howDidYouHear)
      newErrors.howDidYouHear = "Please select an option";
    if (values.howDidYouHear === "Other" && !values.otherSource)
      newErrors.otherSource = "Please specify where you found us";

    return newErrors;
  };

  const handleChange = (name: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate(formValues);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }
    setErrors({});
    setSubmitted(formValues);
  };

  return (
    <Form
      className="flex flex-col gap-4"
      validationErrors={errors}
      onReset={() => setSubmitted(null)}
      onSubmit={onSubmit}
    >
      <div className="w-full flex gap-4">
        <Input
          isRequired
          errorMessage={errors.firstName}
          label="First Name"
          labelPlacement="outside"
          name="firstName"
          placeholder="Enter your first name"
          value={formValues.firstName}
          onValueChange={(v) => handleChange("firstName", v)}
        />
        <Input
          isRequired
          errorMessage={errors.lastName}
          label="Last Name"
          labelPlacement="outside"
          name="lastName"
          placeholder="Enter your last name"
          value={formValues.lastName}
          onValueChange={(v) => handleChange("lastName", v)}
        />
      </div>
      <div className="w-full flex gap-4">
        <Input
          isRequired
          errorMessage={errors.age}
          label="Age"
          labelPlacement="outside"
          name="age"
          placeholder="Enter your age"
          type="number"
          value={formValues.age}
          onValueChange={(v) => handleChange("age", v)}
        />
        <Input
          isRequired
          errorMessage={errors.profession}
          label="Your Profession / Occupation"
          labelPlacement="outside"
          name="profession"
          placeholder="What do you do?"
          value={formValues.profession}
          onValueChange={(v) => handleChange("profession", v)}
        />
      </div>
      <Input
        isRequired
        errorMessage={errors.email}
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email address"
        type="email"
        value={formValues.email}
        onValueChange={(v) => handleChange("email", v)}
      />
      <Input
        isRequired
        errorMessage={errors.instagram}
        label="Instagram"
        labelPlacement="outside"
        name="instagram"
        placeholder="Your Instagram handle (so we can tag you!)"
        value={formValues.instagram}
        onValueChange={(v) => handleChange("instagram", v)}
      />
      <Select
        isRequired
        errorMessage={errors.howDidYouHear}
        label="How did you hear about us?"
        labelPlacement="outside"
        name="howDidYouHear"
        placeholder="Select an option"
        selectedKeys={
          formValues.howDidYouHear ? [formValues.howDidYouHear] : []
        }
        onSelectionChange={(keys) =>
          handleChange(
            "howDidYouHear",
            Array.from(keys)[0] !== undefined
              ? String(Array.from(keys)[0])
              : "",
          )
        }
      >
        <SelectItem key="">Select an option</SelectItem>
        <SelectItem key="Instagram">Instagram</SelectItem>
        <SelectItem key="Facebook">Facebook</SelectItem>
        <SelectItem key="Other">Other</SelectItem>
      </Select>
      {formValues.howDidYouHear === "Other" && (
        <Input
          isRequired
          errorMessage={errors.otherSource}
          label="Other? Let us know where you found us"
          labelPlacement="outside"
          name="otherSource"
          placeholder="Please specify"
          value={formValues.otherSource}
          onValueChange={(v) => handleChange("otherSource", v)}
        />
      )}
      <div className="flex gap-4">
        <Button className="w-full" color="secondary" type="submit">
          SUBMIT
        </Button>
      </div>
      {submitted && (
        <div className="text-small text-default-500 mt-4">
          Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </Form>
  );
}

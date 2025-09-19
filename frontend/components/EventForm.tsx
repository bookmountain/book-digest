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
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate(formValues);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    if (!eventId) {
      setErrors({ email: "Event ID is missing" });

      return;
    }

    setErrors({});
    setLoading(true);
    setSuccessMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/event-signups/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event: eventId,
            first_name: formValues.firstName,
            last_name: formValues.lastName,
            age: Number(formValues.age),
            profession: formValues.profession,
            email: formValues.email,
            instagram: formValues.instagram,
            how_did_you_hear: formValues.howDidYouHear,
            other_source: formValues.otherSource || "",
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();

        setErrors({ email: errorData?.email || "Failed to submit" });
        setLoading(false);

        return;
      }

      setSuccessMessage("Successfully registered!");
      setFormValues({
        firstName: "",
        lastName: "",
        age: "",
        profession: "",
        email: "",
        instagram: "",
        howDidYouHear: "",
        otherSource: "",
      });
    } catch (err) {
      setErrors({ email: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      className="flex flex-col gap-4"
      validationErrors={errors}
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
        <SelectItem key="" className="text-gray-500">
          Select an option
        </SelectItem>
        <SelectItem key="Instagram" className="text-gray-500">
          Instagram
        </SelectItem>
        <SelectItem key="Facebook" className="text-gray-500">
          Facebook
        </SelectItem>
        <SelectItem key="Other" className="text-gray-500">
          Other
        </SelectItem>
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
        <Button
          className="w-full"
          color="secondary"
          disabled={loading}
          type="submit"
        >
          {loading ? "Submitting..." : "SUBMIT"}
        </Button>
      </div>

      {successMessage && (
        <div className="text-green-600 text-sm mt-4">{successMessage}</div>
      )}
    </Form>
  );
}

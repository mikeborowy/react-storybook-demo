import React from "react";
import * as yup from "yup";
import { Formik } from "formik";

import FormikTextField from "./FormikTextField";

const withFormik = (initialValues, formikProps) => (storyFn) => (
  <Formik initialValues={initialValues} {...formikProps}>
    {storyFn()}
  </Formik>
);

export default {
  title: "Atoms/FormikTextField",
  component: FormikTextField,
};

export const Default = () => {
  return <FormikTextField name="firstName" label="Firstname" />;
};

Default.story = {
  decorators: [withFormik({ firstName: "Maurice" })],
};

export const Empty = () => {
  return <FormikTextField name="firstName" label="Firstname" />;
};

Empty.story = {
  decorators: [withFormik({ firstName: "" })],
};

export const WithError = () => {
  return <FormikTextField name="firstName" label="Firstname" />;
};

WithError.story = {
  decorators: [
    withFormik(
      { firstName: "" },
      {
        validationSchema: yup.object({
          firstName: yup.string().required(),
        }),
        validateOnMount: true,
      }
    ),
  ],
};

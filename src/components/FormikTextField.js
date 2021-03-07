import React from "react";
import { Field, getIn } from "formik";
import TextField from "@material-ui/core/TextField";

function FormikTextFieldComponent({
  field,
  form: { isSubmitting, touched, errors },
  disabled,
  ...props
}) {
  const fieldError = getIn(errors, field.name);
  // const showError = getIn(touched, field.name) && !!fieldError;

  return (
    <TextField
      disabled={disabled || isSubmitting}
      {...props}
      {...field}
      error={!!fieldError}
      helperText={fieldError}
    />
  );
}

function FormikTextField({ field, ...props }) {
  return (
    <Field component={FormikTextFieldComponent} variant="filled" {...props} />
  );
}

export default FormikTextField;

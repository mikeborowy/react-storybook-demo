/* eslint-disable no-template-curly-in-string */
import * as yup from "yup";

const movieSchema = yup.object({
  title: yup.string().required("Title is required"),
  overview: yup.string(),
  vote_average: yup
    .number()
    .min(0, "Vote average must be greater than or equal to ${min}")
    .max(10, "Vote average must be less than or equal to ${max}"),
});

export default movieSchema;

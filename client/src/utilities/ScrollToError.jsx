import { useFormikContext } from "formik";
import React, { useEffect } from "react";

// eslint-disable-next-line import/prefer-default-export
export function ScrollToError() {
  const formik = useFormikContext();
  const submitting = formik?.isSubmitting;

  // console.log("classNameeeeeeeeeeeeeeeeeeeeeee");

  useEffect(() => {
    const el = document.querySelector(".form-control.is-invalid");
    (el?.parentElement ?? el)?.scrollIntoView();
  }, [submitting]);
  return null;
}

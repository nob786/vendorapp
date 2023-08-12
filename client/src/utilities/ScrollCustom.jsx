// import { useFormikContext } from "formik";
import React, { useEffect } from "react";

// eslint-disable-next-line import/prefer-default-export
export function ScrollCustom() {
  // const formik = useFormikContext();
  // const submitting = formik?.isSubmitting;

  useEffect(() => {
    console.log("className123");
    const el = document.querySelector("hello");
    (el?.parentElement ?? el)?.scrollIntoView();
  }, []);
  return null;
}

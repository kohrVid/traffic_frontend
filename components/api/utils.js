let catchApiErrors = (err, setErrors) => {
  if (err instanceof SyntaxError) {
    setErrors(errors => [
      ...errors,
      "Internal server error - please contact the administrator"
    ]);

    return
  }

  setErrors(errors => [...errors, err.message]);
  console.error(err);
};

export { catchApiErrors };


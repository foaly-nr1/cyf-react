// Custom callback to prevent requests from sending back too much
// information to the frontend, while logging errors in AWS.

export default (successMessage, errorMessage, callback) => (
  (error) => {
    if (error) {
      console.error(error);
      return callback(new Error(`[400] ${errorMessage}`));
    }
    return callback(null, `[200] ${successMessage}`);
  }
);

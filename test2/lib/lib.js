module.exports.registerUser = (username) => {
  if (!username) {
    throw new Error("User is required");
  }
  return { id: new Date().getTime(), username: username };
};

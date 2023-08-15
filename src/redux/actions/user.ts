export interface setUserPayload {
  name: String;
  password: String;
  email: String;
  location: String;
}

const setUser = (payload: setUserPayload) => {
  return {
    type: "SETUSER",
    payload,
  };
};

export default setUser;

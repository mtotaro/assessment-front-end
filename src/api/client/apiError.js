class ApiError extends Error {
  constructor(name, message, parameter) {
    if (!parameter === undefined) {
      super(message);
      this.message = parameter.type;
      this.name = name;
      this.parameter = parameter;
    } else {
      super(message);
      this.name = name;
    }
  }
}

export default ApiError;

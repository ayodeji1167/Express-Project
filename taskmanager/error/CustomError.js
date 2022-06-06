class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const createCustomError = (mssg,status)=>{
    return new CustomError(mssg,status);
}

module.exports ={createCustomError , CustomError}
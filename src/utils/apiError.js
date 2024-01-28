class apiError extends Error {
    constructor(
        statusCode,
        message = 'Something went wrong',
        errors = [],
        statck = ''
    ) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.success = false;
        this.data = null;
        this.errors = errors;
        if (statck) {
            this.stack = statck;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
export { apiError };

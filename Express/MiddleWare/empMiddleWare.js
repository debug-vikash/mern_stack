const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, {convert: false});
        console.log("Validation result:", error);


        if (error) {
            const errorMessage = error.details.map((err) => ({
                field: err.path.join('.'),
                message: err.message
            }));
            return res.status(400).json({ 
                success: false,
                errors: errorMessage });
        }
        next();
    };
}

export default validate;
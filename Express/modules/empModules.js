const employeeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        enum: ["IT", "HR", "Finance", "Marketing"],
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Employee', employeeSchema);
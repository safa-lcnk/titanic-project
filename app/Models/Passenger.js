import mongoose from 'mongoose';

const PassengerSchema = mongoose.Schema({
    passengerId: String,
    survived: Boolean,
    pClass: Number,
    name: String,
    sex: String,
    age: Number,
    sibSp: Number,
    parch: Number,
    ticket: Number,
    fare: Number,
    cabin: Number,
    embarked: String,
});

const Passenger = mongoose.model('Passenger', PassengerSchema);

export default Passenger;

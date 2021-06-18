const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({
    distrik: {
        type: String,
        required: true,
    },
    kampung: {
        type: String,
        required: true
    },
    rt: {
        type: String,
        required: true
    },
    rw: {
        type: String,
        required: true
    },
    no_urut_kk: {
        type: String,
        required: true,
        min: 1,
        max: 8
    },
    no_kk: {
        type: String,
        required: true,
        min: 8,
        max: 30
    },
    tanggal_pendataan: {
        type: Date,
        default: Date.now
    },
    nama_kader: {
        type: String,
        required: true,

    },
    nama_kk: {
        type: String,
        required: true,
        min: 1,
        max: 250
    },
    nik: {
        type: String,
        required: true,
        min: 8,
        max: 30
    },
    tempat_lahir: {
        type: String,
        required: true,
    },
    tanggal_lahir: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Family', familySchema);
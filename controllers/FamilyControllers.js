const Family = require('../models/Family');

exports.getFam = (async (req, res) => {
    const fams = await Family.find();

    res.status(200).render('kk', {
        title: 'Data Kepala Keluarga',
        fams,
    });
});

exports.createFam = (async (req, res) => {
    const newFam = await Family.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            family: newFam
        }
    });
});
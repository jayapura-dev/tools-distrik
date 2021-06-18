const router = require('express').Router();
const Fam = require('../controllers/FamilyControllers');

router.get('', (req, res) => {
    res.render('home', {
        title: 'SIMFOI Kampung'
    });
});

router.post('/create_keluarga', Fam.createFam);
router.get('/keluarga', Fam.getFam);

module.exports = router;

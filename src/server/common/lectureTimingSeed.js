'use strict';

/**
 * Seed model data to database
 */

var mongoose = require('mongoose'),
    Lecture = require('../models/lecture');

mongoose.connect('mongodb://localhost/LecturePlannerDB',{ useNewUrlParser: true });

var lecturet = [{
    subject: 'APM',
    date:'2018.09.01',
    time: '10.30'
},
    {
        subject: 'C++',
        date:'2018.09.02',
        time: '10.30'
    },
    {
        subject: 'Advance cryptography',
        date:'2018.09.03',
        time: '10.30'
    },
    {
        subject: 'Modern Web Development',
        date:'2018.09.04',
        time: '10.30'
    },
    {
        subject: 'Germany language A2',
        date:'2018.09.05',
        time: '10.30'
    }]

Lecture.create(lecturet, function(err, lecture) {
    console.log('Lecture timing seeded to DB');
    process.exit(0);
});

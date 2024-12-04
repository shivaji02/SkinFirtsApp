const olivia = require('../../assets/png/doctors/olivia.png');
const mikal = require('../../assets/png/doctors/mikal.png')
const sophia = require('../../assets/png/doctors/sophia.png')
const alexander = require('../../assets/png/doctors/alexander.png')


export const doctorsdata = [
    {
      'id': 1,
      'name': 'Dr. Olivia Turner',
      'gender': 'Female',
      'specialty': 'Dermato-Endocrinology',
      'rating': 5,
      'reviews': 60,
      'isFav': false,
      'profileImage': olivia,
    },
    {
      'id': 2,
      'name': 'Dr. Alexander Bennett',
      'gender': 'Male',
      'specialty': 'Dermato-Genetics',
      'rating': 4.5,
      'reviews': 40,
      'isFav': false,
      'profileImage': alexander,
    },
    {
      'id': 3,
      'name': 'Dr. Sophia Martinez',
      'gender': 'Female',
      'specialty': 'Cosmetic Bioengineering',
      'rating': 5,
      'reviews': 150,
      'isFav': false,
      'profileImage': sophia,
    },
    {
      'id': 4,
      'name': 'Dr. Michael Davidson',
      'gender': 'Male',
      'specialty': 'Nano-Dermatology',
      'rating': 4.8,
      'reviews': 90,
      'isFav': true,
      'profileImage': mikal,
    },
  ];

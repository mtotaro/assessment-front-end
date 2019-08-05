export const initialState = {
  brastlewark: null,
  searchgnomes: null,
  searched: false,
  pages: 1,
};


export const brastlewark = [
  {
    age: 375,
    friends: ['Sarabink Bombwhistle', 'Minabonk Wronggrill'],
    hair_color: 'Green',
    height: 120.20686,
    id: 32,
    name: 'Whitwright Bombpower',
    professions: [
      'Woodcarver',
      'Miner',
      'Tinker',
    ],
    thumbnail:
      'http://www.publicdomainpictures.net/pictures/10000/nahled/zebra-head-11281366876AZ3M.jpg',
    weight: 37.67368,
  },
  {
    age: 288,
    friends: [],
    hair_color: 'Green',
    height: 110.43628,
    id: 1,
    name: 'Fizkin Voidbuster',
    professions: [
      'Brewer',
      'Medic',
      'Prospector',
      'Gemcutter',
      'Mason',
      'Tailor',
    ],
    thumbnail:
      'http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg',
    weight: 35.279167,
  },
];

export const searchInput = 'Whitwright';

export const searchResults = brastlewark.slice(0, 1);

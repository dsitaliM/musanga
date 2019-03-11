import ArtistModel from '../models/artist';

const artistMockData = [artist1];

const artist1 = new ArtistModel({
    albums: [
        {
            title: 'First Time Ever',
            image: 'm1a.jpg',
            songs: [
                { track: 'World Of Secrets' },
                { track: 'Yearning Of My Obsession' },
                { track: "Don't Need His Life" },
                { track: 'Admiring My Affection' },
                { track: 'Brave Fireworks' },
                { track: 'Babe, Sing With Me' }
            ]
        },
        {
            title: 'Date Of Time',
            image: 'm1a.jpg',
            songs: [
                { track: 'Memories Of The Ages' },
                { track: 'Dream My Romance' },
                { track: 'Forgot My Tomorrow' },
                { track: 'More Dreams' },
                { track: 'Love Memories' },
                { track: 'Babe, Come Back' }
            ]
        },
        {
            title: 'Season Of Power',
            image: 'm1a.jpg',
            songs: [
                { track: 'Sleep In His Eyes' },
                { track: 'Dream Of Your Fire' },
                { track: 'More Forever' },
                { track: 'Lazy Tales' },
                { track: 'Sweetie, Pretty Baby' },
                { track: "She's Crazy" }
            ]
        },
        {
            title: 'Female Tales',
            image: 'm1a.jpg',
            songs: [
                { track: 'Forgot My Song' },
                { track: 'Love Her Touch' },
                { track: "Don't Need His Life" },
                { track: 'Admiring My Affection' },
                { track: 'My Kind Of Midnight' },
                { track: 'Love Her Touch' }
            ]
        },
        {
            title: 'Woman Games',
            image: 'm1a.jpg',
            songs: [
                { track: 'Amused By My Home' },
                { track: 'Woman Fireworks' },
                { track: 'Summer Of Mirrors' },
                { track: "Sweetie, You're Strange" },
                { track: 'Brave Fireworks' },
                { track: 'Honey, Come With Me' }
            ]
        }
    ],
    name: 'Grisel Burges',
    photo: 'f12.jpg'
});

export default artist1;

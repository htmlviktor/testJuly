const movies = {
    links: {
        self: "/movies",
        next: "/movies?cursor=kfbn2b2bfosd",
    },
    data: [
        {
            category: "Action",
            name: "Die Hard",
            release_year: 1988,
            review_score: 8.2,
            views: 29915,
        },
        {
            category: "Action",
            name: "Terminator 2: Judgement Day",
            release_year: 1991,
            review_score: 8.5,
            views: 21521,
        },
        {
            category: "Action",
            name: "The Bourne Ultimatum",
            release_year: 2007,
            review_score: 8,
            views: 12451,
        },
        {
            category: "Comedy",
            name: "Superbad",
            release_year: 2007,
            review_score: 7.6,
            views: 32154,
        },
        {
            category: "Comedy",
            name: "Ghostbusters",
            release_year: 1984,
            review_score: 7.8,
            views: 32671,
        },
        {
            category: "Comedy",
            name: "Hot Fuzz",
            release_year: 2007,
            review_score: 7.9,
            views: 27893,
        },
        {
            category: "SciFi",
            name: "District 9",
            release_year: 2009,
            review_score: 7.9,
            views: 23587,
        },
        {
            category: "SciFi",
            name: "Arrival",
            release_year: 2016,
            review_score: 7.9,
            views: 15873,
        },
        {
            category: "SciFi",
            name: "Children of Men",
            release_year: 2006,
            review_score: 7.9,
            views: 6272,
        },
    ],
};

const getMovies = () => Promise.resolve(movies);

export default getMovies;
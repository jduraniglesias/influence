// Mock Instagram API data
// When ready for production, replace this with actual API calls

export const profileData = {
  id: "17841405822304914",
  username: "j.durannn",
  account_type: "BUSINESS",
  biography: "Software Developer 💻 | Miami 🌴",
  followers_count: 47823,
  follows_count: 892,
  media_count: 156,
  website: "https://javiduran.com"
};

export const postsData = [
  {
    id: "18027947638291047",
    caption: "Python ML starting tutorial! #python #ML #machinelearning",
    media_type: "VIDEO",
    timestamp: "2025-02-14T06:15:00+0000",
    like_count: 2847,
    comments_count: 156,
    impressions: 58439,
    reach: 51283,
    saved: 412
  },
  {
    id: "17956473829104856",
    caption: "Day in the life of a Software Developer in Miami #dayinthelife #miami #software",
    media_type: "CAROUSEL_ALBUM",
    timestamp: "2025-02-11T14:30:00+0000",
    like_count: 3521,
    comments_count: 89,
    impressions: 72150,
    reach: 65430,
    saved: 891
  },
  {
    id: "18104738291046583",
    caption: "Feeling burned out? Don't over do yourself. Take time to rest to let your brain reset! #mental #software #coding",
    media_type: "IMAGE",
    timestamp: "2025-02-08T17:45:00+0000",
    like_count: 1893,
    comments_count: 67,
    impressions: 42180,
    reach: 38920,
    saved: 287
  }
];

// Growth data for analytics (mock week-over-week changes)
export const growthData = {
  followers_change: 2.4,
  engagement_change: 0.8
};

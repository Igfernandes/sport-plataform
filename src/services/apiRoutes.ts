export const apiRoutes = {
  banners: {
    GET: '/publishers/banners',
  },
  files: {
    GET: '/publishers/files',
  },
  adverses: {
    GET: '/publishers/adverses',
  },
  galleries: {
    GET: '/publishers/galleries',
  },
  elections: {
    GET: '/elections',
    DATA: '/elections/data',
  },
  ads: {
    GET: '/publishers/ads',
  },
  featuredAthletes: {
    GET: '/publishers/featured-athletes',
  },
  menu: {
    GET: '/publishers/menu',
  },
  news: {
    GET: `/publishers/news/{newsId}`,
  },
  exams: {
    GET: `/exams/{newsId}`,
  },
  regions: {
    GET: `/address/data/`,
  },
  equipaments: {
    GET: `/publishers/equipaments/`,
  },
  taxs: {
    GET: `/publishers/taxs`,
  },
  schools: {
    GET: {
      federation: `/schools/federation`,
      club: `/schools/club`,
    },
  },
  bidding: {
    GET: `/publishers/bidding/{biddingId}`,
    POST: `/publishers/bidding/{licitacao}/inscribe`,
  },
  contactUs: {
    POST: `/contact-us`,
  },
};

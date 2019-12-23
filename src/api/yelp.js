import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Zp6t1txwZZ50YLjeFrZcql7WLSjCQGMN5KPS0AgNHfg4BmGmAQ0oEWoqU5_M988f0a4z9Kh8V4lEj_vQ1PH4OIBgxXPCCQk-KGX__lLW0bf3iufXMz6RWhfJZgL9XXYx'
    }
});
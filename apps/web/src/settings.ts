import Cookies from 'js-cookie';
import settings from '../config/settings.json';

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const database = isDevelopment ? settings.database.development : settings.database.production;

export default {
	...settings,
	database,
	legalLinks: {
		imprint: '/imprint',
		privacy: '/privacy'
	},
	features: {
		authEnabled: Cookies.get('authEnabled') !== 'false' || typeof window !== 'undefined'
	}
};

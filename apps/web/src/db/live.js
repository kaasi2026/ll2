import isBrowser from '../utils/isBrowser';
import db from './db';

export default (listener) => {
	listener(db);
	if (isBrowser() === true) {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const authStore = require('../auth').default;
		authStore.subscribe(() => listener(db));
	}
};

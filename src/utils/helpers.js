export const getHostName = (originalUrl) => {
	const urlObject = new URL(originalUrl);
	const strippedUrl = urlObject.hostname;
	return strippedUrl;
};

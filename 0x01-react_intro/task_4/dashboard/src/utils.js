const getFullYear = () => new Date().getFullYear()

// console.log(getFullYear());

const getFooterCopy = (isIndex) => isIndex ? 'Holberton School' : 'Holberton School main dashboard';

// console.log(getFooterCopy);

const getLatestNotification = () => "<strong>Urgent requirement</strong> - complete by EOD"


export { getFullYear, getFooterCopy, getLatestNotification }


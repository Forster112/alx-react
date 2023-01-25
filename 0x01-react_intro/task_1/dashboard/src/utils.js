const getFullYear = () => new Date().getFullYear()

// console.log(getFullYear());

const getFooterCopy = (isIndex) => isIndex ? 'Holberton School' : 'Holberton School main dashboard';

// console.log(getFooterCopy);


export { getFullYear, getFooterCopy }


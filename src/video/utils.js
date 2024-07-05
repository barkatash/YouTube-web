export const daysAgo = (date) => {
    const currentDate = new Date();
    const uploadDate = new Date(date);
    const timeDifference = currentDate - uploadDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 2 ;
    return `${daysDifference} days ago`;
  };
  
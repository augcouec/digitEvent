export default async dates => {
    const requests = dates.map(date => fetch(`http://numbersapi.com/${date}/date`));

  return await Promise.all(requests)
        .then(responses => responses)
        .then(responses => Promise.all(responses.map(r => r.text())))
        .then(dates => dates.map(date => date));
};
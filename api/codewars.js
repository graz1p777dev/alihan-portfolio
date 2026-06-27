module.exports = async function handler(request, response) {
  try {
    const apiResponse = await fetch('https://www.codewars.com/api/v1/users/graz1p777dev', {
      headers: { Accept: 'application/json' },
    });

    if (!apiResponse.ok) {
      response.status(apiResponse.status).json({ error: 'Codewars API error' });
      return;
    }

    response.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=300');
    response.status(200).json(await apiResponse.json());
  } catch (error) {
    response.status(500).json({ error: 'Codewars API unavailable' });
  }
};

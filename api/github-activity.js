export default async function handler(request, response) {
  try {
    const [profileResponse, reposResponse, eventsResponse] = await Promise.all([
      fetch('https://api.github.com/users/graz1p777dev', {
        headers: { Accept: 'application/vnd.github+json' },
      }),
      fetch('https://api.github.com/users/graz1p777dev/repos?sort=updated&per_page=6', {
        headers: { Accept: 'application/vnd.github+json' },
      }),
      fetch('https://api.github.com/users/graz1p777dev/events/public?per_page=5', {
        headers: { Accept: 'application/vnd.github+json' },
      }),
    ]);

    if (!profileResponse.ok || !reposResponse.ok || !eventsResponse.ok) {
      response.status(502).json({ error: 'GitHub API error' });
      return;
    }

    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=180');
    response.status(200).json({
      profile: await profileResponse.json(),
      repos: await reposResponse.json(),
      events: await eventsResponse.json(),
    });
  } catch (error) {
    response.status(500).json({ error: 'GitHub API unavailable' });
  }
}

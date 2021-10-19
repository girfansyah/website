const databaseId = process.env.NOTION_DATABASE_ID;

export const getDatabase = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${databaseId}`
  ).then((res) => res.json());
};

export const getPost = async (pageId) => {
  return await fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`).then(
    (res) => res.json()
  );
};

export const formatDate = (date) =>
  new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

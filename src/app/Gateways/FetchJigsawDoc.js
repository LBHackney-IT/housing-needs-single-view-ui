import { AuthHeader } from '.';

function FetchJigsawDoc(userId, documentId) {
  return fetch(
    `${process.env.REACT_APP_HN_API_URL}/jigsaw/${userId}/documents/${documentId}`,
    AuthHeader
  ).then(function(response) {
    return response;
  });
}

export default FetchJigsawDoc;

import { AuthHeader } from '.';

function FetchJigsawDoc(userId, documentId) {
  return fetch(
    `${process.env.REACT_APP_JIGSAW_DOCUMENT_API_URL}/customers/${userId}/documents/jigsaw/${documentId}`,
    AuthHeader
  ).then(function(response) {
    return response;
  });
}

export default FetchJigsawDoc;

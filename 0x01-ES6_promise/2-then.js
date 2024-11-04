export default function handleResponseFromAPI(promise) {
  return promise.then(() => Promise.resolve({ status: 200, body: 'success' })).finally(() => {
    console.log('Got a response from the API');
  }).catch(() => Error());
}

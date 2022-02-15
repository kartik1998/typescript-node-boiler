async function handlePromise(promise: Promise<any>) {
  try {
    const res = await promise;
    return [null, res];
  } catch (err) {
    return [err, null];
  }
}

export { handlePromise };

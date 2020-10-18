const STORAGE_KEYS = {
  SESSION_DATA: "SESSION_DATA",
};

export const saveSessionData = async (data) => {
  try {
    await window.localStorage.setItem(
      STORAGE_KEYS.SESSION_DATA,
      JSON.stringify(data)
    );

    return true;
  } catch (e) {
    console.log(e);

    return false;
  }
};

export const loadSessionData = async (data) => {
  try {
    const sessionData = await window.localStorage.getItem(STORAGE_KEYS.SESSION_DATA);

    return JSON.parse(sessionData) || {};
  } catch(e) {
    console.log(e);

    return false;
  }
};

export const emptySessionData = async () => {
  try {
    await window.localStorage.removeItem(STORAGE_KEYS.SESSION_DATA);

    return true;
  } catch(e) {
    console.log(e);

    return false;
  }
}

export const getErrorMessage = error => {
  return 'LocalStorage had some issues';
}
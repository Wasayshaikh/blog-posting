import { createTransform } from 'redux-persist';

//const EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours
const EXPIRATION_TIME = 10 * 1000; // 24 hours

export const expireTransform = createTransform(
  // Called when saving to storage
  (inboundState: any) => {
    return {
      ...inboundState,
      _persistedAt: Date.now(), // add timestamp
    };
  },
  // Called when loading from storage
  (outboundState: any) => {
    const now = Date.now();
    const saved = outboundState._persistedAt;

    if (saved && now - saved > EXPIRATION_TIME) {
      // Expired: return undefined to ignore this state
       return {
        ...outboundState,
        user: null,
        token: null,
        error: null,
        status: null,
        isLogged:false,
        _persistedAt: Date.now(), 
       }
    }

    return outboundState;
  }
);
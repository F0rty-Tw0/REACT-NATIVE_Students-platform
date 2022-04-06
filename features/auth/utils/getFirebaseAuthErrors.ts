export const getMessageFromErrorCode = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/account-exists-with-different-credential':
    case 'auth/email-already-in-use':
      return 'Email already used. Go to login page.';
    case 'auth/wrong-password':
      return 'Wrong email/password combination.';
    case 'auth/user-not-found':
      return 'No user found with this email.';
    case 'auth/user-disabled':
      return 'User disabled.';
    case 'auth/operation-not-allowed':
      return 'Too many requests to log into this account.';
    case 'auth/operation-not-allowed':
      return 'Server error, please try again later.';
    case 'auth/invalid-email':
      return 'Email address is invalid.';
    default:
      return 'Login failed. Please try again.';
  }
};

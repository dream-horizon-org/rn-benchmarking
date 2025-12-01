export const ALLOWED_DOMAINS = [
    'dream-horizon-org.github.io',
    // Add any other allowed domains here
  ];
  
  export const isUrlAllowed = (url: string): boolean => {
    try {
      const urlObj = new URL(url);
      return ALLOWED_DOMAINS.some(domain => urlObj.hostname === domain);
    } catch {
      return false;
    }
  };
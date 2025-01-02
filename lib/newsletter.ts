export const subscribeToNewsletter = async (email: string): Promise<void> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // In a real application, this would make an API call to your backend
  console.log('Subscribed email:', email);
};
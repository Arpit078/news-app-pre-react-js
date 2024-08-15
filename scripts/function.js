if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("serviceworker.js");
 }
 
// -----------------Add your global states and functions here ------------ //
async function fetchNews(url) {  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
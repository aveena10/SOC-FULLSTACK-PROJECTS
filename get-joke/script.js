// Fetch a joke from the API
async function getJoke() {
  try {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!response.ok) throw new Error("Network response was not ok");
    let data = await response.json();
    return data; // {setup: "...", punchline: "..."}
  } catch (error) {
    console.error("Error fetching joke:", error);
    throw error;
  }
}

// Display the joke in DOM
async function displayJoke() {
  const setupEl = document.getElementById("setup");
  const punchlineEl = document.getElementById("punchline");
  const errorEl = document.getElementById("error");

  try {
    const joke = await getJoke();
    setupEl.textContent = joke.setup;
    punchlineEl.textContent = joke.punchline;
    errorEl.textContent = ""; // clear errors
  } catch (err) {
    setupEl.textContent = "";
    punchlineEl.textContent = "";
    errorEl.textContent = "😢 Couldn’t fetch a joke, try again!";
  }
}

// Event listeners
document.getElementById("getJokeBtn").addEventListener("click", displayJoke);
document.getElementById("nextJokeBtn").addEventListener("click", displayJoke);

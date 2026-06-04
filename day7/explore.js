async function explore(){
  const username = "torvalds";
  const url = `https://api.github.com/users/${username}/repos`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(JSON.stringify(data[0], null, 2));

}

explore();

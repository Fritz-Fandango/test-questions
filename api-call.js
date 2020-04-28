<html>
<head>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
<p>Hello World</p>
<div id="container"></div>
<script>
  console.log("Hello World");
  //
  // Movie search API endpoint:
  // https://jsonmock.hackerrank.com/api/movies/search/?Title={substr}
  //
  // Example:
  // https://jsonmock.hackerrank.com/api/movies/search/?Title=maze
  //

  const apiCall = () => {
    const results = fetch('https://jsonmock.hackerrank.com/api/movies/search/?Title=maze')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      return myJson
    });      
    return results;
  }
  
  const myDiv = document.getElementById('container');
  const myPElem = document.createElement('ul');
  // const results = apiCall();
  myPElem = apiCall().then(results => { 
    const myData = results.data.map(datum => {
      let myLiElem = document.createElement('li');
      myLiElem.append(JSON.stringify(datum))
      myDiv.append(myLiElem);
    })

  myDiv.append(myPElem);
  });
</script> 
</body>
</html>

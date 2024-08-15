const Navbar = () =>{
  return(
      /*html*/`
  <link rel="stylesheet" href="./components/Navbar/Navbar.css">
  <ul id="navbar">
      <li onclick="Home()">Headlines</li>
      <li onclick="Cnn()">News from Cnn</li>
  </ul>
`
  )
}
export default Navbar
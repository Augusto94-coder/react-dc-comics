const MyHeader = () => {
  return (
    <header className="site-header">
      <div className="container">
        <a className="logo" href="#">
          <img src="/dc-logo.png" alt="DC Logo" />
        </a>

        <nav className="main-nav">
          <ul>
            <li><a href="#">Characters</a></li>
            <li><a href="#">Comics</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Collectibles</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Fans</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MyHeader;
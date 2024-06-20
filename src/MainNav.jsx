import React from 'react'

function MainNav() {
  return (
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Shopping Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Shoe Accessories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Vapor-max</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Air-max</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Air-Jordan</a>
          </li>
        </ul>
        <form>
          <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default MainNav
const navbaridea = `
<!-- Navigation-->
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #71b6bd;">
    <div class="container ">
        <div>
            <a href="./body.html">
                <img src="./src/home.png" alt="Home" width="100" height="50">
            </a>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-start" style="margin-right: 10px;">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" style="text-align: left;">
        <!-- Search Form -->
        <li class="nav-item" style="float: right;">
            <form class="d-flex" style="align-items: center;">
                <input class="form-control me-2" type="search" placeholder="🔎" aria-label="Search" list="search-results" style="text-align: left;">
                <datalist id="search-results">
                    <!-- Add your data list options here -->
                    <option value="Option 1">
                    <option value="Option 2">
                    <option value="Option 3">
                </datalist>
            </form>
        </li>
    </ul>
            <form class="d-flex">
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
                        <i class="fas fa-user fa-fw"></i>
                        
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="./mypage/login.html">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </form>
        </div>    
    </div>
</nav>
`;

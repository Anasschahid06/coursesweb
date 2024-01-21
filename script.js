    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener('click', ()=>{
    //Animate Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    });
    function scrollTop(){
        const scrollTop = document.getElementById('scroll-top');
        if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollTop)
    
    function navigateToCategory() {
        var select = document.getElementById("categorySelect");
      
        if (select.value !== "default") {
          // Redirect to the corresponding HTML file based on the selected category
          switch (select.value) {
            case "web":
              window.location.href = "#";
              break;
            case "mobile":
              window.location.href = "#";
              break;
            case "data":
              window.location.href = "#";
              break;
              case "cyber":
                window.location.href = "#";
                break;  
          }
        }
      }
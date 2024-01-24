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
                // Redirect or open link based on the selected category
                switch (select.value) {
                    case "web":
                        window.location.href = "page2__1.html";
                        break;
                    case "mobile":
                        window.location.href = "page2__1 copy.html";
                        break;
                    case "cyber":
                        // Open Telegram link in a new tab
                        window.open("https://t.me/+mn5gJWvRQJhkZTlk", "_blank");
                        break;
                    default:
                        break;
                }
            }
        }
      (function() {
        // get all data in form and return object
        function getFormData(form) {
          var elements = form.elements;
          var honeypot;
      
          var fields = Object.keys(elements).filter(function(k) {
            if (elements[k].name === "honeypot") {
              honeypot = elements[k].value;
              return false;
            }
            return true;
          }).map(function(k) {
            if(elements[k].name !== undefined) {
              return elements[k].name;
            // special case for Edge's html collection
            }else if(elements[k].length > 0){
              return elements[k].item(0).name;
            }
          }).filter(function(item, pos, self) {
            return self.indexOf(item) == pos && item;
          });
      
          var formData = {};
          fields.forEach(function(name){
            var element = elements[name];
            
            // singular form elements just have one value
            formData[name] = element.value;
      
            // when our element has multiple items, get their values
            if (element.length) {
              var data = [];
              for (var i = 0; i < element.length; i++) {
                var item = element.item(i);
                if (item.checked || item.selected) {
                  data.push(item.value);
                }
              }
              formData[name] = data.join(', ');
            }
          });
      
          // add form-specific values into the data
          formData.formDataNameOrder = JSON.stringify(fields);
          formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
          formData.formGoogleSendEmail
            = form.dataset.email || ""; // no email by default
      
          return {data: formData, honeypot: honeypot};
        }
      
        function handleFormSubmit(event) {  // handles form submit without any jquery
          event.preventDefault();           // we are submitting via xhr below
          var form = event.target;
          var formData = getFormData(form);
          var data = formData.data;
      
          // If a honeypot field is filled, assume it was done so by a spam bot.
          if (formData.honeypot) {
            return false;
          }
      
          disableAllButtons(form);
          var url = form.action;
          var xhr = new XMLHttpRequest();
          xhr.open('POST', url);
          // xhr.withCredentials = true;
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xhr.onreadystatechange = function() {
              if (xhr.readyState === 4 && xhr.status === 200) {
                form.reset();
                var formElements = form.querySelector(".form-elements")
                if (formElements) {
                  formElements.style.display = "none"; // hide form
                }
                var thankYouMessage = form.querySelector(".thankyou_message");
                if (thankYouMessage) {
                  thankYouMessage.style.display = "block";
                }
              }
          };
          // url encode form data for sending as post data
          var encoded = Object.keys(data).map(function(k) {
              return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
          }).join('&');
          xhr.send(encoded);
        }
        
        function loaded() {
          // bind to the submit event of our form
          var forms = document.querySelectorAll("form.gform");
          for (var i = 0; i < forms.length; i++) {
            forms[i].addEventListener("submit", handleFormSubmit, false);
          }
        };
        document.addEventListener("DOMContentLoaded", loaded, false);
      
        function disableAllButtons(form) {
          var buttons = form.querySelectorAll("button");
          for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
          }
        }
      })();
      window.onbeforeunload = function () {
        // The following line will refresh the page when the user is about to leave
        location.reload(true);
    };

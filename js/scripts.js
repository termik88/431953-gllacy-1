
var map;
              function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 16,
                  center: new google.maps.LatLng(59.93926, 30.32915),
                  mapTypeId: 'roadmap'
                });

                var iconBase = 'img/';
                var icons = {
                  gllacy: {
                    icon: iconBase + 'pin.png'
                  }
                };

                var features = [
                  {
                    position: new google.maps.LatLng(59.93866, 30.3229),
                    type: 'gllacy'
                  }
                ];

                // Create markers.
                features.forEach(function(feature) {
                  var marker = new google.maps.Marker({
                    position: feature.position,
                    icon: icons[feature.type].icon,
                    map: map
                  });
                });
              }

/*Модальное окно обратной связи*/
      var link = document.querySelector(".feedback-link");
      
      var popup = document.querySelector(".modal-feedback");
      var close = popup.querySelector(".modal-close");
      var wrapper = document.querySelector(".modal-feedback-wrapper");
      
      var form = popup.querySelector("form");
      var login = popup.querySelector("[name = feedback-name]");
      var mail = popup.querySelector("[name = feedback-email]");
      var text = popup.querySelector("[name = comment]");
      
      var storageLogin = localStorage.getItem("feedback-name");
      var storageMail = localStorage.getItem("feedback-email");
      
      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        wrapper.classList.add("modal-wrapper-show")
        


        if (storageLogin) {
          login.value = storageLogin;
          if (storageMail) {
            mail.value = storageMail;
            text.focus();
          } else {
            mail.focus();
          }
        } else {
          login.focus();
        }
      });
      
      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        wrapper.classList.remove("modal-wrapper-show")
        popup.classList.remove("modal-error");
      });
      
      form.addEventListener("submit", function (evt) {
        if (!login.value || !mail.value) {
          evt.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        } else {
          localStorage.setItem("feedback-name", login.value);
        }
      });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
      if (wrapper.classList.contains("modal-wrapper-show")) {
        wrapper.classList.remove("modal-wrapper-show");

      }
    }
  });
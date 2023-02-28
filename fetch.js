function loadEveryFetchDatas() {

      setTimeout(() => {
          document.querySelector(".body-section") && document.querySelector(".body-section").remove()
          
          document.querySelector(".card") &&
          [...document.getElementsByClassName(".card")].forEach((index, pen) => {
                if (index < 2) {
                      pen.remove()
                }
          })
      
      }, 1000)
}

loadEveryFetchDatas();
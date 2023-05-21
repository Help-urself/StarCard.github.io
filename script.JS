window.addEventListener("scroll", function() {
    var element = document.getElementById("123");
    let value = this.window.scrollY
      element.style.marginRight =  value * 2.5 + 'px';

    }
  );
  
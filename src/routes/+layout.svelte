<script>
    import "../app.css";
    let darkTheme = false;
    function togleColorTheme() {
      if (darkTheme) {
        darkTheme = false;;
        document.body.classList.remove("dark");
      } else {
        darkTheme = true;
        document.body.classList.add("dark");
      }
    }
  </script>
  <header class="py-9 shadow-xl bg-slate-200 dark:bg-gray-900" >
    <div class="container flex justify-between px-3 mx-auto ">
      <h1 class="text-xl font-extrabold">Where in the world?</h1>
      <button on:click={togleColorTheme}><i class="fa-light fa-moon" /> Dark Mode</button>
    </div>
  </header>
  <slot />
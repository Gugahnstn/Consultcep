<script>
  import Search from "./components/Search.svelte";
</script>
<section>
  <div class="container-search-and-option">
    <div class="options"><span class="span-options">Códigos Postal</span><span class="pipe-span">|</span><span class="span-options">Rastreamento</span></div>
    <div class="search">
      <Search/>
    </div>
  </div>
</section>

<style>
  .container-search-and-option {
    margin: 8rem 0rem;
  }

  .options {
    text-align: center;
    margin-bottom: 1rem;
  }

  .options span {
    font-family: var(--font-poppins);
    font-size: 1.2rem;
    font-weight: 500;
    color: #ffff;
  }

  .pipe-span {
    margin: 0rem 1rem;
    cursor: default;
  }
  
  .span-options {
    cursor: pointer;
  }

  /* .span-options::after {
    content: "";
    width: 1%;
    height: 1%;
    position: absolute;
    background-color: #000;
  } */

  .search {
    margin: 0 auto;
    display: flex;
  }

</style>